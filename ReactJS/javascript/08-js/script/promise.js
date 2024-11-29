
console.log("First line");

let vajeed = new Promise((sucess,failure)=>{

    let okay = 300;
    if(okay==200){
        sucess("Everything is Okey");
    }else{
        failure("Something went wrong");
    }

    
    
})
console.log("second line");


vajeed.then((success)=>{
    console.log(success);
},
(failure)=>{
    console.log(failure);
}
);

console.log("third line");
