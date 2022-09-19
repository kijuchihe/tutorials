# Django Phone Number Field

There are situations where you will want a phone number field in your user model

## Installation

```py
# To install phonenumbers minimal metadata
pip install "django-phonenumber-field[phonenumberslite]"
```

```py
# To install phonenumbers minimal metadata
pip install "django-phonenumber-field[phonenumbers]"
```

## Setup

Add `phonenumber_field` to the `INSTALLED_APPS` in `settings.py`

```py
INSTALLED_APPS = [
    ...,
    "phonenumber_field"
]
```

## Storing In the Database

To do this, we use the `PhoneNumberField` model_field which allows us to store a
PhoneNumber as a `CharField`
