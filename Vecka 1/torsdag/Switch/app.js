const traficLight = "gul";

switch (traficLight) {
  case "grön":
    console.log("Kör!");
    break;

  case "gul":
    console.log("Gör dig redo…");
    break;

  case "röd":
    console.log("Stanna!");
    break;

  default:
    console.log("Okänd signal!");
}

const weather = "sun";

switch (weather) {
  case "rain":
    console.log("Ta med ett paraply!");
    break;

  case "sun":
    console.log("Ta med solglasögon!");
    break;

  case "snow":
    console.log("Ta med varm jacka!");
    break;

  default:
    console.log("Kolla väderappen");
}

for (let i = 1; i < 6; i++) {
  console.log("Jag är " + i + " år gammal");
}

const fruits = ["banana", "apple", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log("I am a " + fruits[i])
}

let energy = 3;

while (energy > 0) {
console.log('Sprang ett varv! Energi kvar: '  + energy);
energy-- 
}

console.log('Slut på energi! Måste vila!');
