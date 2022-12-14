const { Schema } = require("mongoose");

const recipientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  responded: {
    type: Boolean,
    default: false,
  },
});

module.exports = recipientSchema;
