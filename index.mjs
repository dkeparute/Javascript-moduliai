import * as f2 from "./function.mjs"; //viskas is kito failo exportinama;
import {suma, skirtumas, multiplication as mul } from "./function.mjs"; // tik pasirinkti eksportai;
import calculator from "./function.mjs"; // tik default eksportas;
import {multiplication} from "./kitosfunkcijos.mjs";
console.log("pradzia");

console.log(f2);
console.log(calculator("sum", 1, 2));
console.log(f2.default("sum", 2, 3));


console.log(f2.counter);
console.log(mul(2,2));
console.log(multiplication(2));
console.log("pabaiga");