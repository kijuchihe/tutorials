# Introduction

```sh
django-admin startproject projectname .
```
## Django apps

An app in django can be seen as a separate section

```
python manage.py startapp appname
```
### Views

> views.py

```py
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse('<>Hey, Welcome</>')
```


### URL Routing

> urls.py

```py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index")
]
```

## URL Routing to main project

In the project main folder, (the folder with settings.py) go to `urls.py`

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("home/", include("appname.urls"))
]
```
