# An example of serializers

```py
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """Data for user"""

    # id = serializers.HyperlinkedIdentityField(view_name=)
    class Meta:
        model = User
        fields = ("id", "email", "first_name", "last_name", "date_of_birth")


class RegisterSerializer(serializers.ModelSerializer):
    """Serializer to register user"""

    password = serializers.CharField(max_length=150, write_only=True, required=True)
    password2 = serializers.CharField(max_length=150, write_only=True, required=True)
    email = serializers.EmailField(
        required=True, validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        """
        Registration Serializer Meta
        """

        model = User
        fields = [
            "email",
            "first_name",
            "middle_name",
            "last_name",
            "password",
            "password2",
        ]

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError("Passwords Didn't match")
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            middle_name=validated_data["middle_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user
```
