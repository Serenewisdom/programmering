console.log("Hello Tuesday");

const list = [
    {name: "Person1", free: false, cash: 200 },
    {name: "Person2", free: true, cash: 150},
    {name: "Person3", free: false, cash: 25}
];

const cashCheck = (list) => {
    const sum = [];

    for (const ind of list) {
        if (ind.free === true) {
            const newSum = 0;
            sum.push({name: ind.name, cash: newSum});
        }
    }

    return sum;
}

const calc = cashCheck(list);
console.log(calc);

console.log(`Congrats! The price for ${list[1].name} is now ${list[1].cash}`);