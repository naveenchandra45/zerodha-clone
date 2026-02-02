const mongoose = require("mongoose");
const {Schema} = mongoose;

const WatchlistSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = WatchlistSchema;