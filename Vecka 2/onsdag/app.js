const list = [
  { name: "A", VIP: true, cost: 100 },
  { name: "B", VIP: false, cost: 200 },
  { name: "C", VIP: true, cost: 300 },
];

const calcCost = (list) => {
  const costSum = [];

  for (const item of list) {
    if (item.VIP === true) {
      const newSum = item.cost * 0.9;
      costSum.push({ name: item.name, cost: newSum });
    } else {
      costSum.push({ name: item.name, cost: item.cost });
    }
  }

  let finalSum = 0;
  for (let i = 0; i < costSum.length; i++) {
    finalSum += costSum[i].cost;
  }

  return { costSum, finalSum };
};

const final = calcCost(list);

console.log("Individual prices are now: ");
final.costSum.forEach((item) => {
  console.log(`${item.name}: ${item.cost}`);
});
console.log("Total price is: " + final.finalSum);
