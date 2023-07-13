/*
interface vs Type
*/
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
