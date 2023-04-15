const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World " });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
