let myId = document.getElementById("myId");

let myClass = document.getElementsByClassName("myClass");

let tag = document.getElementsByTagName("h1");

let qur = document.querySelector("#myId");

let qur2 = document.querySelectorAll(".myClass");

console.log(qur.innerHTML);

console.log(qur2);

// console.log(tag);

myId.innerText = "Welcome to Script Kiddie";


//class selector itaration

// for(let i =0; i< myClass.length ; i++){
//     console.log(myClass[i].innerText);
// }


//tag selector itaration

// for(let i = 0; i< tag.length; i++){
//     console.log(tag[i].innerText);
// }

//querselectors all itaration

for(let i = 0; i< qur2.length; i++){
    console.log(qur2[i].innerText);
}


// console.log(myId.innerText);
// console.log(myClass[1].innerHTML);