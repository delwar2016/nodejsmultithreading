//  node myFile.js

const pendingTimes = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // 3 checks
    // check one: any pending setTimeout, setInterval, setImmediate
    // check two: any pending OS task? (like server listening to port)
    // check three: any pending long running operations? (Like fs module)
    return pendingTimes.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one `tick`

while (shouldContinue()) {
    //1) node looks at pendingTimes and sees if any functions
    // are ready to be called. setTimeout, setInterval

    //2) node looks at pendingOSTasks and pendingOperations
    // and calls relevant callbacks

    //3) pause execution. continue when ....
    // - a new pendingOSTasks is done
    // - a new pendingOperations is done
    // - a timer is about to complete

    // 4) Look at pendingTimes. call any setImmediate

    //5) Handle any `close` events

}


// exit back to terminal
