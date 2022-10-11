# Examples Using serializers.ModelSerializer

## Requirements

- djangorestframework
- PyJWT
- djangocorsheaders

## Code

> settings.py

```py
INSTALLED_APPS = [
    ...,
    "corsheaders",
    "rest_framework",
]

MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware"
]

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
```

> Views.py

```py
from rest_framework import APIView
from rest_framework.response import Response
from .serializers import UserSerializer


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = email.data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User Not Found")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow(),
        }

        token = jwt.encode(payload, "secret", algorithm="HS256").decode("utf-8")

        response = Response()

        response.set_cookie(key="jwt", value=token, httponly=True)
        response.data = {
            "jwt": token
        }
        return Response({"message": "success"})


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("Unauthenticated")

        try:
            payload = jwt.decode(token, "secret", algorithm=["HS256"], )
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticate")

        user = user.objects.filter(id=payload["id"]).first()

        serializer = UserSerializer(user)

        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {
            "message": "Success"
        }
        return response
```

> urls.py

```py
from django.urls import path
from .views import RegisterView, LoginView

urlpatterns = [
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view())
]
```
