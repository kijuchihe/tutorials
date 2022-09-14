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
Setting up the c/c++ is pretty easy on linux, but on Windows and Mac it's a painful task.

On Windows, the C++ build tools package measures at gigabytes and takes quite some time to install. On a Mac, you can either install the gigantic Xcode application or the much smaller Command Line Tools for Xcode package.

Regardless of the one you install, it still may break on OS updates. In fact, the problem is so prevalent that there are Installation notes for macOS Catalina available on the official repository.

Let's assume that you've gone through all the hassle of setting up the dependencies and have started working on the project. Does that mean you're out of danger now? Of course not.

What if you have a teammate who uses Windows while you're using Linux. Now you have to consider the inconsistencies of how these two different operating systems handle paths. Or the fact that popular technologies like nginx are not well optimized to run on Windows. Some technologies like Redis don't even come pre-built for Windows.

Even if you get through the entire development phase, what if the person responsible for managing the servers follows the wrong deployment procedure?

All these issues can be solved if only you could somehow:

Develop and run the application inside an isolated environment (known as a container) that matches your final deployment environment.
Put your application inside a single file (known as an image) along with all its dependencies and necessary deployment configurations.
And share that image through a central server (known as a registry) that is accessible by anyone with proper authorization.
Your teammates will then be able to download the image from the registry, run the application as it is within an isolated environment free from the platform specific inconsistencies, or even deploy directly on a server, since the image comes with all the proper production configurations.

That is the idea behind containerization: putting your applications inside a self-contained package, making it portable and reproducible across various environments.

## Now the question is "What role does Docker play here?"

As I've already explained, containerization is an idea that solves a myriad of problems in software development by putting things into boxes.

This very idea has quite a few implementations. Docker is such an implementation. It's an open-source containerization platform that allows you to containerize your applications, share them using public or private registries, and also to orchestrate them.
