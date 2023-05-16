const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Listening on port 3001");
  res.send("Hello World");
});

app.listen(3001);

http
  .createServer((req, res) => {
    console.log("Request Made: ", req.url, req.method);

    console.log(_.random(0, 40));

    const greet = _.once(() => console.log("Hello"));

    greet();
    greet();

    res.setHeader("Content-Type", "text/html");

    let path = "./views/";

    switch (req.url) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;
      case "/about-me":
        // Redirect
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        break;
      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    // read html file and send
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("Listening on port 3000");
  });

// server.listen(3000, "localhost", () => {
//   console.log("Listening on port 3000");
// });
