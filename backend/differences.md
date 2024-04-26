# Different Implementations

## **First Architecture**

1. Client Makes a request
2. Request Gets to a load balancer
3. Load balancer then balances between api gateways
4. API gateways then rerout the request to one of our instances

## **Second Architecture**

1. client makes request
2. request gets to api gateway
3. reroutes to load balancers
4. then the instances

### Reverse Proxy/Ingres Proxy

This is basically something like Nginx that sits right infont of your instances and it can do stuff like:

1. Rate Limiting
2. Authentication
3. IP Filtering
4. Caching
5. SSL handling
6. Load Balancing

### API Gateway

API gateway has all the functionalities of a reverse proxy and extra features like

1. Service Discovery: The instances can register themselves within the api gateway and tell them if the user wants the order service or the request needs to go to order service, use my api so you can reach me under this api a
2. Service Circuit Breaker

Reverse proxies are almost the same as api gate ways but an api gateway is more sophisticated and if a reverse proxy is just sitting infront of the instance (in the case of Nginx), this is more suitable for service static content while an API gateway deals more with things involving API endpoints

### Ingress Controller

This is a reverse proxy in the Kubernetes world. It reroutes the request to a service that can also do load balancing and service discovery at the same time.

### To learn

1. Service Discovery
2. Circuit Breaker
3. Reverse Proxy
4. lunar.dev
