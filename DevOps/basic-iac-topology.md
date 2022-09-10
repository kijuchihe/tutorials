### The IaC topology

In a cloud infrastructure, IaC is divided into several typologies:

- The deployment and provisioning of the infrastructure
- The server configuration and templating
- The containerization
- The configuration and deployment in Kubernetes

Let's deep dive into each topology.

#### The deployment and provisioning of the infrastructure

Provisioning is the act of instantiating the resources that make up the
infrastructure. They can be of the Platform as a Service (PaaS) and serverless
resource types, such as a web app, Azure function, or Event Hub but also the
entire network part that is managed, such as VNet, subnets, routing tables, or
Azure Firewall. For virtual machine resources, the provisioning step only
creates or updates the VM cloud resource but not its content.

There are different provisioning tools such as Terraform, the ARM template, AWS
Cloud training, the Azure CLI, Azure PowerShell, and also Google Cloud
Deployment Manager. Of course, there are many more, but it is difficult to
mention them all. In this book, we will look at, in detail, the use of Terraform
to provide an infrastructure.

#### Server configuration

This step concerns the configuration of virtual machines, such as the
configuration of hardening, directories, disk mounting, network configuration
(firewall, proxy, and so on), and middleware installation.

There are different configuration tools, such as Ansible, PowerShell DSC, Chef,
Puppet, and SaltStack. Of course, there are many more, but, in this book, we
will look at, in detail, the use of Ansible to configure a virtual machine.

To optimize server provisioning and configuration times, it is also possible to
create and use server models, also called images, that contain all of the
configuration (hardening, middleware, and so on) of the servers. It will be
during the provisioning of the server that we will indicate the template to use,
and hence, we will have, in a few minutes, a configured server ready to be used.

There are also many IaC tools for creating server templates, such as aminator
(used by Netflix) or HashiCorp Packer.

Here is an example of Packer file code that creates an Ubuntu image with package
updates:

```
{
"builders": [{
"type": "azure-arm",
"os_type": "Linux",
"image_publisher": "Canonical",
"image_offer": "UbuntuServer",
"image_sku": "16.04-LTS",
"managed_image_resource_group_name": "demoBook",
"managed_image_name": "SampleUbuntuImage",
"location": "West Europe",
"vm_size": "Standard_DS2_v2"
}],
"provisioners": [{
"execute_command": "chmod +x {{ .Path }}; {{ .Vars }} sudo -E sh '{{
.Path }}'",
"inline": [
"apt-get update",
"apt-get upgrade -y",
"/usr/sbin/waagent -force -deprovision+user && export HISTSIZE=0 &&
sync"
],
"inline_shebang": "/bin/sh -x",
"type": "shell"
}]
}
```

This script creates a template image for the Standard_DS2_V2 virtual machine
based on the Ubuntu OS (the builders section). Additionally, Packer will update
all packages during the creation of the image with the apt-get update command
and, after this execution, Packer deprovisions the image to delete all user
information (the provisioners section).

### Immutable infrastructure with containers

Containerization consists of deploying applications in containers instead of
deploying them in VMs.

Today, it is very clear that the container technology to be used is Docker and
that the configuration of a Docker image is also done in code in a Dockerfile.
This file contains the declaration of the base image, which represents the bone
to be used, the installation of additional middleware to be installed on the
image, only the files and binaries necessary for the application, and the
network configuration of the ports. Unlike VMs, containers are said to be
immutable; the configuration of a container cannot be modified during its
execution.

Here is a simple example of a Dockerfile:

```
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx
ENTRYPOINT ["/usr/sbin/nginx","-g","daemon off;"]
EXPOSE 80
```

In this Docker image, we use a basic Ubuntu image, install nginx, and expose
port 80

### Configuration and deployment in Kubernetes

Kubernetes is a container orchestrator—it is the technology that most embodies
IaC, in my opinion, because the way it deploys containers, the network
architecture (load balancer, ports, and so on), and the volume management, as
well as the protection of sensitive information, are described completely in the
YAML specification files.

Here is a simple example of a YAML specification file:

```
apiVersion: apps/v1
kind: Deployment
metadata:
name: nginx-demo
labels:
app: nginx
spec:
replicas: 2
selector:
matchLabels:
app: nginx
template:
metadata:
labels:
app: nginx
spec:
containers:
- name: nginx
image: nginx:1.7.9
ports:
- containerPort: 80
```

We can see in the preceding specification file, the name of the image to deploy
(ngnix), the port to open (80), and the number of replicas (2).

### IaC best practices

IaC, like software development, requires the implementation of practices and
processes that allow the evolution and maintenance of the infrastructure code.

Among these practices are those of software development, as in these examples:

- Have good principles of nomenclature.
- Do not overload the code with unnecessary comments.
- Use small functions.
- Implement error handling.

##### More Specific Rules

- Everything must be automated in the code: When doing IaC, it is indeed
  necessary to code and automate all of the provisioning steps and not to leave
  manual steps out of code that distort the automation of the infrastructure and
  that can generate errors. And if necessary, do not hesitate to use several
  tools such as Terraform and Bash with the Azure CLI scripts.

- The code must be in a source control manager: The infrastructure code must
  also be in an SCM to be versioned, tracked, merged, and restored, and hence
  have better visibility of the code between Dev and Ops.

- The infrastructure code must be with the application code: In some cases, this
  may be difficult, but if possible, it is much better to place the
  infrastructure code in the same repository as the application code. This is to
  have a better work organization between developers and operations, who will
  share the same workspace.

- Separation of roles and directories: It is good to separate the code from the
  infrastructure according to the role of the code, so you can create one
  directory for provisioning and for configuring VMs and another directory that
  will contain the code for testing the integration of the complete
  infrastructure.

- Integration into a CI/CD process: One of the goals of IaC is to be able to
  automate the deployment of the infrastructure, so from the beginning of its
  implementation, it is necessary to set up a CI/CD process that will integrate
  the code, test it, and deploy it in different environments. Some tools, such
  as Terratest, allow you to write tests on infrastructure code. One of the best
  practices is to integrate the CI/CD process of the infrastructure into the
  same pipeline as the application.

- The code must be idempotent: The execution of the infrastructure deployment
  code must be idempotent; that is, automatically executable at will. This means
  that scripts must take into account the state of the infrastructure when
  running it and not generate an error if the resource to be created already
  exists or if a resource to be deleted has already been deleted. We will see
  that declarative languages, such as Terraform, take on this aspect of
  idempotence natively. The code of the infrastructure, once fully automated,
  must allow the construction and complete destruction of the application
  infrastructure.
