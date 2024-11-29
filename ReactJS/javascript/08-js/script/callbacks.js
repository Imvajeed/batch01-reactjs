
function sumOfOne(num){
    return num+1;
}




function sumOfTwo(num,sumOfOne){
    let c = sumOfOne(num)
    return num+c;
}

console.log("First line");






setTimeout(()=>{
    console.log("Second line");
},5000);

console.log("Third line");





// function vajeed(num){
//     if(num==0){
//         console.log("End of the function");
//     }else{
//         console.log(num);
//         return vajeed(num-1);
//     }
// }

// function one(){
//     console.log("Function ended");
//     return 6;
// }


// function two(num){
//     console.log(num,one());
    
// }

// two(4);