const firstName = "Juna";
const lastName = "Henriksson";
const fullName = firstName + " " + lastName;

let point = 0;
point = 10;

const age = 30;

let isStudent = true;

const fruit = ["apple", "banana", "orange"];
fruit.push("kiwi");

console.log("Hi! My name is " + fullName + " and I am " + age + " years old.");
console.log("My points are " + point);
console.log("Is the user a student? ");
if ((isStudent = true)) {
  console.log("Yes, the user is a student.");
} else {
  console.log("No, the user is not a student.");
}
console.log("My favorite fruits are: " + fruit.join(", "));

console.log([fruit[0], fruit[1], fruit[2]]);

console.log("The number of fruits is: " + fruit.length);

//==================================================

const phone = {
  brand: "Samsung",
  model: "S10e",
  color: "black",
  year: 2021,
};

console.log(
  "I have a " +
    phone.brand +
    " " +
    phone.model +
    " in " +
    phone.color +
    " color, released in " +
    phone.year +
    ".",
);

phone.year = 2022;
console.log(phone);

const cars = [
  { id: 1, model: "Volvo", year: 2026 },
  { id: 2, model: "BMW", year: 2023 },
  { id: 3, model: "Audi", year: 2025 },
];

cars[0].year = 1234;
cars.push({ id: 4, model: "Mercedes", year: 2024 });

console.log(cars);
console.log("There are " + cars.length + " cars.");
console.log(cars[0].model + " was released in " + cars[0].year + ".");
