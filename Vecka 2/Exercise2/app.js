const testScore = [18, 15, 25, 20, 22]

const calcAverage = (testScore) => {
    let sum = 0;
    for (const score of testScore){
      sum += score
    }
    const average = sum/testScore.length;
    return average;
}


console.log(`The class got ${calcAverage(testScore)} points in average`)