const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("We are in the Express App!!");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
// The code is a catch all that executes for any parameter that reaches this point
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(port, () => {
  console.log("Listening to port ", port);
});
