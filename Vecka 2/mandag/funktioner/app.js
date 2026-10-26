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