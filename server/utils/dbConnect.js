const mongoose = require("mongoose");

module.exports = async (URI) => {
  mongoose.Promise = global.Promise;
  try {
    const connection = await mongoose.connect(URI);
    console.log(connection ? "Connected Successfully" : "Failed to Connect");
  } catch (err) {
    throw new Error(err.message);
  }
};
