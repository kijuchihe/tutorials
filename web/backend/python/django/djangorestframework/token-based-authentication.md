# TokenAuthentication

Note: The token authentication provided by Django REST framework is a fairly
simple implementation.

For an implementation which allows more than one token per user, has some
tighter security implementation details, and supports token expiry, please see
the Django REST Knox third party package.

This authentication scheme uses a simple token-based HTTP Authentication scheme.
Token authentication is appropriate for client-server setups, such as native
desktop and mobile clients.

To use the `TokenAuthentication` scheme you'll need to configure the
authentication classes to include `TokenAuthentication`, and additionally
include `rest_framework.authtoken` in your `INSTALLED_APPS` setting:

```py
INSTALLED_APPS = [
    ...
    'rest_framework.authtoken'
]
```

Make sure to run manage.py migrate after changing your settings.

The `rest_framework.authtoken` app provides Django database migrations.

You'll also need to create tokens for your users.

## Creating User Tokens

```py
from rest_framework.authtoken.models import Token

token = Token.objects.create(user=...)
print(token.key)
```

For clients to authenticate, the token key should be included in the
`Authorization` HTTP header. The key should be prefixed by the string literal
"`Token`", with whitespace separating the two strings. For example:

`Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`

If you want to use a different keyword in the header, such as `Bearer`, simply
subclass TokenAuthentication and set the keyword class variable.

If successfully authenticated, `TokenAuthentication` provides the following
credentials.

- `request.user` will be a Django User instance.
- `request.auth` will be a `rest_framework.authtoken.models.Token` instance.

Unauthenticated responses that are denied permission will result in an
`HTTP 401 Unauthorized` response with an appropriate WWW-Authenticate header.
For example:

`WWW-Authenticate: Token`

The curl command line tool may be useful for testing token authenticated APIs.
For example:

```py
curl -X GET http://127.0.0.1:8000/api/example/ -H 'Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'
```

> Note: If you use `TokenAuthentication` in production you must ensure that your
> API is only available over https.

## Generating Tokens

### By using signals

If you want every user to have an automatically generated Token, you can simply
catch the User's post_save signal.

```py
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
```

Note that you'll want to ensure you place this code snippet in an installed
models.py module, or some other location that will be imported by Django on
startup.

If you've already created some users, you can generate tokens for all existing
users like this:

```py
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

for user in User.objects.all():
    Token.objects.get_or_create(user=user)
By exposing an api endpoint
When using TokenAuthentication, you may want to provide a mechanism for clients to obtain a token given the username and password. REST framework provides a built-in view to provide this behaviour. To use it, add the obtain_auth_token view to your URLconf:

from rest_framework.authtoken import views
urlpatterns += [
    path('api-token-auth/', views.obtain_auth_token)
]
Note that the URL part of the pattern can be whatever you want to use.

The obtain_auth_token view will return a JSON response when valid username and password fields are POSTed to the view using form data or JSON:

{ 'token' : '9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b' }
Note that the default obtain_auth_token view explicitly uses JSON requests and responses, rather than using default renderer and parser classes in your settings.

By default, there are no permissions or throttling applied to the obtain_auth_token view. If you do wish to apply to throttle you'll need to override the view class, and include them using the throttle_classes attribute.

If you need a customized version of the obtain_auth_token view, you can do so by subclassing the ObtainAuthToken view class, and using that in your url conf instead.

For example, you may return additional user information beyond the token value:

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })
And in your urls.py:

urlpatterns += [
    path('api-token-auth/', CustomAuthToken.as_view())
]
With Django admin
It is also possible to create Tokens manually through the admin interface. In case you are using a large user base, we recommend that you monkey patch the TokenAdmin class customize it to your needs, more specifically by declaring the user field as raw_field.

your_app/admin.py:

from rest_framework.authtoken.admin import TokenAdmin

TokenAdmin.raw_id_fields = ['user']
Using Django manage.py command
Since version 3.6.4 it's possible to generate a user token using the following command:

./manage.py drf_create_token <username>
this command will return the API token for the given user, creating it if it doesn't exist:

Generated token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b for user user1
In case you want to regenerate the token (for example if it has been compromised or leaked) you can pass an additional parameter:

./manage.py drf_create_token -r <username>
```
