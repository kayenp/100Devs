//PSEUDOCODE
/*
- checks time at start()
    - date() obj?
- checks time at stop()
- calculates the diffence in time between start() & stop()
- returns that difference to value:
- return() resets value to 0
- value: is a private member
- getter to call start() & stop()
- setter unused in this object

*/

function ConstructorSw() {
    let begin = 0;
    let end = 0;


    let start = function() {
        begin = Date.now();
    };

    let stop = function() {
        end = Date.now();
    }

    let duration = function() {
        console.log(`${(end - begin) / 1000} seconds`);
    };

    let reset = function() {
        begin = 0;
        end = 0;
    }
    
    Object.defineProperty(this, "start", {
        get: function() {
            start();
        }
    });

    Object.defineProperty(this, `stop`, {
        get: function() {
            stop();
        }
    })

    Object.defineProperty(this, `duration`, {
        get: function() {
            duration();
        }
    })

    Object.defineProperty(this, `reset`, {
        get: function() {
            reset();
            console.log((`${(end - begin) / 1000} seconds`));
        }
    });
};

let sw = new ConstructorSw();

