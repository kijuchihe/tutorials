# Custom users and permissions

To make it easy to include Django’s permission framework into your own user class, Django provides `PermissionsMixin`. This is an abstract model you can include in the class hierarchy for your user model, giving you all the methods and database fields necessary to support Django’s permission model.

## `PermissionsMixin` provides the following methods and attributes

### `is_superuser`

Boolean. Designates that this user has all permissions without explicitly assigning them.

### `get_user_permissions(obj=None)`

Returns a set of permission strings that the user has directly.
If obj is passed in, only returns the user permissions for this specific object.

### `get_group_permissions(obj=None)`

Returns a set of permission strings that the user has, through their groups. If obj is passed in, only returns the group permissions for this specific object.

### `get_all_permissions(obj=None)`

Returns a set of permission strings that the user has, both through group and user permissions. If obj is passed in, only returns the permissions for this specific object.

### `has_perm(perm, obj=None)`

Returns True if the user has the specified permission, where perm is in the format `"<app label>. <permission codename>"` (see permissions). If User.is_active and is_superuser are both True, this method always returns True.
If obj is passed in, this method won’t check for a permission for the model, but for this specific
object.

### `has_perms(perm_list, obj=None)`

Returns True if the user has each of the specified permissions, where each perm is in the format `"<app label>.<permission codename>"`. If User.is_active and is_superuser are both True, this method always returns True.

If obj is passed in, this method won’t check for permissions for the model, but for the specific object.

### `has_module_perms(package_name)`

Returns True if the user has any permissions in the given package (the Django app label). If User. is_active and is_superuser are both True, this method always returns True.

## PermissionsMixin and ModelBackend

If you don’t include the PermissionsMixin, you must ensure you don’t invoke the permissions methods
on `ModelBackend`. `ModelBackend` assumes that certain fields are available on your user model. If your user
model doesn’t provide those fields, you’ll receive database errors when you check permissions.

## Custom users and proxy models

One limitation of custom user models is that installing a custom user model will break any proxy model extending User. Proxy models must be based on a concrete base class; by defining a custom user model, you remove the ability of Django to reliably identify the base class.

If your project uses proxy models, you must either modify the proxy to extend the user model that’s in use in your project, or merge your proxy’s behavior into your User subclass.

### A full example

Here is an example of an admin-compliant custom user app. This user model uses an email address as the username, and has a required date of birth; it provides no permission checking beyond an admin flag on the user account. This model would be compatible with all the built-in auth forms and views, except for the user creation forms.

This example illustrates how most of the components work together, but is not intended to be copied directly into projects for production use. This code would all live in a models.py file for a custom authentication app:

```py
from django.db import models
from django.contrib.auth.models import (
BaseUserManager, AbstractBaseUser
)


class MyUserManager(BaseUserManager):
    def create_user(self, email, date_of_birth, password=None):
    """
    Creates and saves a User with the given email, date of
    birth and password.
    """
        if not email:
            raise ValueError('Users must have an email address')
    user = self.model(
        email=self.normalize_email(email),
            date_of_birth=date_of_birth,
        )
        user.set_password(password)
        user.save(using=self._db)
    return user
    
    def create_superuser(self, email, date_of_birth, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            date_of_birth=date_of_birth,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class MyUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    date_of_birth = models.DateField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = MyUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['date_of_birth']
    def __str__(self):
        return self.email
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
```

> Then, to register this custom user model with Django’s admin, the following code would be required in the app’s admin.py file:

```py
from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from customauth.models import MyUser

class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password.
    """
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = MyUser
        fields = ('email', 'date_of_birth')
    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2
    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
            return user

class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's 
    disabled password hash display field.
    """
    password = ReadOnlyPasswordHashField()
    class Meta:
        model = MyUser
        fields = ('email', 'password', 'date_of_birth', 'is_active', 'is_admin')
    class UserAdmin(BaseUserAdmin):
        # The forms to add and change user instances
        form = UserChangeForm
        add_form = UserCreationForm
        # The fields to be used in displaying the User model
        # These override the definitions on the base UserAdmin
        # that reference specific fields on auth.User
        list_display = ('email', 'date_of_birth', 'is_admin')
        list_filter = ('is_admin',)
        fieldsets = (
            (None, {'fields': ('email', 'password')}),
            ('Personal info', {'fields': ('date_of_birth',)}),
            ('Permissions', {'fields': ('is_admin',)}),
        )
        # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
        # overrides get_fieldsets to use this attribute when creating a user

        add_fieldsets = (
            (None, {
                'classes': ('wide',),
                'fields': ('email', 'date_of_birth', 'password1', 'password2'),
            }),
        )
        search_fields = ('email',)
        ordering = ('email',)
        filter_horizontal = ()

# Now register the new UserAdmin

admin.site.register(MyUser, UserAdmin)

# ... and, since we're not using Django's built-in permissions

# unregister the Group model from admin

admin.site.unregister(Group)
```

Finally, specify the custom model as the default user model for your project using the AUTH_USER_MODEL setting in your settings.py:

```py
AUTH_USER_MODEL = 'customauth.MyUser'
```

Django comes with a user authentication system. It handles user accounts, groups, permissions and cookiebased user sessions. This section of the documentation explains how the default implementation works out of the box, as well as how to extend and customize it to suit your project’s needs.
