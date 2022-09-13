# Introduction

To really know what docker is used for, you will have to understand containerization

## Introduction to Containerization and Docker

According to [IBM](https://ibm.com/cloud/learn/containerization)

> Containerization is the packaging of software code with just the operating system libraries and dependencies required to run the code to create a single lightweight executable ---`called a container`-- that runs consistently on any infrastructure.
>
> Containerization allows developers to create and deploy applications faster and more securely. With tr

In other words, containerization lets you bundle up your software along with all its dependencies in a self-contained package so that it can be run without going through a troublesome startup process

If we try to picture this: Assuming you have a todo application that can store tasks and also gives out tasks. If you look at the things it depends on: let's say maybe

- React.js
- Node.js
- Express.js
- mongoDB

If you look at these dependencies, you'll say: "Well that's all right? 🤷🏽‍♂️🤷🏽‍♂️🤷🏽‍♂️"
Turns out Node.js uses a build tools known as node-gyp for building native add-ons and according to the installation instruction in the official repository this build too l requires python and a proper C/C++ compiler tool-chain

Taking all these into account, the final of dependencies is as follows:

- Node.js
- Express.js
- mongoDB
- python
- C/C++ tool-chain

Installing python 2 or 3 is pretty straightforward regardless of the platform you're on.
Setting up the c/c++ is pretty easy on lin
