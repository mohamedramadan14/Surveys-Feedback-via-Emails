const { Schema, model } = require("mongoose");
const recipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSend: { type: Date, default: new Date() },
  lastResponded: Date,
});

model("survey", surveySchema);
