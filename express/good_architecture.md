# Having a good architecture for your code

- 3 Layer Structure
- Folder Structure
- Mono-repo
- Pub/Sub
- Testing
  - Unit tests for controllers and services
  - Contract tests Pactjs
  - Integration tests (not too many) just spin up
- Logging: using morgan
- Application Monitoring: using sentry, appsignal or datadocs
- Good Coding Practices
  - Keep coding clean: ESLint (linting), SonarQube (Code analysis)
  - Follow style guide: Like google style guide or airbnb style guide.

The normal way we know is: Client -> Requests -> Controllers -> DB
This is used in hackathons, not-scallable and not recommended

The better way
Client -> Routes -> Controller -> Service -> Model (contains all the queries with the dabae)

Controller -> Service -> Model are the three layers.

- `__tests__`
- `app`
  - controllers
    - index.js
    - orders
      - orders.js
      - order.js
  - loaders
  - models
    - index.js
    - Order.js (methods for Order model like dele)
  - routers
    - index.js
    - orders.js
  - orders
  - payments
  - schemas
  - services
  - shared
  - subscribers

> models/Order.js

```js
const orderSchema = new Schema({
  name: String,
  number: Number,
  stuff: [String],
  url: string,
});

orderSchema.statics = {
  /**
   * Create a Single New Order
   * @param {object} newOrder
   * @returns {Promise<Order, APIError>}
   */
  async createOrder(newOrder) {
    const duplicate = await this.findOne({ name: newOrder.name });
    if (duplicate) throw new APIError(409, "Order Already Exists");
    order = await newOrder.save();
    return order.toObject();
  },
};
```

> conroleers/orders/order.js

```js
async function createOrder(req, res, next) {
  const validation = validate(req.body, orderNewSchema);
  if (!validation.valid) {
    return next(new APIError());
  }
  try {
    const newOrder = await Order.createOrder(new Order(request.body));
    return response.status(201).json(newOrder);
    // The example in this controller is simple so there was no service created
    // However, what if we want to:
    // contact a 3rd party server for the orders;
    // Check if the user has permissions to create an order;
    // very the inventory;
    // All this logic will then have to be moved into the service
  } catch (err) {
    return next(err);
  }
}
```

> routers/oders.js

```js
// app imports
import {orderHandler, ordersHandler} from "../handlers"

// globals
const router = new express.Router();
const {readOrders} = ordersHandler;
cpmst {createOrder, readOrder, updateOrder, deleteOrder} = orderHandler;

// All orders routes
router.route("").get(readOrders).post(createOrder);

router.route("/:id").get(readOrder).patch(updateOrder).delete(deleteOrder);
```
