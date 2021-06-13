// split method
// const sentence = `Apples Oranges Kiwi`;
// const sentenceIntoArray = sentence.split(" ");
// console.log("sentenceIntoArray:",sentenceIntoArray);
// const sentenceConstructedBack = sentenceIntoArray.join(" ");
// console.log("sentenceConstructedBack:",sentenceConstructedBack);

// const word = `John`;
// const wordIntoCharacter = word.split("");
// console.log("wordIntoCharacter", wordIntoCharacter);
// wordIntoCharacter[0] ="R";
// console.log("wordIntoCharacter", wordIntoCharacter);
// const wordJoinedAgain = wordIntoCharacter.join("");
// console.log("wordJoinedAgain", wordJoinedAgain);

// const vegetables = ["spinach", "tomatoes", "patatoes"];
// const vegetabalesString = vegetables.join(" and ");
// console.log("vegetabalesString", vegetabalesString);

// mod operator
// const number = 5;
// const isEven = number % 2;
// if(isEven === 0) {
//   console.log(`${number} is an even number`);
// } else {
//   console.log(`${number} is odd`);
// }
// ternary operator
/*"condition to evaluate"? "statement when condition is true":
"statement when condition is false" */

// (number%2 === 0) ? "Number is even" : "Number is odd";

// const age = 10;

// (age < 18)  ? "Person is a child":"Person is an adult";

// const integer = 9;

// Math.sqrt(9) === 3 ? "Number is a sqaure of 3" : "Number is not a sqaure of 3";

// console.log("artithmeticOperation", artithmeticOperation);

// functions in javascript
// const a = 5;
// const b = 6;
// const c = 10;
// const d = 12;
// function additionSubtraction(firstNumber, secondNumber) {
//   // code for this function
//   const addition = firstNumber + secondNumber;
//   console.log("Addition of the two numbers is", addition);

//   const difference = firstNumber - secondNumber;
//   console.log(`Difference between the two numbers is ${difference}`);
// }

// additionSubtraction(c, a);

// function multiplicationDivision(firstNumber, secondNumber) {
//   console.log(`multiplication of the two numbers is ${firstNumber * secondNumber}`);
//   console.log(`Division of the two numbers is ${firstNumber/secondNumber}`);
// }
// multiplicationDivision(a,b);

// artithmeticOperation -> parent or outer function
// additionSubtraction, multiplicationDivision => child or inner functions
// parent
// function arithmeticOperation(firstNumber, secondNumber) {
//   // children or inner functions
//   additionSubtraction(firstNumber, secondNumber);
//   multiplicationDivision(firstNumber, secondNumber);
// }
// arithmeticOperation(a,b);

// function to print square of a number
const a = 3;
// declare a function to print square of variable a
// function square(a) {
//   console.log(`Square of the number ${a} is ${Math.pow(a,2)}`);
// }
// square(a);

// function declaration types
// const variableName = function(inputs) {}
// const squareOfANumber = function(a) {
//   console.log(`Square of the number ${a} is ${Math.pow(a,2)}`);
// }
// squareOfANumber(a);

// const squareRootOfANumber = function(inputNumber) {
//   console.log(`Square root of the number ${inputNumber} is ${Math.sqrt(inputNumber)}`);
// };
// squareRootOfANumber(9);

// // Cube root of a number
// const cubeRootOfANumber = function(inputNumber) {
//   console.log(`cube root of ${inputNumber} is ${Math.cbrt(inputNumber)}`);
// }
// cubeRootOfANumber(27);
