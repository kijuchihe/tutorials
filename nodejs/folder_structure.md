# FOLDER STRUCTURE

- 3 Layer approach

Wrong Client -> Routes -> Controller -> DB

Don't use this approach

- Type 2

Client -> Routes -> Controller -> Service -> Model -> DB

- app
  - controllers
  - loaders
  - models
    - orderSchema.statics = {
      - deleteOrder
      - async createOrder
        - const duplicate = await this.findOne()
          }
  - orders
  - payments
  - routers
  - schemas
  - services
    - if you need to contact some kind of third party api
    - check if user has permisions to create an order
  - shared
  - subscribers
    - listen to events in pub/sub pattern
  - users
- app.js
- config.js
- server.js
