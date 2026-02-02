const mongoose = require("mongoose");
const SignupSchema = require("../schemas/SignupSchema")


const SignupModel = mongoose.model("user", SignupSchema);

module.exports = SignupModel;