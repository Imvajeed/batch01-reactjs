console.log("Script kiddie");

// let objPost = {
//     method: 'POST',
//     body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//     'host': '127.0.0.1',
//   },
// }


let url = "https://jsonplaceholder.typicode.com/users"

async function getData(url) {
    let data = await fetch(url);
    return data;
}



getData(url).then((response)=>{
    try{
        return response.json();
    }catch(e){
        return e;
    }
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
    console.log("I am catch");
})


console.log("End of the line")