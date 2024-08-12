# Low Level Design

This goes into much more depth than the high level design. This involves the code functionality of the whole process

Like viewing a video, feching more of the viewing and

One way to think is with the code

Like if you do OOP, you think of the kinds of objects, what type of inheritance, what methods are on the classes. This is difficult to think of

You can then think of the user. We start by building thinking of what the user can do.

Like playing from a timestamp, starting a video, what happens when the user presses pause? how much is buffered from the backend on pause? What resolution is fetched depending on the device? Up to what point have you played the video?

- Memory Optimisation
- User behaviour
- API calling
- Cache optimsation

## Use Case Diagram

An actor is someone that can perform an action (use cases): PRD (Product Requirement Document)

- Customer
  - Play a video from a timestamp
  - View all maximum quality allowed by network
  - Go back to a video and watch from left off timestamp
  - Have non-stop play when watching videos
- Admin

Convert these useCases to classes and objects.

- Take note of what tools can be used(HTTP-DASH). This can handle the `view all maximum allowed by network and device` which you will use so that if there is network issues, it automatically can assign which quality for the user.
- Dynamic Adaptive Streaming over HTTP (DASH), also known as MPEG-DASH, is an adaptive bitrate streaming technique that enables high quality streaming of media content over the internet delivered from conventional HTTP web servers.

How does HTTP-DASH work internally?

Clearer the APIs, the easier it will be to come up with your low level design.
