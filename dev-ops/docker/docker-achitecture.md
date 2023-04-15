# Docker Architecture Overview

Now that you've become familiar with most of the fundamental concepts regarding
containerization and Docker, it's time for you to understand how Docker as a
software was designed.

The engine consists of three major components:

- Docker Daemon: The daemon (dockerd) is a process that keeps running in the
  background and waits for commands from the client. The daemon is capable of
  managing various Docker objects.
- Docker Client: The client (docker) is a command-line interface program mostly
  responsible for transporting commands issued by users.
- REST API: The REST API acts as a bridge between the daemon and the client. Any
  command issued using the client passes through the API to finally reach the
  daemon. According to the official docs, "Docker uses a client-server
  architecture. The Docker client talks to the Docker daemon, which does the
  heavy lifting of building, running, and distributing your Docker containers".
  You as a user will usually execute commands using the client component. The
  client then use the REST API to reach out to the long running daemon and get
  your work done.

## The Full Picture

Okay, enough talking. Now it's time for you to understand how all these pieces
of the puzzle you just learned about work in harmony. Before I dive into the
explanation of what really happens when you run the `docker run hello-world`
command, let me show you a little diagram I've made:

This image is a slightly modified version of the one found in the official docs.
The events that occur when you execute the command are as follows:

- You execute `docker run hello-world` command where `hello-world` is the name
  of an image.
- Docker client reaches out to the daemon, tells it to get the hello-world image
  and run a container from that.
- Docker daemon looks for the image within your local repository and realizes
  that it's not there, resulting in the Unable to find image
  'hello-world:latest' locally that's printed on your terminal.
- The daemon then reaches out to the default public registry which is Docker Hub
  and pulls in the latest copy of the hello-world image, indicated by the
  latest: `Pulling from library/hello-world line in your terminal`.
- Docker daemon then creates a new container from the freshly pulled image.
- Finally Docker daemon runs the container created using the `hello-world` image
  outputting the wall of text on your terminal. It's the default behavior of
  Docker daemon to look for images in the hub that are not present locally. But
  once an image has been fetched, it'll stay in the local cache. So if you
  execute the command again, you won't see the following lines in the output:

```sh
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest:
sha256:d58e752213a51785838f9eed2b7a498ffa1cb3aa7f946dda11af39286c3db9a9
Status:Downloaded newer image for hello-world:latest
```

If there is a newer version of the image available on the public registry, the
daemon will fetch the image again. That :latest is a tag. Images usually have
meaningful tags to indicate versions or builds. You'll learn about this in
greater detail later on.
