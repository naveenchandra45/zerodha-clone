const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: String,
  price: Number,
  qty: Number,
  mode: String,
});

module.exports = OrdersSchema;
