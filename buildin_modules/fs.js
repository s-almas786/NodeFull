// const fs = require("fs");
const { error } = require("node:console");
const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch {
    console.log(error);
  }
};

readFile();

// const fileContent = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContent);

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFileSync("./greet.txt", "Hello World!");

// fs.writeFile("./greet.txt", " Hi World!", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Written Successfully");
//   }
// });
