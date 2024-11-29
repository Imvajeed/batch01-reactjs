console.log("Script kiddie");


function divison(num1, num2){
    if(num2==0){
        throw "Dision by zero not possible";
    }else{
        return num1/num2;
    }
}

try{
    console.log(divison(10,0));

}catch(error){
    console.log(error);
    console.log("you cant divide any number by zero");
}finally{
    console.log("I am finally");
}



console.log("End of the code");