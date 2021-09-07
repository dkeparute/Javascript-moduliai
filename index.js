console.log("pati pradzia");
const { suma: sum, skirtumas: sub } = require("./funkcijos.js");

// const {multiplication} = require("./kitosFunkcijos.mjs"); // NEVEIKS

console.log(sum(1, 2));
console.log(sub(11, 2));
console.log("kraunam ta pati dar karta");
var f2 = require("./funkcijos.js");
console.log(f2.suma(1, 2));

console.log(multiplication(7));

// console.log(module);
console.log("pabaiga");

import("./funkcijos1.mjs")
.then((val) => {
  console.log(val);
  val.default("mul", 4, 5);
})
.catch((err) => {
  console.log("Failed to load module", err);
});
