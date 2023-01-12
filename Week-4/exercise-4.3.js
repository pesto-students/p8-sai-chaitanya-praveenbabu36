// Function returns iterable obj of fibonacci numbers

const fibSeries = (maxLimit) => {
  const fibIterable = {
    //iterable
    [Symbol.iterator]() {
      //initial numbers
      let fNum = 0;
      let sNum = 1;

      return {
        //iterator
        next() {
          // fib logic
          let returnNum = fNum + sNum;
          fNum = sNum;
          sNum = returnNum;

          return { value: returnNum, done: returnNum > maxLimit };
        },
      };
    },
  };

  return fibIterable;
};

// Get obj of fibonacci numbers upto max limit of 100
const fibNumIter = fibSeries(100);

// print the numbers
for (let el of fibNumIter) {
  console.log(el);
}
