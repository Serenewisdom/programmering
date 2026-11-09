//ÖVNING 1

const cities = ["Stockholm", "Malmö", "Göteborg"]
cities.push("Uppsala");

const twoCities = cities.slice(0,2);
console.log(cities);
console.log(twoCities);

//ÖVNING 2

const temp = [12, 18, 25, 8, 30, 15];
const filteredTemp = temp.filter(p => p > 10);

const doubleTemp = filteredTemp.map((t) => t*2)

console.log(filteredTemp);
console.log(doubleTemp);