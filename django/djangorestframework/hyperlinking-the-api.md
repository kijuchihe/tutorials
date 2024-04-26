# Hyperlinking our API

Dealing with relationships between entities is one of the more challenging
aspects of Web API design. There are a number of different ways that we might
choose to represent a relationship:

- Using primary keys.
- Using hyperlinking between entities.
- Using a unique identifying slug field on the related entity.
- Using the default string representation of the related entity.
- Nesting the related entity inside the parent representation.
- Some other custom representation.

REST framework supports all of these styles, and can apply them across forward
or reverse relationships, or apply them across custom managers such as generic
foreign keys.

In this case we'd like to use a `hyperlinked` style between entities. In order
to do so, we'll modify our serializers to extend HyperlinkedModelSerializer
instead of the existing `ModelSerializer`.

The `HyperlinkedModelSerializer` has the following differences from
`ModelSerializer`:

- It does not include the id field by default.
- It includes a url field, using HyperlinkedIdentityField.

Relationships use HyperlinkedRelatedField, instead of PrimaryKeyRelatedField. We
can easily re-write our existing serializers to use hyperlinking.

> In your snippets/serializers.py add:

```py
class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='snippet-highlight', format='html')

    class Meta:
        model = Snippet
        fields = ['url', 'id', 'highlight', 'owner',
                  'title', 'code', 'linenos', 'language', 'style']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    snippets = serializers.HyperlinkedRelatedField(many=True, view_name='snippet-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'snippets']
```

Notice that we've also added a new `'highlight'` field. This field is of the
same type as the `url` field, except that it points to the `'snippet-highlight'`
url pattern, instead of the `'snippet-detail'` url pattern.

Because we've included format suffixed URLs such as '.json' -> `format="json"`,
we also need to indicate on the highlight field that any format suffixed
hyperlinks it returns should use the '.html' `format="html"`suffix.

## Making sure our URL patterns are named

If we're going to have a hyperlinked API, we need to make sure we name our URL
patterns. Let's take a look at which URL patterns we need to name.

- The root of our API refers to 'user-list' and 'snippet-list'.
- Our snippet serializer includes a field that refers to 'snippet-highlight'.
- Our user serializer includes a field that refers to 'snippet-detail'.
- Our snippet and user serializers include `'url'` fields that by default will
  refer to '{model_name}-detail', which in this case will be `'snippet-detail'`
  and `'user-detail'`. After adding all those names into our URLconf, our final
  snippets/urls.py file should look like this:

```py
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views

# API endpoints
urlpatterns = format_suffix_patterns([
    path('', views.api_root),
    path('snippets/',
        views.SnippetList.as_view(),
        name='snippet-list'),
    path('snippets/<int:pk>/',
        views.SnippetDetail.as_view(),
        name='snippet-detail'),
    path('snippets/<int:pk>/highlight/',
        views.SnippetHighlight.as_view(),
        name='snippet-highlight'),
    path('users/',
        views.UserList.as_view(),
        name='user-list'),
    path('users/<int:pk>/',
        views.UserDetail.as_view(),
        name='user-detail')
])
```
