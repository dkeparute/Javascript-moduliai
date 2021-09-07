console.log("kuriam funkcijas");

function suma(a, b) {
  return a + b;
}

function skirtumas(a, b) {
  return a - b;
}

module.exports.suma = suma;
module.exports.skirtumas = skirtumas;

console.log("baigem kurti funkcijas");
console.log(module);