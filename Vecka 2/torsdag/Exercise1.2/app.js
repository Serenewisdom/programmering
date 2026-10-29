console.log("Good morning Thursday");
const welcome = (name, title = "Medlem") => {
    return `Välkommen ${title} ${name}`

}

console.log(welcome("Klara", "Admin"));
console.log(welcome("Leo"));