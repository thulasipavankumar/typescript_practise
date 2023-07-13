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

enum characters{
    Naruto,
    Sasuke,
    Itachi,
}


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

