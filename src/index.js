const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const HomeRouter = require("./routes/HomeRouter");
const app = express();
app.use(express.json());
const morgan = require("morgan");
const connectdb = require("./config/db");

const PORT = 8000;

connectdb();

app.use(morgan("dev"));

app.use("/", HomeRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
