// Difference between splice and slice methods
// const fruits= ["apple", "banana", "orange", "watermelon", "muskmelon"];

// console.log(`First fruit in array ${fruits[0]}`);

// const subArray = fruits.slice(0,2);
// console.log(`subarray ${subArray}`);
// console.log("fruits array after slice",fruits);

// fruits.splice(0,2,"Kiwi");
// const subArray2 =
// console.log("fruits array after splice",fruits);

// console.log(`subArray2 ${subArray2}`);

// Objects in Javascript
// const appleInformation = ["apple",10,200];
// const nameOfTheFruit = "apple";
// const quantityAvailable = 20;
// const pricePerKg = 200;

// object declaration
// const fruitProperties = {
//   nameOfTheFruit: "apple",
//   quantityAvailable: 20,
//   pricePerKg: 200,
//   isAvailableToday: true
// }

// // accessing object properties
// const fruitName = fruitProperties.nameOfTheFruit;
// console.log(`The name of the fruit ${fruitName}`);

// console.log(`The quantity of ${fruitProperties.nameOfTheFruit}s available is ${fruitProperties.quantityAvailable}`);

// console.log(`The pricePerKg for fruits is ${fruitProperties.pricePerKg}`);

// if(fruitProperties.isAvailableToday) {
// console.log(`${fruitProperties.nameOfTheFruit}s are available today`);
// } else {
//   console.log(`Fruit is not available`);
// }

// accessing values using bracket notation
// const fruitProperties = {
//   nameOfTheFruit: "apple",
//   quantityAvailable: 20,
//   pricePerKg: 200,
//   isAvailableToday: true
// }
// const fruitName = fruitProperties["nameOfTheFruit"];
// console.log(`name of fruit using bracket notation is ${fruitName}`);

// const fruitNameUsingDotNotation = fruitProperties.nameOfTheFruit;
// console.log(`name of fruit using dot notation is ${fruitNameUsingDotNotation}`)
// console.log(`quantity available is ${fruitProperties["quantity Available"]}`)

// console.log(`price per kg ${fruitProperties.pricePerKg}`);

// Iterating over arrays in Javascript
// const fruits= ["apple", "banana", "orange", "watermelon", "muskmelon"];

// for in loop
// for(let index in fruits) {
//   console.log("index", index);
//   console.log("value", fruits[index]);
//   console.log(`Value at index ${index} is ${fruits[index]}`);
// }

// const vegetables = ["spinach", "beetroot", "potato"];
// for(let index in vegetables) {
//   console.log(`Value at index ${index} is ${vegetables[index]}`);
// }

// const studentDetails = {
//   "firstName": "John",
//   "secondName": "Doe",
//   "age": 23,
//   "branch": "Architechture"
// }

// for(let keyName in studentDetails) {
//   console.log(`key name ${keyName}`);
//   console.log(`values ${studentDetails[keyName]}`);
// }

// const fruitDetails = {
//   nameOfTheFruit: "apple",
//   quantityAvailable: 20,
//   pricePerKg: 200,
//   isAvailableToday: true
// }

// for(let keyName in fruitDetails) {
//   console.log(`Value for key ${keyName}`);
// }

// for loop in Javascript
// for of loop
// const fruits= ["apple", "banana", "orange", "watermelon", "muskmelon"];
// for(let fruitName of fruits) {
//   console.log(`current value ${fruitName}`);
// }

// for(let index in fruits) {
//   console.log(`current value ${fruits[index]}`);
// }

// console.log("array length", fruits.length);

// for with variables
// for("initial value"; "range of variable"; "increment in between")
// for(let index = 1; index<=9; index=index+1){
//   console.log("index", index);
// }

// let number = 9;
// post increment: post the execution of current statement
// console.log("result of post increment", number++);
// console.log("current value of number", number);

// let number2=9;
// preincrement: before the execution of current statement
// console.log("result pre increment", ++number2);
// console.log("current value of number", number2);

// for(let index = 1; index<=9; index++) {
//   console.log("index", index);
// }

// const fruits= ["apple", "banana", "orange", "watermelon", "muskmelon"];

// for(let fruitIndex=2; fruitIndex<5;fruitIndex++) {
//   console.log(`fruitIndex ${fruitIndex}`);
//   console.log(`values ${fruits[fruitIndex]}`);
// }

// for(let fruitIndex=3; fruitIndex < fruits.length;fruitIndex++) {
//   console.log(`fruitIndex ${fruitIndex}`);
//   console.log(`values ${fruits[fruitIndex]}`);
// }

// const vegetables = ["spinach", "beetroot", "potato"];

// for(let vegetableIndex=1; vegetableIndex<vegetables.length; vegetableIndex++) {
//   console.log(`values ${vegetables[vegetableIndex]}`);
// }
