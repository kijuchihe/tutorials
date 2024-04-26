# More On Custom Users

## Under Standing the fields in Creting a Custom User

### `USERNAME_FIELD`

is a string describing the name of the field on the user model that is used as the unique identifier. This will usually be a username of some kind, but it can also be an email address, or any other unique identifier. The field must be unique (e.g. have unique=True set in its definition), unless you use a custom authentication backend that can support non-unique usernames. |

### `EMAIL_FIELD`

A string describing the name of the email field on the User model. This value is returned by `get_email_field_name()`.

### `REQUIRED_FIELDS`

A list of the field names that will be prompted for when creating a user via the createsuperuser management command. The user will be prompted to supply a value for each of these fields. It must include any field for which blank is False or undefined and may include additional fields you want prompted for when a user is created interactively. REQUIRED_FIELDS has no effect in other parts of Django, like creating a user in the admin. For example, here is the partial definition for a user model that defines two required fields - a date of birth and height:

```py
class MyUser(AbstractBaseUser):
    ...
    date_of_birth = models.DateField()
    height = models.FloatField()
    ...
    REQUIRED_FIELDS = ['date_of_birth', 'height']
```

> Note: REQUIRED_FIELDS must contain all required fields on your user model, but should not contain the USERNAME_FIELD or password as these fields will always be prompted for.

### `get_username()`

Returns the value of the field nominated by USERNAME_FIELD.

### `clean()`

Normalizes the username by calling normalize_username(). If you override this method, be sure to call super() to retain the normalization.

### `classmethod get_email_field_name()`

Returns the name of the email field specified by the EMAIL_FIELD attribute. Defaults to 'email' if EMAIL_FIELD isn’t specified.

### `classmethod normalize_username(username)`

Applies NFKC Unicode normalization to usernames so that visually identical characters with different Unicode code points are considered identical.

### `is_active`

A boolean attribute that indicates whether the user is considered“active”. This attribute is provided as an attribute on AbstractBaseUser defaulting to True. How you choose to implement it will depend on the details of your chosen auth backends. See the documentation of the is_active attribute on the built-in user model for details.

### `get_full_name()`

Optional. A longer formal identifier for the user such as their full name. If implemented, this appears alongside the username in an object’s history in django.contrib.admin.

### `get_short_name()`

Optional. A short, informal identifier for the user such as their first name. If implemented, this replaces the username in the greeting to the user in the header of django.contrib.admin.

### `is_authenticated`

Read-only attribute which is always True (as opposed to AnonymousUser.is_authenticated which is always False). This is a way to tell if the user has been authenticated. This does not imply any permissions and doesn’t check if the user is active or has a valid session. Even though normally you will check this attribute on request.user to find out whether it has been populated by the AuthenticationMiddleware (representing the currently logged-in user), you should know this attribute is True for any User instance.

### `is_anonymous`

Read-only attribute which is always False. This is a way of differentiating User and AnonymousUser objects. Generally, you should prefer using is_authenticated to this attribute.

### `set_password(raw_password)`

Sets the user’s password to the given raw string, taking care of the password hashing. Doesn’t save the AbstractBaseUser object. When the `raw_password` is None, the password will be set to an unusable password, as if
`set_unusable_password()` were used.

### `check_password(raw_password)`

Returns True if the given raw string is the correct password for the user. (This takes care of the password hashing in making the comparison.)

### `set_unusable_password()`

Marks the user as having no password set. This isn’t the same as having a blank string for a password. `check_password()` for this user will never return True. Doesn’t save the AbstractBaseUser object. You may need this if authentication for your application takes place against an existing external source such as an LDAP directory.

### `has_usable_password()`

Returns False if set_unusable_password() has been called for this user. get_session_auth_hash() Returns an HMAC of the password field. Used for Session invalidation on password change. AbstractUser subclasses AbstractBaseUser:

## Custom User Manager

You should also define a custom manager for your user model.

> If your user model defines username, email, is_staff, is_active, is_superuser, last_login, and date_joined fields the same as Django’s default user, you can install Django’s UserManager; however, if your user model defines different fields, you’ll need to define a custom manager that extends BaseUserManager providing two additional methods:

### `create_user(username_field, password=None, **other_fields)`

The prototype of create_user() should accept the username field, plus all required fields as arguments. For example, if your user model uses email as the username field, and has date_of_birth as a required field, then create_user should be defined as:

```py
def create_user(self, email, date_of_birth, password=None):
    # create user here
```

### `create_superuser(username_field, password=None,**other_fields)`

The prototype of create_superuser() should accept the username field, plus all required fields as arguments. For example, if your user model uses email as the username field, and has date_of_birth as a required field, then create_superuser should be defined as:

```py
def create_superuser(self, email, date_of_birth, password=None):
    # create_superuser_here
    # create superuser here
    ...
```

For a ForeignKey in USERNAME_FIELD or REQUIRED_FIELDS, these methods receive the value of the to_field (the primary_key by default) of an existing instance.

## BaseUserManager provides the following utility methods

### `classmethod normalize_email(email)`

Normalizes email addresses by lowercasing the domain portion of the email address.

### `get_by_natural_key(username)`

Retrieves a user instance using the contents of the field nominated by USERNAME_FIELD.

### `make_random_password(length=10, allowed_chars='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789')`

Returns a random password with the given length and given string of allowed characters. Note that the default value of allowed_chars doesn’t contain letters that can cause user confusion, including:

- i, l, I, and 1 (lowercase letter i, lowercase letter L, uppercase letter i, and the number one)
- o, O, and 0 (lowercase letter o, uppercase letter o, and zero)
