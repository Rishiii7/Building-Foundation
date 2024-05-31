let arr = [1,2,3,4,5];

Array.prototype.myMap = (fn) => {
    let arr1 = [];
    console.log(this);
    this.forEach((element) => {
        // console.log(this);
        arr1.push(fn(element));
    });

    return arr1
}

function fn(element){
    return element * 2;
}

console.log(arr.myMap(fn))