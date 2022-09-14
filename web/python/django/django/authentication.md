# Authenticating a User

## Logging In

```py
from django.
from django.contrib.auth import authenticate, login


def loginUser(request):
    username = request.GET.get("username")
    password = request.GET.get("password")
    user = authenticate(
        request=request,
        username=username,
        password=password,
    )
    if user is not None:
        login(request, user)
    else:
        return redirect()
```

## Logging Out

```py
from django.
from django.contrib.auth import authenticate, login, logout


def logoutUser(request):
    logout(request)
    return redirect("home")
```

> The logout function doesn't throw any error if the user wasn't logged in
>
> When you call `logout()`, the session data for the current request is
> completely cleaned out. All existing data is removed. This is to prevent
> another person from using the same web browser to log in and have access to
> the previous user's session data. If you want to put anything into the session
> that will be available to the user immediately after logging out, do that
> after calling `django.contrib.auth.logout()`.

## Protected Routes

In django, it is quite easy to make routes which are only specific to logged in
users

### Basic Method

The raw way to limit access to pages is to check request.user.is_authenticated
and either redirect to a login page:

```py
from django.conf import settings
from django.shortcuts import redirect

def my_view(request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % (settings.LOGIN_URL, request.path))
```

```py
from django.shortcuts import render

def my_view(request):
    if not request.user.is_authenticated:
    return render(request, 'myapp/login_error.html')
```
