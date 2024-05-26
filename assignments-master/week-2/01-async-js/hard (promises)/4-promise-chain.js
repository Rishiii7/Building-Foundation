/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + t * 1000){
        end = new Date().getTime();
    }

    // return new Promise((resolve) =>{
    //     resolve(end - start);
    // });

    return end - start;
}

function wait2(t) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + t * 1000){
        end = new Date().getTime();
    }

    // return new Promise((resolve) =>{
    //     resolve(end - start);
    // });

    return end - start;
}

function wait3(t) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + t * 1000){
        end = new Date().getTime();
    }

    return end - start;

}

async function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
    let p1 = await wait1(t1);
    let p2 = await wait2(t2);
    let p3 = await wait3(t3);

    // console.log(p1);
    // console.log(p2);
    // console.log(p3);

    let end = new Date().getTime();

    console.log(end - start);
    // return Promise.all([p1,p2,p3]).then((values) =>{
    //     let end = new Date().getTime();
    //     console.log(values);
    //     return end - start;
    // })

    return p1 + p2 + p3;

}

module.exports = calculateTime;


async function wait_all() {
    let time = await calculateTime(1, 2, 3);
    console.log("total Time Taken : " + time);
    // console.log(time);
}

wait_all();

// calculateTime(1,2,3);