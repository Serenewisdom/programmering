const cities = ["Stockholm", "Göteborg", "Malmö"];

console.log(cities);

cities.push("Uppsala");

console.log(cities);

const twoCities = cities.slice(0,2);

console.log(cities);
console.log(twoCities);

const temp = [12, 18, 25, 8, 30, 15];
const filter = temp.filter(p => p > 15);
const map = filter.map(p => 2*p);

console.log(map);