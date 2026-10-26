const cart = ["Milk", "Candy", "Bread", "Apple"];

for (const product of cart) {
    if (product === "Candy"){
        console.log("CANDY ALERT! ABORT ABORT!")
    }
    else {
        console.log("Buy: " + product)
    }
}