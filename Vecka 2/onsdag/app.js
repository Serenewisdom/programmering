const list = [
    {name: "A", VIP: true, cost: 100},
    {name: "B", VIP: false, cost: 200},
    {name: "C", VIP: true, cost: 300}
]

const calcCost = (list) => {
    const costSum = []

    for (const item of list){
        if (item.VIP === true) {
            const newSum = item.cost * 0.9;
            costSum.push({name: item.name, cost: newSum});
        }
        else {
            costSum.push({name: item.name, cost: item.cost})
        }
    }

    let finalSum = 0;
    for (let i=0; i < list.length ; i++){
        finalSum += list.cost[i]
    }

    return costSum;
};

const final = calcCost(list);
console.log(final);
console.log("Total price is: " + finalSum);