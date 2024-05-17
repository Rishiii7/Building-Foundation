/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        // console.log("inside promise wait 1");
        setTimeout(() =>{
            resolve();
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        // console.log("inside promise wait 2");
        setTimeout(() =>{
            resolve();
        }, t * 1000);
    });

}

function wait3(t) {
    return new Promise((resolve) => {
        // console.log("inside promise wait 3");
        setTimeout(() =>{
            resolve();
        }, t * 1000);
    });

}

function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
    let p1 = wait1(t1);
    let p2 = wait2(t2);
    let p3 = wait3(t3);

    return Promise.all([p1, p2, p3]).then( () => {
        let end = new Date().getTime();
        // console.log(`sleep took ${end - start} ms`);
        return end - start;
    });
}

module.exports = calculateTime;


async function wait_all() {
    let time = await calculateTime(1, 2, 3);
    console.log(time);
}

wait_all();
