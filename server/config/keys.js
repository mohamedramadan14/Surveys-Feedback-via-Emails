// key.js : set of credentials used inside app for Production that to be committed

if (process.env.NODE_ENV === "production") {
  // Production
  module.exports = require("./prod");
} else {
  // dev keys
  module.exports = require("./dev");
}
