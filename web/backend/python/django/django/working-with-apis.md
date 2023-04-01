```py
from django.shortcutss import reder
import json
import urllib.request # This already comes with python

def index(request):
    if request.method == "POST":
        city = request.POST["city"]
        res = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/weather').read()
        json_data = json.loads(res)
```
