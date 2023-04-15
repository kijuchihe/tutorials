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
