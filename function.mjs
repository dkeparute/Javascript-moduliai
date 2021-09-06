console.log("kuriam funkcijas");

let kiekis = 0;
// galima eksportuoti kintamaji, bet negalima keisti kiekio parametru.

let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
}
// galima keisti tik objekto savybes. Objekto busena gali keistis, bet negalima priskirti kito objekto
export function suma(a, b) {
    return a + b;
}
export function skirtumas(a, b) {
    return a - b;
}
function daugyba(a, b) {
    return a * b;
}
function dalyba(a, b) {
    return a / b;
}
// default export gali buti tik tai vienas vienintelis
export default function calc(veiksmas, a, b) {
    kiekis++;
if (veiksmas == "sum") {
    return suma(a, b);
} else if (veiksmas == "sub") {
    return skirtumas(a, b);
} else if (veiksmas == "nul") {
    return daugyba(a, b);
} else if (veiksmas == "div") {
    return dalyba(a, b);
}
throw new Error("Nezinomas veiksmas");
}
console.log("baigiam kurti funkcijas");
// export - reiskia jog sitom eksportuojamomis funkcijomis gales naudotis kazkas kitas
export {
    daugyba as multiplication,
    dalyba,
    kiekis as counter,
    zmogus
}
