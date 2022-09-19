# Requests and Responses

## Request objects

REST framework introduces a `Request` object that extends the regular
`HttpRequest`, and provides more flexible request parsing. The core
functionality of the `Request` object is the `request.data` attribute. That
means that instead of doing request.POST or request.GET and things like that we
just use request.data as we'll see., which is similar to `request.POST`, but
more useful for working with Web APIs.

```py
request.POST # Only handles form data. Only works for 'POST' method.
request.data # Handles arbitrary data. Works for 'POST', 'PUT' and 'PATCH' methods.
```

## Response objects

REST framework also introduces a `Response` object, which is a type of
`TemplateResponse` that takes unrendered content and uses content negotiation to
determine the correct content type to return to the client.

```py
return Response(data) # Renders to content type as requested by the client.
```

## Status codes

Using numeric HTTP status codes in your views doesn't always make for obvious
reading, and it's easy to not notice if you get an error code wrong. REST
framework provides more explicit identifiers for each status code, such as
`HTTP_400_BAD_REQUEST` in the `status` module. It's a good idea to use these
throughout rather than using numeric identifiers.

## Wrapping API views

REST framework provides two wrappers you can use to write API views.

- The @api_view decorator for working with function based views.
- The APIView class for working with class-based views.

These wrappers provide a few bits of functionality such as making sure you
receive `Request` instances in your view, and adding context to `Response`
objects so that content negotiation can be performed.

The wrappers also provide behaviour such as returning 405 Method Not Allowed
responses when appropriate, and handling any `ParseError` exceptions that occur
when accessing `request.data` with malformed input.

Pulling it all together Okay, let's go ahead and start using these new
components to refactor our views slightly.

```py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from posts.models import Post
from posts.serializers import PostSerializer


# Here we use the api_view
@api_view(['GET', 'POST'])
def post_list(request):
    """
    List all code
    posts, or create a new post.
    """
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
        # Notice that we're using the Response object from the rest_framework

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

Now you will notice that the instance view is an improvement over the previous
example. It's a little more concise (brief). We're also using named status
codes, which makes the response meanings more obvious.

Here is the view for an individual post, in the views.py module.

```py
@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
    """ Retrieve, update or delete a code post.
    """
    try:
        post = post.objects.get(pk=pk)
    except post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
```

As you can see, just a few changes have been made

Remember that in the last tutorial we did something like
`data = JSONParser().parse(request)`: notice that we're no longer explicitly
tying our requests or responses to a given content type. This is because
`request.data` can handle incoming json requests, but it can also handle other
formats.

Similarly we're returning `response` objects with data, but allowing REST
framework to render the response into the correct content type for us.

## Adding optional format suffixes to our URLs

One beauty about djangorestframework is that you can also explicitly telling
what type of data should be served. The way you do that is by adding support for
format suffixes to our API endpoints. Using format suffixes gives us URLs that
explicitly refer to a given format, and means our API will be able to handle
URLs such as `http://example.com/api/items/4.json.`

Start by adding a format keyword argument to both of the views, like so.

```py
def post_list(request, format=None):
```

> and

```py
def post_detail(request, pk, format=None):
```

Now in the `posts/urls.py` file, you'll need to extension support to the urls by
using the `format_suffix_patterns` and wrapping it around the urlpatterns. It
can be imported from `rest_framework.urpatterns`

```py
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from posts import views

urlpatterns = [
    path('posts/', views.post_list),
    path('posts/<int:pk>/', views.post_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
```

We don't necessarily need to add these extra url patterns in, but it gives us a
simple, clean way of referring to a specific format.

## POST using form data

```sh
http --form POST http://127.0.0.1:8000/posts/ code="print(123)"

{
    "id": 3,
    "title": "",
    "code": "print(123)",
    "linenos": false,
    "language": "python",
    "style": "friendly"
}
```

## POST using JSON

```sh
http --json POST http://127.0.0.1:8000/posts/ code="print(456)"

{
    "id": 4,
    "title": "",
    "code": "print(456)",
    "linenos": false,
    "language": "python",
    "style": "friendly"
}
# If you add a --debug switch to the http requests above, you will be able to see the request type in request headers.
```

Now go and open the API in a web browser, by visiting
<http://127.0.0.1:8000/posts/>.

## Browsability

Because the API chooses the content type of the response based on the client
request, it will, by default, return an HTML-formatted representation of the
resource when that resource is requested by a web browser. This allows for the
API to return a fully web-browsable HTML representation.

Having a web-browsable API is a huge usability win, and makes developing and
using your API much easier. It also dramatically lowers the barrier-to-entry for
other developers wanting to inspect and work with your API.
