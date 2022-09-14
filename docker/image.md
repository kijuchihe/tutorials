# What is a Docker Image?

Images are multi-layered self-contained files that act as the template for
creating containers. They are like a frozen, read-only copy of a container.
Images can be exchanged through registries.

In the past, different container engines had different image formats. But later
on, the Open Container Initiative (OCI) defined a standard specification for
container images which is complied by the major containerization engines out
there. This means that an image built with Docker can be used with another
runtime like Podman without any additional hassle.

> Containers are just images in running state. When you obtain an image from the
> internet and run a container using that image, you essentially create another
> temporary writable layer on top of the previous read-only ones.

This concept will become a lot clearer later on. But for now, just keep in mind
that images are multi-layered read-only files carrying your application in a
desired state inside them.
