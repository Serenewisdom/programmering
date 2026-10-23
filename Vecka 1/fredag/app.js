console.log("Hello world!");

//For-loop

for (let i=0; i<=5; i++){
    console.log("The current number is " + i)
};

//Array and if

const people = [
    {name: "Hanna", age: "29"},
    {name: "Juna", age: "36"},
    {name: "Bear", age: "31"}
]

console.log("There are " + people.length + " people registered:")
for (let i=0; i<people.length; i++){
    console.log(people[i].name)
}

console.log(people[0].name + " is " + people[0].age + " years old")

if (people[0].age < people[1].age) {
    console.log(people[0].name + " is younger than " + people[1].name)
}

else {
    console.log(people[0].name + " is older than " + people[1].name)
}

//For... of

const cart = ["Apple", "Banana", "Oatmeal", "Skotte"]

console.log("Det här är din varukorg: ")

for (const item of cart){
    if(item === "Skotte"){
        console.log(item + "⚠️: Ta genast bort från varukorgen!")
    }
    
    else{
        console.log(item + ": KÖP!")
    }
}

