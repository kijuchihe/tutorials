# Hello World in Docker – Intro to Docker Basics

Now that you have Docker up and running on your machine, it's time for you to run your first container. Open up the terminal and run the following command:

```sh
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:4cf9c47f86df71d48364001ede3a4fcd85ae80ce02ebad74156906caff5378bc
Status: Downloaded newer image for hello-world:latest

Hello from Docker

# This message shows that your installation appears to be working correctly
```

To generate this message, Docker took the following steps

- The Docker client contacted the Docker daemon
- The Docker daemon pulled the "hello-world" image from the Docker Hub (amd64)
- The Docker daemon created a new container from that image which runs the executable that produces the output you are currently reading
- The Docker daemon streamed that output to the Docker client, which sent it to your terminal

> To try something more ambitious, you can run an Ubuntu container with

```sh
$docker run -it ubuntu bash
```

>Share images, automate workflows, and more with a free Docker ID
>
> <https://hub.docker.com/>
> For more examples and ideas, visit
> <https://docs.docker.com/get-started/>

The hello-world image is an example of minimal containerization with Docker. It has a single program compiled from a hello.c file responsible for printing out the message you're seeing on your terminal.

Now in your terminal, you can use the `docker ps -a` command to have a look at all the containers that are currently running or have run in the past:

```sh
docker ps -a

# CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES

# 128ec8ceab71        hello-world         "/hello"            14 seconds ago      Exited (0) 13 seconds ago                      exciting_chebyshev
```

In the output, a container named `exciting_chebyshev` was run with the container id of `128ec8ceab71` using the `hello-world` image. It has Exited (0) 13 seconds ago where the (0) exit code means no error was produced during the runtime of the container.

Now in order to understand what just happened behind the scenes, you'll have to get familiar with the Docker Architecture and three very fundamental concepts of containerization in general, which are as follows:

- [Container](./container.md)
- [Image](./image)
- [Registry](./registry)

I've listed the three concepts in alphabetical order and will begin my explanations with the first one on the list.
