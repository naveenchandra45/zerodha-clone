const mongoose = require("mongoose");
const { Schema } = mongoose;

const SignupSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v >= 18;
      },
      messege: (props) => `${props.value} is too young. You must be 18+`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

module.exports = SignupSchema;
