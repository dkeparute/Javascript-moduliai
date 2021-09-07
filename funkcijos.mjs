console.log("kuriam funkcijas");

let kiekis = 0;

let zmogus = {
  vardas: "Jonas",
  pavarde: "Jonaitis"
}

export function suma(a, b) {
  return a + b;
}

export function skirtumas(a, b) {
  return a - b;
}

function daugyba (a, b) {
  return a * b;
}

function dalyba (a, b) {
  return a / b;
}

function calc(veiksmas, a, b) {
  kiekis++;
  if (veiksmas === "sum") {
    return suma(a, b);
  } else if (veiksmas === "sub") {
    return skirtumas(a, b);
  } else if (veiksmas === "mul") {
    return daugyba(a, b);
  } else if (veiksmas === "div") {
    return dalyba(a, b);
  }
  throw new Error("Nezinomas veiksmas");
}
console.log("baigem kurti funkcijas");

export {
  calc as default,
  daugyba as multiplication,
  kiekis as counter,
  zmogus
};

export {
  dalyba
};