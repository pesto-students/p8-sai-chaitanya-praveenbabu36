//reducer
function add(a, b) {
    return a+b;
}

// time the func call
function time(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
}

// add-1
time( () => add(100,100) );
time( () => add(100,100) );

// add-2
time( () => add(200,100) );
time( () => add(200,100) );