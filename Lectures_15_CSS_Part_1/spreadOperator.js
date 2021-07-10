/**
 * Spread operator in Javascript
 */
/*
const evenNumbers = [2,4,6,8];
const oddNumbers = [1,3,5,7,9];
*/
/*
const naturalNumbers = evenNumbers.concat(oddNumbers);
*/
/*
const naturalNumbers = [0, ...evenNumbers, ...oddNumbers];
naturalNumbers.sort(function(a,b) {
  return a - b; // arranging elements in ascending order
});
console.log("naturalNumbers", naturalNumbers);
*/

/*
let numbers = [2,4,6,8];
let numbers2 = [...numbers];

console.log("numbers before splice", numbers);
console.log("numbers2 before splice", numbers2);

numbers.splice(0,2);

console.log("numbers after splice", numbers);
console.log("numbers2 after splice", numbers2);
*/

/*
const arr = ['a','b'];
const arr2 = ['z',...arr,'c','d'];
  
console.log(arr2);
*/

/*
let a,b,restOfTheNumbers;
const numbers = [10,20,30,40,50];
[a, b,c, ...restOfTheNumbers] = numbers;

console.log("elements of a", a);

console.log("elements of b", b);
console.log("elements of restOfTheNumbers", restOfTheNumbers);
*/
