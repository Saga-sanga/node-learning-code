const fs = require("fs");

fs.readFile("/Users/Reckson/Dev/test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
