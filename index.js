const express = require("express");
const app = express();
const customerRoutes = require("./routes/cutomerRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

// MiddleWare
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/trades", tradeRoutes);

app.listen(PORT, () =>
  console.log(`Listening on port: http://localhost:${PORT}`)
);

/////////////////////////////////////////////////////////
/*
const { customers, trades } = require("./data/data");
const { v4 } = require("uuid");

console.log({ customers, trades }); // place in object so we get labels

// Route Handlers

// List all customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

// List one customer  - using route params
app.get("/customers/:id", (req, res) => {
  console.log(req.params.id);
  const user = customers.find((user) => user.id === req.params.id); // use + operator or Number() to convert param for strict operator comparison
  console.log(user);
  res.json(user);
});

// Create one customer
app.post("/customers", (req, res) => {
  const { body } = req;
  console.log(body);
  
  let newUser = {
    id: v4(),
    ...body,
  };
  customers.push(newUser);
  res.json(newUser);
});

// Update one customer - needs route param(id)
app.put("/customers/:id", (req, res) => {
  const { body } = req;
  console.log(body);

  const user = customers.find((user) => user.id === req.params.id);
  const userIndex = customers.findIndex((el) => el.id === req.params.id);

  let updatedUser = {
    ...user,
    ...body,
  };

  customers.splice(userIndex, 1, updatedUser);
  res.json(customers);
});

// delete one user - needs route param(id)
app.delete("/customers/:id", (req, res) => {
  const user = customers.find((user) => user.id === req.params.id);
  const userIndex = customers.findIndex((el) => el.id === req.params.id);
  const { body } = req;
  console.log(body);

  customers.splice(userIndex, 1);
  res.json(customers);
});
*/
