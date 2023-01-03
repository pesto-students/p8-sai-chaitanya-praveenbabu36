
// Example for Call Bind & Apply 

// a circle obj
var circleObj = {
    radius : 2,
    getArea : function() {
        return Math.PI * this.radius * this.radius
    }
}

console.log(circleObj.getArea());