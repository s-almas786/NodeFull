const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
});

const glib = zlib.createGzip();

readableStream.pipe(glib).pipe(fs.createWriteStream("./file3.txt.gz"));
const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
