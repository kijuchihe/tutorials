# Tips

Here are some tips to note

- When passing data into the serializer class using the data property, it has to
  be request.data or something similar
- When passing data into the serializer class without the data attribute, it can
  be a queryset - in order to avoid errors -
- When using the views.APIView, you have to define all the methods for that
  route yourself
- When creating a register serializer, you might likely override the validate
  and save methods
