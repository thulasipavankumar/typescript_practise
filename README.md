## Typescript

### Primitive Types
- String `let movieTitle: string  = "Her"`
- Number `let age: number = 32;`
- boolean

```typescript

"use strict";
let age: number = 32;

let isAlive: boolean = true;

let firstName:string = "Naruto";

let arr: Array<number>;

arr=[1,2,3,4];


let jsonData:any ="{}"


//delayed initialization  (similar to any)
let cars: string[];

const enum FuelType{
    Petrol,
    LPG,
    CNG,
    Diesel,
    Electric
}
type character = "protagonist"|"antagonist"|"companion"|"stranger"

let naruto : character = "protagonist"
let kaguya : character = "antagonist"

console.log(` naruto is ${naruto} kaguya is ${kaguya}`) 

```
### Functions
```typescript
// functions

const greet = (name:string) => {
    console.log("Hello "+name)
}

greet("Naruto")

//default parameters
const printSquare = (num:number =0 ) => {
    console.log( num*num)
}

// function return types

const add = (a:number,b:number ):number => {
    return a+b
}

//anonymous functions and contextual typing 
const numbers = [1,2,3]

numbers.map(x=>x+2)
```
### Optional Parameters
```typescript
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

### destructuring
```typescript
let o = {
  a: "foo",
  b: 12,
  c: "bar",
};
let { a, b } = o;
```
### interface
```typescript
const enum FuelType{
    Petrol,
    LPG,
    CNG,
    Diesel,
    Electric
}
interface car{
    engine: string,
    fuel: FuelType,
    yearOfManufacture:number,
    modelName:string,
    description?:string
}
let kiaPicanto:car = {
    engine:"998 cc",
    fuel:FuelType.Petrol,
    yearOfManufacture:2021,
    modelName:"Picanto",
    description:"The Kia Picanto is a city car that has been produced by the South Korean car manufacturer, Kia, since 2003" 
}
```

### class
- **Abstract class** will not allow to create a instance for it
- constructor field with private/public modifiers will create the same fields in the class `refer to the class Human below`
```typescript
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
```

### Generics
```typescript
function printData<T>(data: T) {
    console.log("data: ", data);
}

printData(2);
printData("hello");
printData(true);

interface UserData<X,Y> {
    name: X;
    rollNo: Y;
}

const user: UserData<string, number> = {
    name: "Naruto",
    rollNo: 1
}
```
