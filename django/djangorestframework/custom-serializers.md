# Making Custom Serializers

## Using ModelSerializers

Our `PostSerializer` class is actually inheritting a log from the `Snippet`
model. It would be nice if we could keep our code a bit more brief.

In the same way that Django provides both `Form` classes and `ModelForm`
classes, REST framework includes both `Serializer` classes, and
`ModelSerializer` classes.

Let's look at refactoring our serializer using the `ModelSerializer` class. Open
the file posts/serializers.py again, and replace the `PostSerializer` class with
the following.

```py
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']
```

One nice property that serializers have is that you can inspect all the fields
in a serializer instance, by printing its representation. Open the Django shell
with

```py
python manage.py shell
```

```py
from posts.serializers import PostSerializer

serializer = PostSerializer()
print(repr(serializer))

PostSerializer():
id = IntegerField(label='ID', read_only=True)
title = CharField(allow_blank=True, max_length=100, required=False)
code = CharField(style={'base_template': 'textarea.html'})
linenos = BooleanField(required=False)
language = ChoiceField(choices=[
    ('Clipper', 'FoxPro'),
    ('Cucumber', 'Gherkin'),
    ('RobotFramework', 'RobotFramework'),
    ('abap', 'ABAP'),
    ('ada', 'Ada'),
    ...,
])
style = ChoiceField(choices=[
    ('autumn', 'autumn'),
    ('borland', 'borland'),
    ('bw', 'bw'),
    ('colorful', 'colorful'),
    ...,
])
```

You should know that the `ModelSerializer` class doesn't do anything special,
they are simply a shortcut for creating serializer classes:

- An automatically determined set of fields.
- Simple default implementations for the create() and update() methods. so you
  don't have to create them yourself

## Writing regular Django views using our Serializer

The same way we write regular django views,

> `posts/views.py`

```py
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from posts.models import Post
from posts.serializers import PostSerializer

# The root of our API is going to be a view that supports listing all the existing
# posts (getting the posts), or creating a new post(creating a post request).

# The csrf_exempt will
@csrf_exempt
def post_list(request):
    """
    List all code posts, or create a
    new post.
    """
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)
        # The safe=False allows Json to accept any python data type to be passed on
        # Setting it to true will make it accept only dictionaries as parameters

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        # from this you can see that if you want to deserialize the data received,
        # You can just pass it to the serializer class which will then convert it
        # to a complex python data type
        if serializer.is_valid():
            # We check the validity of the serializer
            serializer.save()
            # We then save the data
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


# We'll need a view which corresponds to an individual post,
# and can be used to retrieve, update or delete the post.

# We'll call our view post_detail

@csrf_exempt
def post_detail(request, pk):
    """
    Retrieve, update or delete a
    code post.
    """
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(snippet)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
        # Passing in the errors if the data passed into the serializer is not valid

    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)
```

By now we should know that django doesn't allow post requests withour csrf
tokens. In order to be able to make a post request to that view, we need to mark
the view as an exception to the csrf rule using the `csrf_exempt` decorator.

There are other ways that you can authenticate your api because using the
csrf_exempt can be dangerous

> posts/urls.py

```py
from django.urls import path
from posts import views

urlpatterns = [
    path('posts/', views.snippet_list),
    path('posts/<int:pk>/', views.snippet_detail),
]
```

In the project directory (the one with the `settings.py`) we open the `urls.py`
file, to include our posts app's URLs.

```py
from django.urls import path, include

urlpatterns = [
    path('', include('posts.urls')),
]
```

It's worth noting that there are a couple of edge cases we're not dealing with
properly at the moment. If we send malformed json, or if a request is made with
a method that the view doesn't handle, then we'll end up with a 500 "server
error" response. Still, this'll do for now.

## Testing our first attempt at a Web API

Now we can start up a sample server that serves our posts.

```py
python manage.py runserver
```

In another terminal window, we can test the server.

We can test our API using curl or httpie. Httpie is a user friendly http client
that's written in Python. Let's install that.

You can install httpie using pip:

```py
pip install httpie
```

Finally, we can get a list of all of the snippets:

```py
http http://127.0.0.1:8000/snippets/

HTTP/1.1 200 OK ...
[
    {
        "id": 1,
        "title": "",
        "code": "foo = \"bar\"\n",
        "linenos": false,
        "language": "python",
        "style": "friendly"
    },
    {
        "id": 2,
        "title": "",
        "code": "print(\"hello, world\")\n",
        "linenos": false,
        "language": "python",
        "style": "friendly"
    }
]
```

Or we can get a particular snippet by referencing its id:

```py
http http://127.0.0.1:8000/snippets/2/

HTTP/1.1 200 OK ...
{
    "id": 2,
    "title": "",
    "code": "print(\"hello, world\")\n",
    "linenos": false,
    "language": "python",
    "style": "friendly"
}
```

Similarly, you can have the same json displayed by visiting these URLs in a web
browser.

## Notes

- You've learned to make custom serializers using the `ModelSerializer`
- We've seen the similarity to django's `Form` model
- We've made an api with regular django views
  - In this we used the JsonResponse
    - What `safe=False` does
  - We've used views and different request methods:
    - GET
    - POST
    - DELETE
    - PUT

> Our API views don't do anything particularly special at the moment, beyond
> serving json responses, and there are some error handling edge cases we'd
> still like to clean up, but it's a functioning Web API. Congratulations!!!😁😏
