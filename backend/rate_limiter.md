# Rate Limiter

The job of a rate limiter is to decide whether a request will be served or declined. If the request is accepted, then it will be passed to the api servers. In most cases the rate limiter acts as a protector/defensive mechanism. It prevents your services from over use or from malicious users

It relies on some rules to decide where to limit the traffic. For example, it can limit the number of requests made by a user in a period of time. If this limit is exceeded, the limit or IP is to be throttled.
This means that any further requests will be dropped (or failed) or added to a queue to be executed later.

Without this, any user can burst your server with requests. Leading to high latencies or unavailable services. Most big companies use some kind of rate limiter.

## Reasons to use Rate Limiting

- Manage Operational Costs
- Security
- Preventing resource starvation
- Control Data Flow

## How to make a rate limiter

- Requirements and Goals of the System
  - Scope of the problem
  - Functional Requirements
  - Non-functional components
- High Level Design
  - Discuss the components
  - How components fit together
- Detailed Design
  - Data Modelling
  - Exception Handling
  - Parallel Computing
  - Distributed Environment
- Algorithms
  - Leaking Bucket
  - Token Bucket
  - Fixed Window
  - Sliding window counter
  - Sliding window log

### Functional Requirements

1. Limit no of calls that an entity can make to the server between a given time frame. Maybe only five requests per second
2. How we communicate to the client that the requests are being throttled and how we display the status of the system

### Non-functional Requirements

- What kind of rate limiter are we building? Client side, middleware or server side.
- Should we decide a local rate limiter or one that is distributed on multiple nodes?
- Is high-availability required for the system?
- Performance. When adding a rate limiter, there should still be little or no latency
- Cost Efficiency. Nice on resource and memory

## Types of rate limiters based on where placed

1. Client side rate limiting: This is easier to implement and can be easily changed and therefore unreliable
2. Server side: This
3. For a microservice architecture, the rate limiter sits between the client and the services (maybe in reverse proxies and api gateways)

When using a rate limiter, it is advised to use in-memomry and

## Leaking bucket algorithm

This is the default rate limiter for the nginx server. This is quite a simple algorithm. The analogy is that water enters from the top and water also leaks from the bottom. If the rate of pouring water is more than the rate of water leaking then the water will overflow. It allows request to pass at a constant rate. The bucket is a queue where requests wait o be processed. When a request arrives, the system checks if the queue is not full before putting it. At regular intervals, requests are being pulled from the queue and being processed. If the bucket is full and a request comes, the request will be dropped.

This algorithm takes two parameters

- Bucket size
- Process rate parameter: How many requests can be treated at a fixed rate.

### Pros

1. Memory efficient
2. Stable processing rate

### Cons

- Weak support for burst traffic
- Parameters difficult to get right

## Token bucket algorithm

Amazon elastic cloud and amazon api gateway use this to throttle the api requests.

We have a token bucket (a container with a predefined size). We add tokens to the bucket at periodic moments of time until the bucket is full. If extra tokens are added, it will overflow. When requests come, they will take one token each as long as there are tokens in the bucket. If there are no tokens in the bucket, the requests will be dropped.

It takes two parameters

- Bucket size
- Refill rate

It is advised to use different buckets for different API endpoints

### Pros of Token Bucket

- Memory efficient
- Allow bursts of traffic for short periods
- Parameters difficult to get right

## Fixed Window Algorithm

It divides the timeline into fixed sized windows and we assign the same capacity to each window.

### Pros of fixed window

- Memory Efficient
- Easy to implement

### Cons of fixed window

- Not accurate

## Sliding Window Algorithm

It divides the timeline into fixed sized windows and we assign the same capacity to each window.

### Pros of sliding window

- Good enough accurary
- No starvation problem
- Memory Efficient
- Easy to implement

### Cons of sliding window

- Not exact accuracy

## Sliding Window Log Algorithm

It divides the timeline into fixed sized windows and we assign the same capacity to each window.

### Pros of fixed window log

- Memory Efficient
- Easy to implement

### Cons of fixed window log

- Not accurate

## Errors

Error code 429 - If too many requests

If the request is added to a queue to be processed later, then we can return a status of 202

## Headers

- x-ratelimit-limit
- x-ratelimit-remaining
- x-ratelimit-reset
- x-ratelimit-resource
- x-ratelimit-used
- x-xss-protection
