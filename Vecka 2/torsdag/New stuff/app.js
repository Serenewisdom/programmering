const printTen = () => {
  return 10;
};

const myFunction = (callbackFn) => {
  const result = callbackFn();

  return result;

  /* return () => {
        console.log("text");
    } */
};

const printResult = myFunction(printTen);

console.log(printResult);

//

const siffror = [5, 12, 8, 20, 3];

const numbers = siffror.filter((siffra) => {
    return siffra > 10;
});

console.log(numbers)
