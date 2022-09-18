# Making Custom Serializers

## Using ModelSerializers

Our `SnippetSerializer` class is replicating a lot of information that's also
contained in the Snippet model. It would be nice if we could keep our code a bit
more `concise`.

In the same way that Django provides both `Form` classes and `ModelForm`
classes, REST framework includes both `Serializer` classes, and
`ModelSerializer` classes.

Let's look at refactoring our serializer using the `ModelSerializer` class. Open
the file snippets/serializers.py again, and replace the SnippetSerializer class
with the following.

```py
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']
```

One nice property that serializers have is that you can inspect all the fields
in a serializer instance, by printing its representation. Open the Django shell
with python manage.py shell, then try the following:

```py
from snippets.serializers import SnippetSerializer

serializer = SnippetSerializer()
print(repr(serializer))

# SnippetSerializer():

# id = IntegerField(label='ID', read_only=True)

# title = CharField(allow_blank=True, max_length=100, required=False)

# code = CharField(style={'base_template': 'textarea.html'})

# linenos = BooleanField(required=False)

# language = ChoiceField(choices=[('Clipper', 'FoxPro'), ('Cucumber', 'Gherkin'), ('RobotFramework', 'RobotFramework'), ('abap', 'ABAP'), ('ada', 'Ada')...

# style = ChoiceField(choices=[('autumn', 'autumn'), ('borland', 'borland'), ('bw', 'bw'), ('colorful', 'colorful')...
```

It's important to remember that `ModelSerializer` classes don't do anything
particularly magical, they are simply a shortcut for creating serializer
classes:

- An automatically determined set of fields.
- Simple default implementations for the create() and update() methods.

## Writing regular Django views using our Serializer

Let's see how we can write some API views using our new Serializer class. For
the moment we won't use any of REST framework's other features, we'll just write
the views as regular Django views.

Edit the snippets/views.py file, and add the following.

```py
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer

# The root of our API is going to be a view that supports listing all the existing
# snippets, or creating a new snippet.

@csrf_exempt
def snippet_list(request):
    """ List all code snippets, or create a
    new snippet. """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


# We'll need a view which corresponds to an individual snippet,
# and can be used to retrieve, update or delete the snippet.

@csrf_exempt
def snippet_detail(request, pk):
    """ Retrieve, update or delete a
    code snippet. """
    try: snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = SnippetSerializer(snippet)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(snippet, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        snippet.delete()
        return HttpResponse(status=204)

```

Note that because we want to be able to POST to this view from clients that
won't have a CSRF token we need to mark the view as `csrf_exempt`. This isn't
something that you'd normally want to do, and REST framework views actually use
more sensible behavior than this, but it'll do for our purposes right now.

Finally we need to wire these views up. Create the snippets/urls.py file:

```py
from django.urls import path
from snippets import views

urlpatterns = [
    path('snippets/', views.snippet_list),
    path('snippets/<int:pk>/', views.snippet_detail),
]
```

We also need to wire up the root urlconf, in the tutorial/urls.py file, to
include our snippet app's URLs.

```py
from django.urls import path, include

urlpatterns = [ path('', include('snippets.urls')), ]
```

It's worth noting that there are a couple of edge cases we're not dealing with
properly at the moment. If we send malformed json, or if a request is made with
a method that the view doesn't handle, then we'll end up with a 500 "server
error" response.

Still, this'll do for now.

Testing our first attempt at a Web API Now we can start up a sample server that
serves our snippets.

```py
python manage.py runserver
```

Validating models...

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

Where are we now We're doing okay so far, we've got a serialization API that
feels pretty similar to Django's Forms API, and some regular Django views.

Our API views don't do anything particularly special at the moment, beyond
serving json responses, and there are some error handling edge cases we'd still
like to clean up, but it's a functioning Web API.
