# Custom Authentication

There are four parts to a custom authentication class.

1. Extend it from BaseAuthentication class provided in
   `from rest_framework.authentication import BaseAuthentication`
2. Have a method called `authenticate` taking `request` as first argument.
3. Return a tuple of `(user, None)` for a successful authentication.
4. Raise `AuthenticationFailed` exception for a failed authentication. This is
   available in rest_framework.authentication.

```py
class ExampleAuthentication(BaseAuthentication):
    def authenticate(self, request):
        username = request.META.get('X_USERNAME')
        if not username:
            return None
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise AuthenticationFailed('No such user')
        return (user, None)
```

```py
class SecretAuthentication(BaseAuthentication):
    def authenticate(self, request):
        app_key = request.META.get('APP_KEY')
        app_secret = request.META.get('APP_SECRET')
        username = request.META.get('X_USERNAME')
        try:
            app = ClientApp.objects.match_secret(app_key, app_secret)
        except ClientApp.DoesNotExist:
            raise AuthenticationFailed('App secret and key does not match')
        try:
            user = app.users.get(username=username)
        except User.DoesNotExist:
            raise AuthenticationFailed('Username not found, for the specified app')
        return (user, None)
```

The authentication scheme will return HTTP 403 Forbidden responses when an
unauthenticated request is denied access.

## API-KEY base request authentication

You can use django rest framework permission classes to check request headers
and authenticate user requests

### Steps

- Define your secret_key on project settings `API_KEY_SECRET = 'secret_value'`

> **Note:** a good practice is to use environment variables to store this secret
> value.

- Define a permission class for API-KEY authentication: create `permissions.py`
  file on your app dir with below codes:

  ```py
  from django.conf import settings
  from rest_framework.permissions import BasePermission
  class Check_API_KEY_Auth(BasePermission):
    def has_permission(self, request, view):
        # API_KEY should be in request headers to authenticate requests
        api_key_secret = request.META.get('API_KEY')
        return api_key_secret == settings.API_KEY_SECRET
  ```

Add this permission class to views

```py
from rest_framework.response import Response
from rest_framework.views import APIView
from .permissions import Check_API_KEY_Auth
class ExampleView(APIView):
    permission_classes = (Check_API_KEY_Auth,)
    def get(self, request, format=None):
        content = { 'status': 'request was permitted' }
        return Response(content)
```

> Or, if you're using the `@api_view decorator` with function based views

```py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .permissions import Check_API_KEY_Auth

@api_view(['GET'])
@permission_classes((Check_API_KEY_Auth, ))
def example_view(request, format=None):
    content = { 'status': 'request was permitted' }
    return Response(content)
```
