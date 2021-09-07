import * as f2 from "./funkcijos.mjs"; // viskas is kito failo
import {
  default as c,
  multiplication as mul,
  skirtumas,
  suma,
} from "./funkcijos.mjs"; // tik pasirinkti exportai
import calculator from "./funkcijos.mjs"; // tik default exportas
import { multiplication } from "./kitosFunkcijos.cjs";

// import kalkuliatorius from "./funkcijos.mjs";

console.log("pati pradzia");
console.log(f2);
console.log(calculator("sum", 1, 2));
console.log(f2.default("sum", 1, 2));
console.log(c("div", 22, 7));

console.log(f2.counter);
console.log("------");
// console.log(f2);

// f2.zmogus.vardas = "Petras";

// delete f2.zmogus.pavarde;
// f2.zmogus.gimimoMetai = 2000;

// console.log(f2.zmogus);

// f2.zmogus = {
//   vardas: "Antanas",
//   pavarde: "Antanaitis"
// };

// console.log(f2.zmogus);

console.log(suma(1, 2));
console.log(skirtumas(11, 2));
console.log(f2.skirtumas(1, 2));

console.log(mul(2, 2));
console.log(multiplication(2));

// console.log(f2.suma === suma);
// console.log(f2.skirtumas === skirtumas);

// console.log(sum(1, 2));
// console.log(sub(11, 2));

// const f2 = require("./funkcijos.js");

// console.log(f2);
// console.log(f2.suma(1, 2));

console.log("pabaiga");
