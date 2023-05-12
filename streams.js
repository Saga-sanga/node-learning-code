const fs = require("fs");

const readStream = fs.createReadStream("./docs/deleteme.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/deleteme2.txt");

// Events in NodeJS (Related Emmiters topic)
// readStream.on('data', (chunk) => {
//   console.log('new chunk received');
//   console.log(chunk);
//   writeStream.write('\nNew Chunk\n');
//   writeStream.write(chunk);
// })

// Piping
readStream.pipe(writeStream);

// Advanced: Duplex Stream (You can read and write from the stream)
