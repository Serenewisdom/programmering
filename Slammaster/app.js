const scoreInputs = document.querySelectorAll("#score-form input[name^='score-']");
const formInputs = document.querySelectorAll("#score-form input");
const timeMinutesInput = document.querySelector("#time-minutes");
const timeSecondsInput = document.querySelector("#time-seconds");
const totalDisplay = document.querySelector("#total");
const penaltyDisplay = document.querySelector("#time-penalty");

function summarizeScores() {
    const scores = [...scoreInputs].map((input) => input.valueAsNumber);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const juryTotal = sortedScores.slice(1, -1).reduce((sum, score) => sum + score, 0);
    const elapsedSeconds = timeMinutesInput.valueAsNumber * 60 + timeSecondsInput.valueAsNumber;
    const lateSeconds = Math.max(0, elapsedSeconds - 189);
    const penalty = Math.ceil(lateSeconds / 10) * 0.5;
    const total = juryTotal - penalty;

    totalDisplay.textContent = `Total poäng: ${total.toFixed(1)}`;
    penaltyDisplay.textContent = `Tidsavdrag: ${penalty.toFixed(1)} poäng`;
}

formInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if ([...formInputs].every((formInput) => formInput.value !== "" && formInput.validity.valid)) {
            summarizeScores();
        } else {
            totalDisplay.textContent = "Total poäng:";
            penaltyDisplay.textContent = "";
        }
    });
});