# Large Scale Distributed Systems

These are widely used a lot and highly computive intensive e.g. Google Maps

- It has a lot of data
- It is used by a lot of people
- It is updated frequently
- High performance
  - Accuracy
  - Not going down
  - Responds quickly

Distributed Systems means that the server that runs the program is not in one place but is distributed around the world.

To do these systems, engineers need to know design patterns

A software design pattern is a general, reusable solution to a commonly occuring problem within a given context in software design.

E.g. you have a common problem of a celebrity posting on social media and that post being distributed to a lot of their followers. Maybe the person posts on youtube and linkedin. The problems are similar.

You will want to notify them quickly without putting too much load on your service so that the rest of the requests continue being served. This is a common problem. So you extract a common problem and then use a common solution. That makes a design pattern.

Reliable, Scalable and Maintainable systems. Helps them turn business requirements into technical solutions.

1. Define requirements from the users perspective (often done by product managers which write product requirement documnts based on user data and feedback).
2. Most important features first (Being able to actually stream on )
3. Reduce features or abstract concepts to data definitions (Maybe users should be able to like a video or a comment.)
4. These data definitions can then be writte as objects
5. These objects can then be mapped to the database
6. Define endpoints through which this data can be manipulated or queried e.g. an API.
7. This is done for code features and optional features

## Engineering requirements

### Not collapse

- None of your services fail in case of an outage
- If your server is in Nigeria, and your comment service is in india, we don't want the task to collapse, so we spread the servers accross the world. You can also have multiple servers in india so if one server fails, another one picks up the task.
- You can also have a partitioning to share the number of users per server.

### Extensibility

- How easy it is to change a technical solution you come up with

> For example, if you write code to send a message to millions of users, and you need to make a small tweak to the code so that you don't want it to be sent to 1M users but you also want to add a receipt.

The problem with writing code that is highly coupled with a feature is that when there is a changing requirement, you have to redesign, test and redeploy. So you want to make your code extensible.

Based on your knowledge

Build a system that can scale & Extend as and when requirements change.

### Test

Your designs have to be very well tested with edge cases and use cases.
YOu can have special tools for load testing, capacity estimation.
Test the design before getting into code.

### Example

Let's say you want to build a streaming app, the requirements might be

1. Streaming Video
2. Processing Video
3. Broadcasting
4. Failproof
5. Advertisement
6. Reactions
7. Disclaimers/News Flashes
8. Degradation of video quality for low end devices.
9. Multiple device requirements

The core requirement, is streaming a video so we take that feature first. We have to capture video from a source, store it in our server and query it later. In a live streaming service, the "later" can be milliseconds. You may not want to query the data at all, you may want to directly push it from the video camera to millions of people.

If you are streaming from the camera at 8k, it will be unreasonable to send that quality to a phone, so we will need to store it in some database and then query/stream it out and disperse to all the customers. We don't want the users to know how we do all this data manipulation.

APIs have well defined signatures an we can tell if we want a particular video id. We call the get Video and it will return objects of type frames.

APis are similar to method signatures the difference being APIs are queried through a network protocol like GRPC, HTTP, FTP.

### Thinking of issues

- If your database crashes
- If a firewall on the internet blocks your requests
- If one of your services or code starts misbehaving through a code or malicious ware.

It could also be a requirement request. Maybe you want the musician to be able to talk to some audience based on activity. You have to display the active users and also broadcast all the parties to millions of users

### How do we do a live streaming service?

First approach
Customer -> Server -> Database

Second approach
Database to server (what kind of data to store)
Server to client (What api should exposed to be accessed)
For databased approach, what kind of data do you need to store.

### Using the customer approach

Customers define their problems, these are then fulfilled with APIs from the server, which are then fulfilled by storing some data in the database and the data is mapped unto tables

System Design is usually with the backend part of things

#### Customers

They are live streaming customers from multiple possible devices

- Laptops
- Phones

Different APIs require different behaviours.

#### Server

Clients should query a server. This should have its apis like getVideoFrame(id, device, offset) API. There should be a return type like the Frame object that will be returned.

If you're using a REST protocol, you'll see that the GET method is already defined. So you can rename the API method to videoFrame() or something.

You will also need a POST api to add comments to the video. comment(id, data, author, video_id)

#### Database side

- What kind of data do we wamt to store?
- Comments can be easily stored in an sql database
- How do we structure the queries?

Now we have the question of which database solution to use? Storing data on mySql for example will be expensive and potentially very slow. Since a video is a file, storing the video in a file system like HDFS or S3, or video hosting solution like vimeo. You can also use it to host on vimeo.

The benefit of HDFS is that it is

- Cheap
- Easy to query
- Store very large files

In a database, it is not cheap but it is easy to query and you can store very large files. When it comes storing static files like video files, you are looking at low cost.

For the comment and users tables, these two tables can have a mySqQL or Postgresql.

Seeing that a comment can be complex, anytime a requirement changes, the base changes, maybe you want to persist a lot of data in a table per entry, in that case, you are looking for a noSQL database.

### Network Protocols

If you look at making a comment, you will have to know which type of protocols to be used. Posting a comment is not something that needs to be running so much. For making a comment, we will be using the HTTP protocol.

If you use the HTTP method for the video streaming, since it is stateless, the client will always have to pass all the data you want to receive, like which point the client is currently on (like on the 10th minute) and how many seconds more of the frame do you need?

However, in a streaming service, the client shouldn't know where the next ten seconds, it is server that knows where the client is currently is and then decide which ten seconds it will send as a response. The benefit of this is will be that the client code will be much easier.

For video transmission, HTTP can be used. A much better protocol will be something designed for video transmission because you have to consider like type of devices, poor bandwidth etc. If it is a livestreaming video, the current frame is the most important and the ones/packets that were dropped should be let go. If it is a live streaming lecture where there needs to be full context to understand, then you need a reliable protocol.

TCP Protocol: Reliable Protocol
UDP Protocol: Real time efficient protocol

WebRTC is going to be used for the live video streaming as it is a peer to peer protocol.

HTTP has a client to server expectation meaning that the server can't send data without a request from the client.

It can be seen that network protocols are also important in designing systems.

Most Databases define how exactly the client interacts with the database. Usually a TCP backed protocol.

Now for a livestreaming system, you may need a high level service like getting the video from a high resolution camera to a database can be done over the RTMP: Real Time Media Protocol. Over a high bandwidth expensive network. The camera is going to need that kind of network to persist that amount of data.

For live streaming from your server, webRTC (UDP based) is okay.
For broadcasting, MPEG-DASH is the protocol to be used. DASH stands for Dynamic adaptive streamind over HTTP. Another type of protocol is HLS.
For getting data into the database from the camera RTMP is used.

### Serving data

How do we convert this raw data so that it can be served to customers?

There needs to be a kind of conversion/transformation service that takes the livestream that can convert it to different resolutions

1080p Full HD
720 HD
480p
144p

The video is broken into segments (of 10s) and the segment is passed to the functions for processing and converting it to different resolutions.

The video also has to be converted to different video formats like h.264.

So we can use a design pattern of map-reduce. The basic idea is that you take one video, split into pieces, 10s long and send to different servers to get different outputs.

You can have to compress it. So any server that is free will take up the process and compress it.

**What Kind Of Data do you store on the server**: You can make it stateless when it comes to request server. For some things , you can keep some state. So you may cache the last 10mins of a video so you don't have to make a fetch to the base.
