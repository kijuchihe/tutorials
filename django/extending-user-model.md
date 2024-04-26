# Extending `AbstractUser` Model

You'll have seen that there's an `AbstractUser` model and an `AbstractBaseUser`
model. Well, it turns out that the `AbstractUser` model is the already built in
`User` model and is extended when you want to extend the `User` model.

If you’re entirely happy with Django’s User model, but you want to add some
additional profile information, you could subclass
`django.contrib.auth.models.AbstractUser` and add your custom profile fields,
although we’d recommend a separate model as described in the “Model design
considerations” note of Specifying a custom user model. AbstractUser provides
the full implementation of the default User as an abstract model.

Custom users and the built-in auth forms Django’s built-in forms and views make
certain assumptions about the user model that they are working with.

The following forms are compatible with any subclass of AbstractBaseUser:

- AuthenticationForm: Uses the username field specified by USERNAME_FIELD.
- SetPasswordForm
- PasswordChangeForm
- AdminPasswordChangeForm

The following forms make assumptions about the user model and can be used as-is
if those assumptions are met:

- PasswordResetForm: Assumes that the user model has a field that stores the
  user’s email address with the name returned by get_email_field_name() (email
  by default) that can be used to identify the user and a boolean field named
  is_active to prevent password resets for inactive users. Finally, the
  following forms are tied to User and need to be rewritten or extended to work
  with a custom user model:
- UserCreationForm
- UserChangeForm

> If your custom user model is a subclass of AbstractUser, then you can extend
> these forms in this manner:

```py
from django.contrib.auth.forms import UserCreationForm
from myapp.models import CustomUser
class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = UserCreationForm.Meta.fields + ('custom_field',)
```

## Custom users and django.contrib.admin

If you want your custom user model to also work with the admin, your user model
must define some additional attributes and methods. These methods allow the
admin to control access of the user to admin content:

### `is_staff`

Returns True if the user is allowed to have access to the admin site.

### `is_active`

Returns True if the user account is currently active.

### `has_perm(perm, obj=None):`

Returns True if the user has the named permission. If obj is provided, the
permission needs to be checked against a specific object instance.

### `has_module_perms(app_label):`

Returns True if the user has permission to access models in the given app. You
will also need to register your custom user model with the admin. If your custom
user model extends `django.contrib.auth.models.AbstractUser`, you can use
Django’s existing `django.contrib.auth.admin.UserAdmin` class.

However, if your user model extends `AbstractBaseUser`, you’ll need to define a
custom ModelAdmin class. It may be possible to subclass the default
`django.contrib.auth.admin.UserAdmin`; however, you’ll need to override any of
the definitions that refer to fields on `django.contrib.auth.models`.

AbstractUser that aren’t on your custom user class.

> Note: If you are using a custom ModelAdmin which is a subclass of
> django.contrib.auth.admin.UserAdmin, then you need to add your custom fields
> to fieldsets (for fields to be used in editing users) and to

### `add_fieldsets` (for fields to be used when creating a user)

For example:

```py
from django.contrib.auth.admin import UserAdmin
class CustomUserAdmin(UserAdmin):
    ...
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('custom_field',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('custom_field',)}),
    )
```
