// reduce method
// const numbers =[1,2,3,4,5];

/*
const sumOfElements = numbers.reduce(function(sum, number){
  return sum = sum+number;
},0);
console.log("sumOfElements",sumOfElements);
*/
/*
const productOfElements = numbers.reduce(function(product, number){
  return product = product * number;
},1);
*/
// arrow notations
/*
const squareOfAllElements = numbers.map((number) => {
  return Math.pow(number,2);
});
console.log("squareOfAllElements", squareOfAllElements);

const productOfElements = numbers.reduce((product, number) => {
  return product = product * number;
},1);
console.log("productOfElements",productOfElements);
*/

// first way of writing functions
/*
function sumOfNumbers(a, b) {
  return a + b;
}
*/

// second way of writing functions
/*
const sumOfNumbers = function(a,b) {
  return a + b;
}
*/

// third way of writing functions
/*
const sumOfNumbers = (a,b) => {
  return a + b;
}
*/

// console.log("sumOfNumbers",sumOfNumbers(2,3));

// second way
/*
const productOfNumbers = function(a,b) {
  return a*b;
}
*/

/*
const productOfNumbers = (a,b) => {
  return a*b;
}
*/

// console.log("productOfNumbers", productOfNumbers(2,3));

// filter method
// const numbers = [1,2,3,4,5,6];

/*
function checkIfEven(number) {
  return number % 2 === 0;
}
*/

// const evenValues = numbers.filter(checkIfEven);
// console.log("evenValues", evenValues);

/*
const oddValues = numbers.filter((number) => {
  return number % 2 === 1;
});
*/

// console.log("oddValues", oddValues);

// forEach
// let sum = 0;
/*
const sumOfElements = numbers.forEach(function(number){
 sum = sum + number;
});
*/
// let sumOfElements = 0
// numbers.forEach((number)=>{
//   sumOfElements = sumOfElements + number;
// });
// console.log("sumOfElements", sumOfElements);

// difference between map,reduce and filter
/*
const numbers = [1,2,3,4,5,6];
console.log("original array", numbers);
const squareOfAllElements = numbers.map((number) => {
  return Math.pow(number,2);
});
console.log("result of map", squareOfAllElements);

const sumOfElements = numbers.reduce(function(sum, number){
  return sum = sum+number;
},0);
console.log("result of reduce",sumOfElements);

const oddValues = numbers.filter((number) => {
  return number % 2 === 1;
});
console.log("result of filter", oddValues);
*/
