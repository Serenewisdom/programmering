//En funktion som hanterar räknandet istället för att f5 gör det
function calculateScore() {
  //Ta fram input-poäng

  const numbers = document.querySelectorAll('#scores input[id^="score-"]');

  const points = [];
  for (const point of numbers) {
    points.push(Number(point.value));
  }

  console.log("De skrivna poängen är:" + points);

  //Sortera och ta ut input-poäng

  const pointsSorted = points.sort((a, b) => a - b);

  pointsLeft = pointsSorted.slice(1, pointsSorted.length - 1);

  console.log("De kvarvarande poängen är:" + pointsLeft);

  //Summera input-poäng

  let sum = 0;
  for (const p of pointsLeft) {
    sum += p;
  }

  console.log("Poängsumma: " + sum.toFixed(1));

  //Tidsavdrag

  const timeMinutes = document.querySelector("#time-minutes");
  const timeSeconds = document.querySelector("#time-seconds");

  const elapsedSeconds =
    Number(timeMinutes.value) * 60 + Number(timeSeconds.value);
  const lateSeconds = Math.max(0, elapsedSeconds - 189);
  const timePenalty = Math.ceil(lateSeconds / 10) * 0.5;

  const finalScore = sum - timePenalty;

//Skriva ut det på sidan

  document.querySelector("#total").textContent = `Total poäng: ${finalScore}`

 if (lateSeconds > 0) {
  document.querySelector("#time-penalty").textContent = `Dikten var ${lateSeconds} sekunder för lång, vilket gav ett avdrag på ${timePenalty} poäng.`
 }
 else {
    document.querySelector("#time-penalty").textContent = ``
 }
}

//En funktion som aktiverar räknandet vid input

const inputs = document.querySelectorAll("#scores input, #time input");

inputs.forEach(input => {
    input.addEventListener("input", calculateScore);
});

//En funktion som nollställer poängen vid f5

window.addEventListener("pageshow", () => {
  document.querySelectorAll("#scores input, #time input").forEach(input => {
    input.value = "";
  });
});

