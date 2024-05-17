// let HH=0, MM=0, SS=0;


// // Using setTimeout()
// function currentMachineTime(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;

//     hours = hours < 10 ? '0'+hours : hours;
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     seconds = seconds < 10 ? '0'+seconds : seconds;


//     console.log(hours + ":" + minutes + ":" + seconds + " " + ampm);

//     setTimeout(currentMachineTime, 1000);
// }

// currentMachineTime();


//Using setInterval()

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours <= 10 ? '0' + hours : hours;
    minutes = minutes <= 10 ? '0' + minutes : minutes;
    seconds = seconds <= 10 ? '0' + seconds : seconds;

    console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);