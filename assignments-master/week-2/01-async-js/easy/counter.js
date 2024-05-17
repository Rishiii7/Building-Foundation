
// setInterval(() => {
//     console.log("Helllo  there");
// }, 1000);

let count = 0;

function increaseCount() {
    console.log(count);
    count++;
    setTimeout( increaseCount, 1000);
}

increaseCount();