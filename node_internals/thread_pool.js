const crypto = require("node:crypto");

const MAX_CALLS = 4;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 1000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 1000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 1000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);
