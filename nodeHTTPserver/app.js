const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("We are in the Express App!!");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Listening to port ", port);
});
