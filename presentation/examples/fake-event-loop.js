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

}


// exit back to terminal
