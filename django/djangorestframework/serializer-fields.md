# Serializer Fields and

## Serializer Fields

| Field Name          | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| BooleanField        | A boolean fiels used to wrap True or False Values                                       |
| CharField           | Used to store text representation                                                       |
| ChoiceField         |                                                                                         |
| DateField           |                                                                                         |
| DateTimeField       |                                                                                         |
| DecimalField        |                                                                                         |
| DictField           |                                                                                         |
| DurationField       |                                                                                         |
| EmailField          | TextField that makes sure text is an email address                                      |
| FileField           |                                                                                         |
| FloatField          | Basically a float field that validates the input against python's `float` instance      |
| ImageField          |                                                                                         |
| IntegerField        | Basically an integer field that validates the input against python's `int` instance     |
| IPAddressField      | IPAddressField is a field that ensures the input is a valid IPv4 or IPv6 string         |
| JSONField           |                                                                                         |
| ListField           |                                                                                         |
| MultipleChoiceField |                                                                                         |
| NullBooleanField    | A boolean field that accepts True, False and Null                                       |
| RegexField          | Matches the string to a particular regular expression else raises an error              |
| SlugField           | This is also like a RegexField that validates input against the pattern [a-zA-Z0-9_-]+. |
| TimeField           |                                                                                         |
| URLField            | This is basically a RegexField that validates the input against a URL matching pattern  |

Hidden
