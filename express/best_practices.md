# Things to implement and Best Practices

First of all, check out this repo for node best practices

[https://github.com/goldbergyoni/nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)

## Custom Error Handlers

> in middlewares.ts

```ts
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  const responseBody = {
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "" : err.stack,
  };
  consol.error("Error", responseBody);
  res.json(responseBody);
};
```

> in api/v1/routers

```ts
import express from "express";
router = express.Router();

router.get<{}, MessageResponse>("/bad", (req, res) => {
  throw new Error("");
});

// Good way of setting the error
router.get<{}, MessageResponse>("/bad", (req, res) => {
  res.statusCode = 400;
  throw new Error("This is being handled by the custom error handler");
});
```

> in app.ts

```ts
import errorHandler from "middlewares";

// Use every other middleware before adding the errorHandler middleware
app.use(errorHandler);
```

## Validation with JOI

> Without JOI

```ts
router.post("", (req, res) => {
  const body = req.body;

  if (!body.username) throw new Error("username is required");
  if (!body.email) throw new Error("Email is required");
  // If you have multiple fields, you will do this over and over again...

  console.log("Creating a new user for", body.username);
});
```

> With JOI

```ts
const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    if (!request.value) {
      req.value = {};
    }
    req.value["body"] = result.value;
    next();
  };
};

const joiSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
});

router.post("/good", validateRequest(schema), (req, res) => {
  const body = req.body;
  console.log("Creating account for...", body.username, body.email);
});
```

## Environment Variables (using dotenv)

Environment variables are stored in a `.env` file. They are used for storing configuration data and secret values like API key.
They only live in the session they work on and are safe. They are never stored in the code

## Use api versioning

```ts
app.use("/api/v1", api);
```

## Security (with third party libraries)

- Don't use deprecated or vulnerable versions of express
- Use TLS
- Use Helmet
- Use Cookies securely
- Prevent brute force attack against authorisation
- Ensure your dependencies are secure
- Avoid other known vulnerabilities

### Using helmet.js

Add default headers that make your app way more secure

```ts
import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.get("/", (req, res) => {});

app.listen(3000);
```

### Using cors (Cross-origin resource sharing)

```ts
import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.get("/", (req, res) => {});

app.listen(3000);
```

## Writing tests
