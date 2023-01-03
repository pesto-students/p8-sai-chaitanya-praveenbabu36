
// Example for Call Bind & Apply 

// a circle obj
var circleObj = {
    radius : 2,
    getArea : function(args) {
        var reply = [
            'Area: ',
            Math.PI * this.radius * this.radius
        ];

        if(args) 
            reply.push(`Args: ${args}`)
        
        
        return reply.join(' ');
    }
}

// call the func using the obj ref
console.log(circleObj.getArea());

// create a new ref to the func and call it
var getCircleArea = circleObj.getArea;

// did nt work bcoz the this lost the reference to the radius variable
console.log(getCircleArea()); 

//bind
// use bind to attach circleObj to the this
console.log(getCircleArea.bind(circleObj)()); 

// call
/*  use call to attach a obj to this.
    Difference between bind and call is that
        - bind creates a copy of func
        - additional args can be passed to the func in call
*/
var circleObj2 = {
    radius : 5
}

console.log(getCircleArea.call(circleObj)); 
console.log(getCircleArea.call(circleObj2)); 

// pass additional param using call
console.log(circleObj.getArea.call(circleObj2, 'Blue', 'White'));