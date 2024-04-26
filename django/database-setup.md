# Setting Up the database

In the `settings.py` of the main directory,

You should see a list containing database engines and the default is
django.db.backends.sqlite3

```py
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

> Change the data in the "default" to match whatever database that you want to
> use

- ENGINE: Either

  - `'django.db.backends.sqlite3'`
  - `'django.db.backends.postgresql',`
  - `'django.db.backends.mysql'`
  - `'django.db.backends.oracle'`
  - Other backends are also available.

- NAME: The name of your database. If you􀁮re using SQLite, the database will be
  a file on your computer; in that case, **NAME** should be the full absolute
  path, including filename, of that file. The default value, BASE_DIR /
  'db.sqlite3', will store the file in your project directory.

  If you are not using SQLite as your database, additional settings such as USER
  PASSWORD, and HOST must be added. For more details, see the reference
  documentation for DATABASES.
