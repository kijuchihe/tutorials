# Starting a new project

Create Your directory

```sh
touch rest_framework
cd rest_framework
```

Create your virtual environment

```sh
rest_framework$: python -m venv venv
```

Start the environment and check if everything works

```sh
rest_framework$: ./venv/bin/activate
(venv) rest_framework$: pip install django
(venv) rest_framework$: pip install djangorestframework
(venv) rest_framework$: django-admin startproject RestFramework .
(venv) rest_framework$: ./venv/bin/python manage.py migrate
(venv) rest_framework$: ./venv/bin/python manage.py runserver
```
