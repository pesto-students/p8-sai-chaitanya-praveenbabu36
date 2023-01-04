/*
  Exercise 3.4 - 

    Stack implemention using the concept of closure, such that there is
      no way to access items array outside of createStack() function scope.
*/
function createStack() {

    function setupStack() {
        const items = [];
 
        function push(item){
            return items.push(item);
        }

        function pop(){
            return items.pop();
        }

        function getItems(){
            return items;
        }

        return {push, pop, getItems};
    }

    
    return Object.preventExtensions(setupStack());
}

// create stack, add item and list 
const stack1 = createStack();
stack1.push(100);
stack1.push(500);
stack1.push(1);
stack1.pop();
stack1.items = [12, 23, 23];
console.log('1:', stack1.items); // undefined
console.log('2:', stack1.getItems().toString()); // 100, 500
