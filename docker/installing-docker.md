# Docker Installation

Now, Docker is not the only containerization tool on the market, it's just the most popular one. Another containerization engine that I love is called Podman developed by Red Hat. Other tools like Kaniko by Google, rkt by CoreOS are amazing, but they're not ready to be a drop-in replacement for Docker just yet.

Also, if you want a history lesson, you may read the amazing A Brief History of Containers: From the 1970s Till Now which covers most of the major turning points for the technology.

## How to Install Docker

Installation of Docker varies greatly depending on the operating system you’re using. But it's universally simple across the board.

Docker runs flawlessly on all three major platforms, Mac, Windows, and Linux. Among the three, the installation process on Mac is the easiest, so we'll start there.

### How to Install Docker on macOS

On a mac, all you have to do is navigate to the official download page and click the Download for Mac (stable) button.

You’ll get a regular looking Apple Disk Image file and inside the file, there will be the application. All you have to do is drag the file and drop it in your Applications directory.

You can start Docker by simply double-clicking the application icon. Once the application starts, you'll see the Docker icon appear on your menu-bar.

Now, open up the terminal and execute docker --version and docker-compose --version to ensure the success of the installation.

### How to Install Docker on Windows

On Windows, the procedure is almost the same, except there are a few extra steps that you’ll need to go through. The installation steps are as follows:

- Navigate to [this site](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and follow the instructions for installing WSL2 on Windows 10.
- Then navigate to the official [download page](https://www.docker.com/products/docker-desktop) and click the Download for Windows (stable) button.
- Double-click the downloaded installer and go through the installation with the defaults.
- Once the installation is done, start Docker Desktop either from the start menu or your desktop. The docker icon should show up on your taskbar.

Now, open up Ubuntu or whatever distribution you've installed from Microsoft Store. Execute the docker --version and docker-compose --version commands to make sure that the installation was successful.

You can access Docker from your regular Command Prompt or PowerShell as well. It's just that I prefer using WSL2 over any other command line on Windows.

### How to Install Docker on Linux

Installing Docker on Linux is a bit of a different process, and depending on the distribution you’re on, it may vary even more. But to be honest, the installation is just as easy (if not easier) as the other two platforms.

The Docker Desktop package on Windows or Mac is a collection of tools like Docker Engine, Docker Compose, Docker Dashboard, Kubernetes and a few other goodies.

On Linux however, you don’t get such a bundle. Instead you install all the necessary tools you need manually. Installation procedures for different distributions are as follows:

#### Ubuntu

---
If you’re on Ubuntu, you may follow the [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/) section from the official docs.

For other distributions, installation per distro guides are available on the official docs.

- [Install Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)
- [Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)
- [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)

> If you’re on a distribution that is not listed in the docs, you may follow the [Install Docker Engine from binaries](https://docs.docker.com/engine/install/binaries/) guide instead.
>
> Regardless of the procedure you follow, you’ll have to go through some [Post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) for Linux which are very important.
>
> Once you’re done with the docker installation, you’ll have to install another tool named Docker Compose. You may follow the [Install Docker Compose](https://docs.docker.com/compose/install/) guide from the official docs.

Once the installation is done, open up the terminal and execute `docker --version` and `docker-compose --version` to ensure the success of the installation.

Another thing that I would like to clarify right from the get go, is that I many not use any GUI tool for working with Docker throughout because I think gaining the command tools will be very useful.
