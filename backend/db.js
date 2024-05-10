const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost/Inotebook";
// ?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
  mongoose
    .connect("mongodb://localhost/iNotebook")
    .then(() => {
      console.log("connected to mongo successfully");
    })
    .catch((e) => {
      console.log("db not connected");
    });
};
module.exports = connectToMongo;
