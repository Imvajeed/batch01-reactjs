console.log("javascript-05");

// for(let a = 20; a>= 1; a--){
//     console.log(a);
// }

let a = 111;

// while(a<10){
//     console.log(a);
//     a++;
// }

// do{
//     console.log(a);
//     a++;
// }while(a<10);

// console.log(2**0);


let num = 1;
let isPresent = false;

for(let i = 0; i<32;i++){
    if(2**i==num){
        isPresent = true;
        break;
    }
}

if(isPresent){
    console.log("present");
}else{
    console.log("Not present");
}
