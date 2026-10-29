console.log("Take 2")

const testPoints = [18, 22, 15, 28, 20]

const calcAverage = (testPointsArr) => {
    let sum = 0

    for(const point of testPointsArr) {
        sum += point
    }

    return sum
}

const average = calcAverage(testPoints)/testPoints.length

console.log("The average score is: " + average);