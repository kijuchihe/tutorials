# Serializing a single model

Serializers in Django REST Framework are responsible for converting objects into
data types understandable by javascript and front-end frameworks. Serializers
also provide deserialization, allowing parsed data to be converted back into
complex types, after first validating the incoming data.

When creating a serializer, you also pass in the fields that you want to be
serialized/deserialized

## Using and Inheritting from the `Serializer` class

The Serializer class comes with some already built in

### Model

```py
from django.db import models


class Post(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    text = models.TextField()
    author = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']
```

### Serializer

```py
from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    text = serializers.CharField(style={'base_template': 'textarea.html'})
    author = serializers.PrimaryKeyRelatedField(read_onlu=True)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance
```

A `Serializer` class is very similar to a Django `Form` class, and includes
similar validation flags or on the various fields, such as `required`,
`max_length` and `default`.

The `field flags` or `arguments` can also tell how the serializer should be
displayed in some cases, like when rendering to HTML. The
`{'base_template': 'textarea.html'}` flag above assigned to the `code` property
is equivalent to setting `widgets.Textarea` on a `widget` property on a Django
Form class. This can be very useful when trying to control how the browsable API
should be displayed (like in what format it should be displayed)

### Examples

> **In the views.py of the posts app,**

The problem with this is that you have to do alot of setup yourself when using
the serializer model

```py
import io
from posts.models import Post
from .posts import PostSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

post1 = Post(title="Hello", text="World", author='1')
post1.save()
# When we call the .save() method, either the create() or update() methods is called
# Those two operations define the flow of the serializers

post1 = Post(title="Title 2", text="Some random text", author='1')
post2.save()

# We pass in the model that we want to serialize to the serializers

serializer = SnippetSerializer(post2)
# This will serialize the data (i.e. change it into other forms)
print(serializer.data)
# This will print out the data

# Now to render that, and specify
content = JSONRenderer().render(serializer.data)
print(content)

# As I said, a serializer can convert data to different data types and string types.
# Now to convert it back to normal python format
# Now when we are given data, to validate

stream = io.BytesIO(content)
data = JSONParser().parse(stream)


serializer = SnipperSerializer(data=data)
if serializer.is_valid():
    print(serializer.validater_data)
    serializer.save()
    # Now this will call the update method on it
```

## Serializing a queryset

We can also serialize querysets instead of model instances. To do so we simply
add a `many=True` flag to the serializer arguments and passing the queryset as
an argument.

```py
queryset = Snippet.objects.all()

serializer = SnippetSerializer(queryset, many=True)
print(serializer.data)
```
