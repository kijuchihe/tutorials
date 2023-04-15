Introduction to flask

```py
from flask import Flask
from flask_restful import Api, Resource

app  = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        # Notice that what you are returning is something serializable
        return {"message": "Hello world"}

api.add_resource(HelloWorld, "/")

if __name__ == "__main__":
    app.run(debug=True)
```

From the above, you can see that


## Passing Parameters

```py
from flask import Flask
from flask_restful import Api, Resource

app  = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    # def request_type(self, ...parameters):
    #     functionality
    #     return serializable_data
    def get(self, name):
        # Notice that what you are returning is something serializable
        return {"message": "Hello world"}

# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```

## Sending data

The data send to the server can be gotten from the request object by accessing the form property. `request.form` The request object is gotten from the flask module

```py
from flask import Flask, request
from flask_restful import Api, Resource

app  = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):

    def get(self, name):
        # Notice that what you are returning is something serializable
        return {"message": "Hello world"}
    def post(self):
        request_body = reques.form
        return {}

# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```


```py
from flask import Flask
from flask_restful import Api, Resource, reqparse

app  = Flask(__name__)
api = Api(app)

# This reqparse helps us to define our models
video_post_args = reqparse.RequestParser()
# The way to use is
# video_post_args.add_argument("property_name", type=data_type, help="Message to be displayed if the requirements are not satisfied")
video_post_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_post_args.add_argument("views", type=int, help="Views on the video")
video_post_args.add_argument("likes", type=int, help="Likes on the video")

class HelloWorld(Resource):

    def get(self, name):
        # Notice that what you are returning is something serializable
        return {"message": "Hello world"}
    def post(self):
        args = video_post_args.parse_args()
        # This args argument will contain the data sent and will return None for the fields not passed

        # However you'll see that it will return an error
        videos[video_id] = args
        # Notice how we returned a status code
        return videos[video_id], 201



# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```

# How to abort and send custom errors


```py
from flask import Flask
from flask_restful import Api, Resource, reqparse

app  = Flask(__name__)
api = Api(app)

video_post_args = reqparse.RequestParser()
video_post_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_post_args.add_argument("views", type=int, help="Views on the video")
video_post_args.add_argument("likes", type=int, help="Likes on the video")

def abort_if_no_video_id(video_id):
    if video_id not in videos:
        # abort(status_code, message="Error message")
        abort(404, message="Video id was not found")

class HelloWorld(Resource):

    def get(self, video_id):
        abort_if_no_video_id(video_id)
        return {"message": "Hello world"}
    def post(self):
        args = video_post_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201



# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```

# Deleting

```py
from flask import Flask
from flask_restful import Api, Resource, reqparse

app  = Flask(__name__)
api = Api(app)

video_post_args = reqparse.RequestParser()
video_post_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_post_args.add_argument("views", type=int, help="Views on the video")
video_post_args.add_argument("likes", type=int, help="Likes on the video")

def abort_if_no_video_id(video_id):
    if video_id not in videos:
        # abort(status_code, message="Error message")
        abort(404, message="Video id was not found")

class HelloWorld(Resource):

    def get(self, video_id):
        abort_if_no_video_id(video_id)
        return {"message": "Hello world"}
    def post(self):
        args = video_post_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201
    def delete(self, video_id):
        abort_if_no_video_id(video_id)
        del videos[video_id]
        return "",204



# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```

# Connecting to the database

```py
from flask import Flask
from flask_restful import Api, Resource, reqparse, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app  = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
db=SQLAlchemy(app) # Noticed how the database was initialized

class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False) # The nullable property tells flask that the field must have a value
    views = db.Column(db.Integer, nullable=False)
    likes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"Video(name={name}, views={views}, likes={likes})"

db.create_all() #This should be run once. So after the sc


# This defines how a model should be serialized
resource_fields = {
    "id": fields.Integer,
    "name": fields.String,
    "views": fields.Integer,
    "likes": fields.Integer,
}

video_post_args = reqparse.RequestParser()
video_post_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_post_args.add_argument("views", type=int, help="Views on the video")
video_post_args.add_argument("likes", type=int, help="Likes on the video")

class Video(Resource):

    @marshal_with(resource_fields)
    def get(self, video_id):
        result = VideoModel.query.get(id=video_id)
        return resu
    def post(self):
        args = video_post_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201
    def delete(self, video_id):
        abort_if_no_video_id(video_id)
        del videos[video_id]
        return "",204



# api.add_resource(HelloWorld, "/<data_type:parameter_name>")
api.add_resource(HelloWorld, "/<string:value>")

if __name__ == "__main__":
    app.run(debug=True)
```
