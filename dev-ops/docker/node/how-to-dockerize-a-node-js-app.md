# How to dockerize an existing node js project

```js
const express = require("express")
const app = express()

app.get("/", (req, res)=>{res.send("Hello world")})

app.listen(3000, () =>{
    consolel.log("API running")
})
```

## To dockerize,
Create a file called `Dockerfile`

```Dockerfile
FROM node:9-slim
# Here, we are selecting the node image and the variant of 9-slim
WORKDIR /app
COPY package.json /app
# Here we copy the package.json to the working directory
RUN npm install
COPY . /app
CMD ["npm", "start"]
```

## Building our dockerfile

In your terminal, you write

```sh
# docker build -t name-of-docker-image path-of-dockerfile
docker build -t node-docker-image .
```
`-t ` refers tag of your image (or the name)
- The convention is your_username_on_dockerhub/name-of-image:version
- Something like `username/node-image:0.0.1.RELEASE`
Running docker container on your local machine

```sh
# docker run flags -mode-flag -p system-port:port-on-docker-container docker-image
docker container run -it -p 5000:3000 node-docker-image
```

- The `-it` flag will run docker in interactive mode
- The `-p` flag stands for `--publish` and specifies the port
- The `5000` port is the port it will be running on in our local machine
- The `3000` port is the internal port where it will be running inside the container

If we want to run this docker container in the background - that is in detached mode - ,we can run the following command

```sh
docker container run -d -p 5000:3000 node-docker-image
```
```sh
docker container run --detach -p 5000:3000 node-docker-image
```

## To see the running containers

```
docker ps
```

## To make this track changes

- Add nodemon
- Rebuild your docker container
- `docker build -t node-docker-image .`
- `docker run -it -p 9001:3000 -v $(pwd):/app node-docker-image`
- The `-v flage` is the volume flag
