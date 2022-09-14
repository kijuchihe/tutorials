# Custom Authentication

There are four parts to a custom authentication class.

1. Extend it from BaseAuthentication class provided in
   `from rest_framework. authentication import BaseAuthentication`
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
