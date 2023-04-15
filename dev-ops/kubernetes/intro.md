# Introduction to Kubernetes

Let's say we have a web application written in spring boot and react and we want to deploy it into a `node`. A node is like a virtual machine. Let's say we hava a VM with 8GB RAM and 4 cores. Typically, what you will do is that you will deploy a container into the node.

Let's say that what we deploy is version 1 of our program and then we begin to have more users, we'll need to scale meaning that we will have to deploy yet another container to another node

If we have a new version of our app, we will have to create a new node and then destroy version 1. You'll see that we have 12 cores and 24GB ram just for 3 containers

Kubernetes, will take a single node and utilize the resources in the correct manner. Kubernetes will fill the node with as many `pods` as possible. You can think of `pods` as containers. Now instead of having one container per node, we have multiple pods per node.

We will let kubernetes ochestrate the cluster for us.

Kubernetes is also known as K8S where the represents the 8 letters between K and S.

Kubernetes is an `Application Ochestrator` (or coordinator)

When we talk about applications, we are usually talking about containers

## Functions of Kubernetes

- Deploy and manage applications
- Scales up and down according demand
- Zero Downtime Deployments
- Rollbacks
- Etc.

## Cluster

A cluster is a set of nodes

- A node could either be a VM or a Physical Machine which can be running on a cloud service such as Azure, AWS, Google Cloud etc.

We have to know the difference between the master node and the worker node.

The master node is simply the brain of the cluster

The worker node is where all the heavy lifting happens such as running your applications

The master node and the worker node communicate by means of

### Master Node

In the master node, we have several components that make up the control plane

## Running Kubernetes

To run Kubernetes locally,we can use `minikube`

All you need is to have docker and minikbuke and `kubectl` installed

To interact with minikube from our laptop, we will need `kubectl` (kube-control)

## Kubectl

- This is a Kubernetes Command Line Tool
- It runs commands gains for your cluster
- Deploy
- Inspect
- Edit
- Debug
- View Logs
- ETC

## Creating a cluster with two nodes

```
minikube start --nodes=2
```

```sh
minikube status
# Result
minikube
type: Control Plane # Meaning Master node
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
timeToStop: Nonexistent

minikube-m02
type: Worker
host: Running
kubelet: Running
```

```sh
kubectl get nodes
```
With the above command, we can get nodes that are available on the system

```sh
kubectl get pods -A
```
The above will list all the pods available

## Pods

A pod is the smallest deployable unit in Kubernetes and not containers.

Within a pod, you will always have one main container which represents your application written in whatever language you wrote it in

Within a pod, you may also have `init containers`. These are executed before the main container

We may also have, `side car containers`. These are containers that support your main containers. Think of proxys for example

We may also `Volumes`. This is how containers share data between them.

The way these containers communicate is using localhost and whatever port they expose. Each port has a unique IP Address. If another pod wants to talk to this pod, it uses the unique IP Address

From the above, we can see that the
- The smallest deployable unit of docker are containers
- The
