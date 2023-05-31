const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const menuRouter = require("./routes/api/menu");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/menu", menuRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
  console.log(err);
});

module.exports = app;
