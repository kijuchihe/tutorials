# Microservices

This is a popular architectural paradigm that addresses the limitations and drawbacks of legac applications.

## History of application designs

- Monolithic
- Multitier
- Microservices

### Monolithic

UI + Business Logic + Data all in one service

There were limits to these when building much more complex solutions. Since everything is tangled together, it becomes difficult to maintain, evolve and scale such applications.

Software engineers proposed a solution to this complexity problem.

### Multitier

Application separated into layers based on technical functions

The common method is the three tier

Presentation Layer - Frontend
Logic Layer - Backend Business processes and Logic
Data Layer - Storing, accessing, Database

This method was more efficient but was still centralised and didn't address quite well the issues

The best way to tackle complexity is by decomposing it into managable chunks.

That is why software engineers decided to break part the logic and data layers into microservices.

Every microservice deals with one business function, end to end independently of the other microservices

Microservices provide simple, easy to understand APIs and communicate with each other through lightweight common protocols like HTTP or message queues.

When an application is architected as a microservice, different teams can work seprately and independently on different microservices building new functions and evolving the business capabilities without impacting other teams and . Teams could even use different programming languages and could deploy them to different infrastructures.

For cost reduction, efficiency improvement, and operational optimisation reasons most organisations restrict tools, infrastructure providers and programming languages.

To improve they implement:

- Continerisation: Docker
- Containers Orchestration: Kubernetes
- Pipeline Automation: GitLab
- Asynchronous Messaging: Kafka
- Performance Monitoring: Prometheus
- Logging and Audit tools: DataDog

Microservices are not a magic bullet that fixes all application design and dev problems.
