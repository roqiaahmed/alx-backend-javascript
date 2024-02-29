const express = require("express");
const app = express();
const data = {
  payment_methods: {
    credit_cards: true,
    paypal: false,
  },
};

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});
app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart :${id}`);
});
app.get("/available_payments", (req, res) => {
  res.status(200).send(data);
});
app.post("/login", (req, res) => {
  let username = "";

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});
app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
module.exports = app;
