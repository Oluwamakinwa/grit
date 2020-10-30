const mongoose = require("mongoose");
const { Schema } = mongoose;

const emailSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter the email you want to get notified with."]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Email", emailSchema);
