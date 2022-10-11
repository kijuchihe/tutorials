# ANother Example

```sh
pip install djangorestframework_simplejwt
```

> settings.py

```py
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ]
}
```

> serializers.py

```py
class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=150, write_only=True)
    class Meta:
        model = User
        fields = ["username", "password", "password2"]

    def validate(self, request):
        email= request.get("email", None)
        username = request.get("username", None)
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email Already Exists")

    def create(self, validated_data):
        return User.objects.create_user(**validate_data)
```

```py
class BookSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source="created_by.username", read_only=True)
    class Meta:
        model = Book
        fields = []
```

> views.py

```py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
class RegisterView(generics.GenericAPIView):

    serializer_class= RegistrationSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()

        if serializer.is_valid():
            serializer.save()
            return Response({"user": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"errors": serializers.errors}, status=status.HTTP_400_BAD_REQUEST)
```

When using jwt, you can easily add a login view to return a token response

```py
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path("login", TokenObtainPairView.as_view(), name="login")
    path("refresh-token", TokenRefreshView.as_view(), name="refresh-token")
]
```
