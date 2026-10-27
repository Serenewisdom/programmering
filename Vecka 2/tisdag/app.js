console.log("Hello Tuesday");

const list = [
  { name: "Person1", free: false, cash: 200 },
  { name: "Person2", free: true, cash: 150 },
  { name: "Person3", free: false, cash: 25 },
];

console.log(`These are the current prices:` + list)

const cashCheck = (list) => {
  for (let i = 0; i <= list.length; i++) {
    if (list[i].free === true) {
      list[i].cash = 0;
    }

    console.log(`Updating... Checking for free passes... Update complete! The price for ${list[i].name} is now ${list[i].cash}`);
  }

  /*     for (const ind of list) {
        if (ind.free === true) {
            const newSum = 0;
            list.push({name: ind.name, cash: newSum});
        }
    }

    return list; */
};

const calc = cashCheck(list);
console.log(calc);

console.log(`Congrats! The price for ${list[1].name} is now ${list[1].cash}`);
