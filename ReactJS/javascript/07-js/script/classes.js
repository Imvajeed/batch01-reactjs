class MyClass{

    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    
    hello() {
        console.log("Hello world",this.a+this.b);
    }
}

class SecondClass extends MyClass{
    constructor(a,b){
        super(a,b);

    }
    bye(){
        console.log("Bye, world");
    }
}


// let obj1 = new MyClass(20,30);

// console.log(obj.a);

let obj = new SecondClass(30,40);

obj.hello();

