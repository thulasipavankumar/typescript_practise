class Human{
     // by using public or private in the construct automatically properties  are created in the class 
     // and they can be using in the methods/functions down the line in the class
     constructor(public age:number,public name:string){}

     print():void{
        console.log(`name:${this.name} age:${this.age}`)
     }
}

class Bank{
    name:string =''
    constructor(name:string){
        this.name =name
    }
}

let me:Human = new Human(32,'Pavan Kumar Tulasi');
me.print();
let kbc:Bank = new Bank('KBC');
