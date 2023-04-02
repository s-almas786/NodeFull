const app = require("./index");

console.log(app.get("env"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listning on the port ${PORT}`);
});
