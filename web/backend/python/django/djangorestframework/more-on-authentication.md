# Authentication

Authentication is a way of associating requests with cretain identifiers such as
the user who sent the request or the token assigned with that request.

The REST framework provides several authentication methods and also allows for
custom authentication schemes

> Note: Don't forget that authentication by itself won't allow or disallow an
> incoming request, it simply identifies the credentials that the request was
> made with.

## How authentication is determined

The authentication schemes are always defined as a list of classes. REST
framework will attempt to authenticate with each class in the list, and will set
`request.user` and `request.auth` using the return value of the first class that
successfully authenticates.

If no class authenticates, `request.user` will be set to an instance of
django.contrib.auth.models.AnonymousUser, and `request.auth` will be set to
None.

The value of `request.user` and `request.auth` for unauthenticated requests can
be modified using the `UNAUTHENTICATED_USER` and `UNAUTHENTICATED_TOKEN`
settings.

## Setting the authentication scheme

The default authentication schemes may be set globally, using the
DEFAULT_AUTHENTICATION_CLASSES setting. For example.

```py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ]
}
```

You can also set the authentication scheme on a per-view or per-viewset basis,
using the APIView class-based views.

```py
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)
```

Or, if you're using the `@api_view` decorator with function based views.

```py
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def example_view(request, format=None):
    content = {
        'user': str(request.user),  # `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None
    }
    return Response(content)
```
