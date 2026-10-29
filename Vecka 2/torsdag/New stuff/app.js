const printTen = () => {
return 10
}

const myFunction = callbackFn => {
    const result = callbackFn()

    //return result

    return () => {
        console.log("text");
    }
}

const printResult = myFunction(printTen);

console.log(printResult)