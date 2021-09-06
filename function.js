console.log("kuriam funkcijas");
function suma (a, b) {
    return a + b;
}
function skirtumas (a, b) {
    return a - b;
}
// function labas() {
//     const el = document.getElementById("hi");
//     el.innerHTML = `
//     <h2>sugeneruotas pasisveikinimas<h2>
//     `;
// }

module.exports.suma = suma;
module.exports.skirtumas = skirtumas;
// console.log(module);
console.log("baigiam kurti funkcijas");