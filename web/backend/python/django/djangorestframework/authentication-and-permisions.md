# Authentication & Permissions

We'd like to have some more advanced behavior in order to make sure that:

- Code snippets are always associated with a creator.
- Only authenticated users may create snippets.
- Only the creator of a snippet may update or delete it.
- Unauthenticated requests should have full read-only access.

## Adding information to our model

```py
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

# And now we can add a .save() method to our model class:


def save(self, *args, **kwargs):
    """
    Use the `pygments` library to create a highlighted HTML
    representation of the code snippet.
    """
    lexer = get_lexer_by_name(self.language)
    linenos = 'table' if self.linenos else False
    options = {'title': self.title} if self.title else {}
    formatter = HtmlFormatter(style=self.style, linenos=linenos,
                              full=True, **options)
    self.highlighted = highlight(self.code, lexer, formatter)
    super().save(*args, **kwargs)
```

You might also want to create a few different users, to use for testing the API.
The quickest way to do this will be with the `createsuperuser` command.

```py
python manage.py createsuperuser
```

Adding endpoints for our User models Now that we've got some users to work with,
we'd better add representations of those users to our API. Creating a new
serializer is easy. In serializers.py add:

from django.contrib.auth.models import User

```py
class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'snippets']
```

Because 'snippets' is a reverse relationship on the User model, it will not be
included by default when using the ModelSerializer class, so we needed to add an
explicit field for it.

We'll also add a couple of views to views.py.

We'd like to just use read-only views for the user representations, so we'll use
the `ListAPIView` and `RetrieveAPIView` generic class-based views.

```py
from django.contrib.auth.models import User
from snippets.serializers import UserSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

Make sure to also import the UserSerializer class

Finally we need to add those views into the API, by referencing them from the
URL conf. Add the following to the patterns in `posts/urls.py`.

path('users/', views.UserList.as_view()), path('users/<int:pk>/',
views.UserDetail.as_view()),

## Associating Snippets with Users

Right now, if we created a code snippet, there'd be no way of associating the
user that created the snippet, with the snippet instance. The user isn't sent as
part of the serialized representation, but is instead a property of the incoming
request.

The way we deal with that is by overriding a `.perform_create()` method on our
snippet views, that allows us to modify how the instance save is managed, and
handle any information that is implicit in the incoming request or requested
URL.

On the PostList view class, add the following method:

```py
def perform_create(self, serializer):
    serializer.save(author=self.request.user)
```

The `create()` method of our serializer will now be passed an additional
'author' field, along with the validated data from the request.

## Updating our serializer

Now that posts are associated with the user that created them, let's update our
PostSerializer to reflect that. Add the following field to the serializer
definition in serializers.py:

```py
author = serializers.ReadOnlyField(source='author.username')
```

Note: Make sure you also add 'author', to the list of fields in the inner Meta
class.

This field is doing something quite interesting. The `source` argument controls
which attribute is used to populate a field, and can point at any attribute on
the serialized instance. It can also take the dotted notation shown above, in
which case it will traverse the given attributes, in a similar way as it is used
with Django's template language.

The field we've added is the untyped ReadOnlyField class, in contrast to the
other typed fields, such as CharField, BooleanField etc... The untyped
ReadOnlyField is always read-only, and will be used for serialized
representations, but will not be used for updating model instances when they are
deserialized. We could have also used CharField(read_only=True) here.

## Adding required permissions to views

Now that posts are associated with users, we want to make sure that only
authenticated users are able to create, update and delete posts.

REST framework includes a number of permission classes that we can use to
restrict who can access a given view. In this case the one we're looking for is
`IsAuthenticatedOrReadOnly`, which will ensure that authenticated requests get
read-write access, and unauthenticated requests get read-only access.

First add the following import in the views module

```py
from rest_framework import permissions

# Then, add the following property to both the SnippetList and SnippetDetail view classes.

permission_classes = [permissions.IsAuthenticatedOrReadOnly]
```

## Adding login to the Browsable API

If you open a browser and navigate to the browsable API at the moment, you'll
find that you're no longer able to create new code snippets. In order to do so
we'd need to be able to login as a user.

We can add a login view for use with the browsable API, by editing the URLconf
in our project-level urls.py file.

Add the following import at the top of the file:

```py
from django.urls import path, include

# And, at the end of the file, add a pattern to include the login and logout views for the browsable API.

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
```

The `'api-auth/'` part of pattern can actually be whatever URL you want to use.

Now if you open up the browser again and refresh the page you'll see a 'Login'
link in the top right of the page. If you log in as one of the users you created
earlier, you'll be able to create code snippets again.

Once you've created a few code snippets, navigate to the '/users/' endpoint, and
notice that the representation includes a list of the snippet ids that are
associated with each user, in each user's 'snippets' field.

Object level permissions Really we'd like all code snippets to be visible to
anyone, but also make sure that only the user that created a code snippet is
able to update or delete it.

To do that we're going to need to create a custom permission.

In the snippets app, create a new file, permissions.py

```py
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user
```

Now we can add that custom permission to our snippet instance endpoint, by
editing the permission_classes property on the SnippetDetail view class:

```py
from snippets.permissions import IsOwnerOrReadOnly
permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]
Make sure to also import the IsOwnerOrReadOnly class.
```

Now, if you open a browser again, you find that the 'DELETE' and 'PUT' actions
only appear on a snippet instance endpoint if you're logged in as the same user
that created the code snippet.

## Authenticating with the API

Because we now have a set of permissions on the API, we need to authenticate our
requests to it if we want to edit any snippets. We haven't set up any
authentication classes, so the defaults are currently applied, which are
SessionAuthentication and BasicAuthentication.

When we interact with the API through the web browser, we can login, and the
browser session will then provide the required authentication for the requests.

If we're interacting with the API programmatically we need to explicitly provide
the authentication credentials on each request.

If we try to create a post without authenticating, we'll get an error:

```py
http POST http://127.0.0.1:8000/snippets/ code="print(123)"
py{
    "detail": "Authentication credentials were not provided."
}
```

We can make a successful request by including the username and password of one
of the users we created earlier.

````py
http -a admin:password123 POST http://127.0.0.1:8000/snippets/ code="print(789)"

{
    "id": 1,
    "owner": "admin",
    "title": "foo",
    "code": "print(789)",
    "linenos": false,
    "language": "python",
    "style": "friendly"
}```
Summary
We've now got a fairly fine-grained set of permissions on our Web API, and end points for users of the system and for the code snippets that they have created.

In part 5 of the tutorial we'll look at how we can tie everything together by creating an HTML endpoint for our highlighted snippets, and improve the cohesion of our API by using hyperlinking for the relationships within the system.
````
