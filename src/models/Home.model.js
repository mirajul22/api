const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  subject: String,
  message: String,
});

const Home = mongoose.model("Home", Schema);
module.exports = Home;
