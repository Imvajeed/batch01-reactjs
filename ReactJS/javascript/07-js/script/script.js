// console.log("Script Kiddie");


let sumOfTwo = ()=>{
    console.log("I am a function");
}

sumOfTwo()


let obj = {
    name: "Script Kiddie",
    videos:["Cyber security","Ethical hacking","Development"],
    weDo:()=>{
        console.log("Uploads infoTech videos");
        return 1;
    }

}

console.log(obj.name);
console.log(obj.videos);

obj.videos.forEach(element => {
    console.log(element);
});

console.log(obj.weDo());
