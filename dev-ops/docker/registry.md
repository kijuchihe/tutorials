# What is a Docker Registry?

You've already learned about two very important pieces of the puzzle,
[Containers](./container.md) and [Images](./image.md). The final piece is the
Registry.

An image registry is a centralized place where you can upload your images and
can also download images created by others. Docker Hub is the default public
registry for Docker. Another very popular image registry is Quay by Red Hat.

Throughout this book I'll be using Docker Hub as my registry of choice.

You can share any number of public images on Docker Hub for free. People around
the world will be able to download them and use them freely. Images that I've
uploaded are available on my profile (fhsinchy) page.

Apart from Docker Hub or Quay, you can also create your own image registry for
hosting private images. There is also a local registry that runs within your
computer that caches images pulled from remote registries.
