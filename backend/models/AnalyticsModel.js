const mongoose = require("mongoose");
const AnalyticsSchema = require("../schemas/AnalyticsSchema");

const AnalyticsModel = mongoose.model("analytic", AnalyticsSchema);

module.exports = AnalyticsModel;