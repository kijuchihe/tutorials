# Introduction To Docker

Docker is a platform for building, running and shipping applications in a consistent manner so that your code can run and function the same on other machines

## Virtual Machines vs Containers

An isolate environment for running an application.

A virtual machine is an abstraction of a machine (physical hardaware). It is a complete system on its own. It is done using what we call a Hypervisor.

### Disadvantages of VMS

Each VM needs a full-blown OS
Slow to start
Using up system resources

## Architecture of docker

Docker using client-server architecture

Server is the docker engine which takes care of building and running containers

Container is just like a process running on your computer. All containers share the kernel of the host.
A kernel is the core of an operating system. It manages applications and hardware


## Workflow

Take an application and dockerize it.
Make a small change so that docker can run it. This is done by adding a dockerfile

A dockerfile is a text file that has instructions of how docker should package that app into an image

An image contains a cutdown OS
A runtime environment (eg Node)
Application files
Third party libraries
Environment variables

After that, we tell docker to start a container using that image. Our image gets loaded inside our container. Once we have this image, we can push it to a registry like docker-hub. We can then use it on any machine running docker. Dockerhub to docker is like github to git
