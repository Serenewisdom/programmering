const health = function(name) {
    return 'Hello ${name}'
}

const health2 = (name2) => {
    return 'Hello ${name2} how are you today?'
    console.log('HI I LO U') //Kommer inte köras då return stannar funktionen
}

console.log(health())
console.log(health2())

const hello = name3 => {
    console.log('Hello ' + name3)
}

hello('J', 36);

//example(nameInput.value + " , " + ageInput.value)

const testAge = (name5, age5, role = "Guest") => {
    console.log('Hi ' + name5 + ' this place is only for adults')

    if (age5 < 18) {
        return { message:("You are not an adult!")}
    }
    return { message: 'Your age is ' + age5 + ': You are adult'}
}

const testAgeObject = testAge('Blob', 20, 'student')

console.log(testAgeObject.message)

//Kod som körs i bakgrunden:

const calcPrice = (title, price, moms = 25) => {
    const total = price * (1 + moms/100);
    return { titel, totalPrice: total };
}

//Arrays

const cart = [
    { name: "Book", price: 120 },
    { name: "Pencil", price: 25 },
    { name: "Folder", price: 45 }
];

const calcTotal = (products) => {
    let sum = 0;
    for (const p of products) {
        sum += p.price
    }
    return sum;
};

const total = calcTotal(cart);
console.log(`To pay: ${total} kr`);