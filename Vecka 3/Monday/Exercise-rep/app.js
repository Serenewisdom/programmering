//Exercise 1

/* const versaler = (str) => {
    return str.toUpperCase();
} */

    //Samma fast snabbare
const versaler = (str) => str.toUpperCase();

/* const myName = versaler("juna"); */
/* console.log(myName); */

/* const citera = str => {
    return `"${str}"`
} */

const citera = str => `"${str}"`

const quote = citera("juna")
console.log(quote);

const formateraText = (text,callback) => {
    return callback(text)
}

const myName = formateraText("juna", versaler);
const mySchool = formateraText("THS", citera);

console.log(myName)
console.log(mySchool)

//Exercise 2

const numbers = [ 4, 15, 8, 25, 2]
console.log(numbers);

const aboveTen = numbers.filter(n => n > 10);
console.log("Old numbers above ten:", aboveTen);

const added = numbers.map(n => n + 5);
console.log("Old numbers with 5 added", added);

const newAdded = added.filter(n => n > 10);
console.log("Numbers with 5 added, above ten", newAdded);