const fs = require("fs");

const content =
  "Some content, Hello my friends!! How fares theeee? Tis a wondeful day to be up and about. Some more content. Need more content. A lot more content.";

const path = "/Users/Reckson/Dev/learning/nodejs/nodeScripts/deleteme.txt";

fs.writeFile(path, content, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Wrote to file: ", path);
});
