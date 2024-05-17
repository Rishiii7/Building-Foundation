/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


function sleep(milliseconds) {
    // console.log("inside promise");
    let start  = new Date().getTime();
    let end = start;
    while (end < start + milliseconds) {
        end = new Date().getTime();
    }
    // console.log(`sleep took ${end - start} ms`);
    // console.log("Ends promise");
    let p = new Promise((resolves) => {
        resolves();
    });

    return p;
}

module.exports = sleep;

// // calcuate the time function sleep takes
// console.log("Start");
// let start = new Date().getTime()
// sleep(1000).then(() => {
//     console.log("inside then");
//     let end = new Date().getTime();
//     console.log(`sleep took ${end - start} ms`);
// });
// console.log("End");
