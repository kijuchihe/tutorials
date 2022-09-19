# Django cors headers

django-cors-headers is a Python library that will prevent the errors that you
would normally get due to CORS rules.

```
pipenv install djangorestframework django-cors-headers
```

> Add it to your installed apps, add it to middleware and also add the allowed
> origins

> Add these to your settings.py

```py
INSTALLED_APPS = [
    ...,
    "corsheaders",
    "rest_framework",
]
MIDDLEWARE = [
    ...,
    'corsheaders.middleware.CorsMiddleware',
]
CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000'
]
```

In the `CORS_ORIGIN_WHITELIST` code, you whitelisted `localhost:3000` because
you want the frontend (which will be served on that port) of the application to
interact with the API.
