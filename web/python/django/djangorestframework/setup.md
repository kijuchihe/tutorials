# Setting Up

For this, we will just be serving the users as data

To start, we need to add the `rest_framework` from djangorestframework to the
installed apps

```py
INSTALLED_APPS = [
    ...,
    "rest_framework",
]

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly"
    ]
}
```

### Routes

There are steps that need to be taken when setting up the routes

- Serializer: This refers to the details or types of details that will be sent
  about a particular model. For example if we are going to be serving the users,
  and we just want to send the usernames as responses when a get request is made
  to the url

  ```py
  from rest_framework import serializers


  # Serializers define the API representation.
  class UserSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
          model = User
          fields = ("username")
  ```

- Viewset: This refers to how you want the response to look. Here you pass in
  the actual data(queryset) and then the details of what you want (serializer)

  ```py
  from rest_framework import routers, serializers, viewsets


  # ViewSets define the view behavior.
  class UserViewSet(viewsets.ModelViewSet):
      queryset = User.objects.all()
      serializer_class = UserSerializer
  ```

- Routing: This, as the name implies, refers to the routing system of the api
  ```py
  # Routers provide an easy way of automatically determining the URL conf.
  router = routers.DefaultRouter()
  router.register(r"users", UserViewSet)
  ```

After all that, we specify the base route for the router in the urlpatterns

```py
urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
]
```

If you want to add an admin functionality i.e. login to edit data and all,

```py
urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path(
        "api-auth/",
        include("rest_framework.urls", namespace="rest_framework"),
    ),
]
```

```py
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("url", "username", "email", "is_staff")


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path(
        "api-auth/",
        include("rest_framework.urls", namespace="rest_framework"),
    ),
]

```
