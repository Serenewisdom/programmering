const tal = [10, 20, 30, 40];

tal.push(50);
tal.pop();

const del = tal.slice(1,3);
console.log(del);

tal.splice(1,2);
console.log(tal)

const points = [2, 18, 5, 22];
points.forEach(p => console.log(p));