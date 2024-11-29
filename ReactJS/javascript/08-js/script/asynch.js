console.log("First line");

function one(){
    setTimeout(()=>{
        console.log("Hello, world");
    },2000);

}
console.log("Second line");
async function two() {
    let a = await fetch("http://127.0.0.1:5500/index.html");
    one();
    console.log(a);

}

two();

console.log("Third line");


