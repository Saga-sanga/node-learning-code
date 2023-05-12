const fs = require("fs");

// Create Directory

if (fs.existsSync("./assets")) {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }

    if (!err) console.log("Folder Deleted");
  });
}

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }

    if (!err) console.log("Folder Created");
  });
}

fs.readdir("./", (err, files) => {
  if (err) {
    console.log(err);
  }

  console.log("Files: ", files);
});

// Delete file
if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }

    console.log("File Deleted");
  });
}
