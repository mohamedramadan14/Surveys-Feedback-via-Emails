const express = require("express");
const mongoose = require("mongoose");
const { mongoURI, cookieKey } = require("./server/config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./server/models/User");
require("./server/services/passport");
const connectDatabase = require("./server/utils/dbConnect");

connectDatabase(mongoURI);
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./server/routes/authRoutes")(app);
require("./server/routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    console.log(__dirname);
    res.sendFile(
      path.join(__dirname, "client", "build", "index.html"),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);