# Serializing a single model

Serializers in Django REST Framework are responsible for converting objects into
data types understandable by javascript and front-end frameworks. Serializers
also provide deserialization, allowing parsed data to be converted back into
complex types, after first validating the incoming data.

## Model

```py
from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
    style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)

    class Meta:
        ordering = ['created']
```

## Serializer

```py
from rest_framework import serializers
from snippets.models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES


class SnippetSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    code = serializers.CharField(style={'base_template': 'textarea.html'})
    linenos = serializers.BooleanField(required=False)
    language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
    style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

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
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance
```

A `Serializer` class is very similar to a Django `Form` class, and includes
similar validation flags on the various fields, such as `required`, `max_length`
and `default`.

The field flags can also control how the serializer should be displayed in
certain circumstances, such as when rendering to HTML. The
`{'base_template': 'textarea.html'}` flag above assigned to the code property is
equivalent to using `widget=widgets.Textarea` on a Django Form class. This is
particularly useful for controlling how the browsable API should be displayed.

## Examples

```py
import io
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

snippet1 = Snippet(code='foo = "bar"\n')
snippet1.save()
# When we call the .save() method, either the create() or update() methods is called
# Those two operations define the flow of the serializers

snippet2 = Snippet(code='print("hello, world")\n')
snippet2.save()

# We pass in the model that we want to serialize to the serializers

serializer = SnippetSerializer(snippet1)
print(serializer.data)

# {'id': 2, 'title': '', 'code': 'print("hello, world")\n', 'linenos': False, 'language': 'python', 'style': 'friendly'}
# The serializer compiles it to native python code

# Now to render that,
content = JSONRenderer().render(serializer.data)
print(content)
# b'{"id": 2, "title": "", "code": "print(\\"hello, world\\")\\n", "linenos": false, "language": "python", "style": "friendly"}'

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
