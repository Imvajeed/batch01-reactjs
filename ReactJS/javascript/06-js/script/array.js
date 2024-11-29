console.log("Array");

let arr = ['apple','orange','banana'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let size = arr.length;

// for(let i = 0; i < size; i++){
//     console.log(arr[i]);
// }

console.log(arr);

arr.pop();

console.log(arr);

arr.push("kiwi");

console.log(arr);

arr.shift();

console.log(arr);

arr.unshift('banana');

console.log(arr);
let arr2 = arr.map(toU);

console.log(arr2);

function toU(vl){
    return vl.toUpperCase();
}

arr.forEach(element => {
    console.log(element);
});


console.log("===========================");

let num = 22;

if(num%2==0){
    console.log("Even");
}else{
    console.log("ODD");
}