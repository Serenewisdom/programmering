console.log("Hello world");

const games = ["Zelda", "Final fantasy", "Metaphor"];

console.log(games);

games.push("Mario");
console.log(games[3]);

const movies = [
    {title: "Scott Pilgrim", year: "2010"},
    {title: "Halloween", year: "1980"}
];

console.log(movies);

console.log(movies[1].year);

console.log("Filmen " + movies[0].title + " släpptes år: " + movies[0].year);