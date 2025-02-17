const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const HomeRouter = require("./src/routes/HomeRouter");
const app = express();
app.use(express.json());
const morgan = require("morgan");
const connectdb = require("./src/config/db");

const PORT = 8000;
app.use(
  cors({
    origin: "*",
  })
);

connectdb();

app.use(morgan("dev"));

app.use("/", HomeRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
