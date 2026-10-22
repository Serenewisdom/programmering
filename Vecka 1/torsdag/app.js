let isAge = document.getElementById("age").value
let approve = document.querySelector("#okay")
let knapps = document.querySelector("#knapp")
let hasTicket = true;
let withAdult = true;

knapps.addEventListener("click", function(event){

if (isAge >= 15 && hasTicket == true){
    console.log("Välkommen in!")
    approve.textContent = "Du är välkommen!"
}

else if (isAge < 15 && hasTicket == true && withAdult == true){
    console.log("Okejrå!")
    approve.textContent = "Du är typ välkommen!"
}

else {
    console.log("Du är ej välkommen!")
}

});