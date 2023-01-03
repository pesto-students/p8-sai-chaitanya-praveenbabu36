
// Example for Call Bind & Apply 

// a circle obj
var circleObj = {
    radius : 2,
    getArea : function() {
        return Math.PI * this.radius * this.radius
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

