function createIncrement() {

    let count = 0;

    function increment(){
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];

}


const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged ?

/* 

Question : What is the output and Why ? 

Output : Count is 0

Reason : 
            Because of the JS closures, the log() hold on to the initial 'message' string 'Count is 0' 
                during the createIncrement function call.  

            Even though the count is incremented, the 'message' variable is not changed. 
                Changing the 'message' string inside the increment() will print result 'Count is 3'.

*/