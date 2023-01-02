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

//memoize add using map
function memoize(fn){

    const cache = new Map();

    return function(...args) {

        const key = args.join('-');

        if(cache.has(key)){
            console.log('Return value from memory.');
            return cache.get(key);
        }

        console.log('Set key and value to map & return.');
        cache.set(key, fn(...args));
        return cache.get(key);
    }

}

const memoizeAdd = memoize(add);

// add-1
time( () => memoizeAdd(100,100) );
time( () => memoizeAdd(100,100) );

// add-2
time( () => memoizeAdd(200,100) );
time( () => memoizeAdd(200,100) );