const mongoose = require("mongoose");
const positionsSchema = require("../schemas/PositionsSchema");

const positionsModel = mongoose.model("position", positionsSchema);

module.exports = positionsModel;
