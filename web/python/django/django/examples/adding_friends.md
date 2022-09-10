# Having friends in Django

1. We need to have a custom user to add the friends property

```py
  from django.db import models
  from django.contrib.auth.models import AbstractUser

  class User(AbstractUser):
friends = models.ManyToManyField("User", blank=True)
```

2. Create a friend_request Model

```py
class FriendRequest(models.Model):
    from_user = models.ForeignKey(User, related_name="from_user", on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name="to_user", on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.now())
```

3. Create a friend request view

```py
@login_required
def send_friend_request(request, id):
    from_user = request.user
    to_user = User.objects.get(id=id)
    friend_request_sent, just_sent = FriendRequest.objects.get_or_create(from_user=from_user, to_user=to_user)
    if just_sent:
        return HttpResponse("Request Has been sent")
    else:
        return HttpResponse("Request Already Sent")
```

4. Accept friend request

```py
@login_required
def accept_friend_request(request, id):
    friend_request = FriendRequest.objectss.get(id=id)
    if friend_request.to_user = request.user:
        friend_request.to_user.friends.add(friend_request.from_user)
        friend_request.from_user.friends.add(friend_request.to_user)
        friend_request.delete()
        return HttpResponse("friend request accepted")
    else:
        return HttpResponse("friend request not accepted")
```

5. Add to your urls.py the paths
6. Add your templates
