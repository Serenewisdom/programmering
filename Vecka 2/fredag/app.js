console.log("Friday morning")

//Övning 1

const versaler = (str) => str.toUpperCase();
const citera = (str) => `"${str}"`;

const formateraText = (text, callback) => callback(text);

console.log(formateraText("Hello", versaler));
console.log(formateraText("Hello", citera));

//Övning 2

const numbers = [5, 18, 2, 23, 10];

const aboveTen = numbers.filter((tenPlus) => {
    return tenPlus > 10
})

console.log("Remaining numbers are: " + aboveTen)

const plusFive = aboveTen.map((addition) => {
    return addition += 5
})

console.log("Adding five to the remaining numbers:" + plusFive)