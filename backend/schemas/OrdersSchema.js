const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  name: String,
  price: Number,
  qty: Number,
  mode: String,
});

module.exports = OrdersSchema;
