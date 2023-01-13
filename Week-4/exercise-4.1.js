// Function returns a random number
const getNumber = () => {
  //get random number
  const num = Math.round(Math.random() * 10);

  //divBy_5_Flag
  const div_by_5_Flag = (num != 0) & (num % 5 == 0);

  return new Promise((resolve, reject) => {
    if (div_by_5_Flag) resolve(num);

    reject(num);
  });
};

console.log(getNumber());
