console.log("Functions");


//no-argument funtions

// function birthday(){
//     console.log("Birthday ")
//     console.log("Name: Virat");
//     console.log("Date: Nov-5");
//     console.log("Place: Banglore");

// }

//with argument function
// function birthday(name,date,place,reason){
//     console.log("Reason: ",reason)
//     console.log("Name: ",name);
//     console.log("Date: ",date);
//     console.log("Place: ",place);

// }

// birthday("Virat","Nov-5","Banglore","Birthday");

// birthday("MSD","July-7","Chennai","Birthday")

// birthday();
// console.log("-------------------");
// birthday();


//return type functions

// function additionOfTwoNum(num1,num2){
//     let sum = num1+num2;
//     return sum;
// }

// let c = additionOfTwoNum(2,3);
// console.log(additionOfTwoNum(2,3));

//1-10 print
//recursive functions
function printingNum(num){
    if(num>10){
        return null;
    }else{
        console.log(num);
        return printingNum(num+1);
    }
}

printingNum(1);