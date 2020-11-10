const mongoose = require("mongoose");
const { Schema } = mongoose;

const passwordSchema = new Schema({
  password: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Password", passwordSchema);
