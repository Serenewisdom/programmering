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
