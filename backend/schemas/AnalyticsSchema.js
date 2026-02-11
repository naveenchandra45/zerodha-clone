const mongoose = require("mongoose");
const {Schema} = mongoose;

const AnalyticsSchema = new Schema({
      date: String,
      open: Number,
      high: Number,
      low: Number,
      close: Number,
      volume: Number,
})

module.exports = AnalyticsSchema;