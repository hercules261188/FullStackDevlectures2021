// var keyword
// var studentName = "Joe";
// console.log("Student name is", studentName);
// var studentName = "John";
// console.log("Student name now is", studentName);

// let studentAge = "22";
// console.log("Student\'s age is", studentAge);
// studentAge = "24";
// console.log("Student\'s age now is", studentAge);

// Numbers
// Integers
// const radius = 5;
// console.log("The radius of circle is",radius);
// const diameter = 2 * radius;
// console.log("The diameter of circle is", diameter);
// const pi = 3.14;
// let area = pi * radius * radius;
// console.log("The area of circle is", area);
// area = pi * Math.pow(radius, 2);
// console.log("The area of circle is", area);

// let negativeInteger = -1;
// console.log("Value of Integer is", negativeInteger);
// const squareRootOfNegativeInteger = Math.sqrt(negativeInteger);
// console.log("Square root of negative integer is", squareRootOfNegativeInteger);

// let squareValue = 9;
// let squareRootValue = Math.sqrt(squareValue);
// console.log("Square root value of",squareValue,"is", squareRootValue);
// squareValue = 16;
// squareRootValue = Math.sqrt(squareValue);
// console.log("Square root value of",squareValue,"is", squareRootValue);

// const cubeValue = 125;
// const cubeRootValue = Math.cbrt(cubeValue);
// console.log("Cube root of",cubeValue,"is", cubeRootValue);

// let circumference = Math.PI * 2 * radius;
// console.log("The circumference calculated using radius", circumference);
// circumference = pi * diameter;
// console.log("circumference using diameter", circumference);

// Decimals
// const eulerNumber = 2.71;
// console.log("The value of euler\'s number",eulerNumber);

// const base = 6.3;
// const height = 3.9;
// const area = (base * height) / 2;
// console.log("Area of triangle is",area);

// const integerValue = 3;
// const divideByZero = 3/0;
// const divideByString = integerValue/"string";
// console.log("Value after dividing by Zero", divideByZero);
// console.log("Value after dividing by emoji",divideByString);
//Arithmetic Operations
// const firstNumber = 7;
// const secondNumber = 8;
// const addition = firstNumber + secondNumber;
// console.log("The sum of two numbers is",addition);

// const firstNumber = "10";
// const secondNumber = 5;
// const addition = parseInt(firstNumber) + secondNumber;
// console.log("addition of the two numbers is",addition);

// const firstNumber = 3;
// const secondNumber = "14";
// const addition = firstNumber + parseInt(secondNumber);
// console.log("addition of the two numbers is",addition);

// const difference = firstNumber - secondNumber;
// console.log("difference between two numbers is",difference);
// const multiplication = firstNumber * secondNumber;
// console.log("multiplication of the two numbers is",multiplication);
// const division = firstNumber / secondNumber;
// console.log("division of the two numbers is",division);
//Infinity
// const age = 10;
// if(age>18){
//   console.log("User is an adult");
// } else {
//   console.log("User is not an adult");
// }

// const pi=3.14;
// if(pi>5){
//   console.log("Value is greater than 5");
// } else {
//   console.log("Value is less than 5");
// }

const pi = 3.14;
let radius = "5";
let area = pi * Math.pow(parseInt(radius), 2);
console.log(area);
