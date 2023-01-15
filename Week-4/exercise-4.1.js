//custom promise function
class MyPromise {
  //constructor
  constructor(callbackFunction) {
    this.state = "Pending";
    this.value = null;

    const resolve = (...args) => {
      this.state = "Resolved";
      this.value = args;
      console.log(this.state, ...args, "😻");
    };

    const reject = (...args) => {
      this.state = "Rejected";
      this.value = args;
      console.log(this.state, ...args, '😈');
    };

    // call the function passed to promise
    callbackFunction(resolve, reject);
  }

  //handle promise result - then function 
  then(onSuccess, onFailure) {
    if (this.state == "Resolved") {
      onSuccess(this.value);
    } else {
      onFailure(this.value);
    }
  }
}

// Function returns a random number
const getNumber = () => {
  //get random number
  const num = Math.round(Math.random() * 10);

  //divBy_5_Flag
  const div_by_5_Flag = (num != 0) & (num % 5 == 0);

  //create a new promise
  return new MyPromise(function (resolve, reject) {
    if (!div_by_5_Flag) {
      return reject(num);
    }

    return resolve(num);
  });
};


// Handle Promise result.
getNumber().then(
  //success
  (x) => {
    console.log("1- Success:", x);
  },
  //failure
  (x) => {
    console.log("1 - Failure:", x);
  }
);


// Handle Promise result.
getNumber().then(
  //success
  (x) => {
    console.log("2 - Success:", x);
  },
  //failure
  (x) => {
    console.log("2 - Failure:", x);
  }
);
