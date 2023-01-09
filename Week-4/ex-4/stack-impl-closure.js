/*
  Exercise 3.4 - 

    Stack implemention using the concept of closure, such that there is
      no way to access items array outside of createStack() function scope.
*/
function createStack() {
  const items = [];

  return {
    push: function (item) {
      return items.push(item);
    },

    pop: function () {
      return items.pop();
    },

    getItems: function () {
      return items;
    },
  };
}

// create stack, add item and list
const stack1 = createStack();
stack1.push(101);
stack1.push(502);
stack1.push(8);
stack1.push(11);
console.log("#1 :", stack1.getItems());
console.log("#2 :", stack1.pop());
// This doesnt affect the items created when we called createStack() due to closure
stack1.items = [12, 23, 23];
console.log("#3:", stack1.items); 
console.log("#4 :", stack1.pop());
console.log("#5:", stack1.getItems()); // 100, 500
