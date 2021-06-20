// return value in functions
// function addTwoNumbers(firstNumber, secondNumber) {
//    const addition = firstNumber + secondNumber;
//    return addition;
// }
// const additionResult = addTwoNumbers(34,43);
// console.log("additionResult", additionResult);

/**
 * Q4. Ajay is given a series(In example).He went through the series but unable to understand
it properly,he has hired you.
Your task is to understand the series and print the series
2,6,12,20,30... .You are given a number ‘n’. Find the nth number of series.
 */
// function printNumberInSeries(n) {
//   const numberInSeries = Math.pow(n,2) + n;
//   return numberInSeries;
// }
// printNumberInSeries(100);

// JSON array

// array of objects
// const shopInventory = [
//   {
//     'fruitName':'apple',
//     'fruitQuantity': 6,
//     'rateOfTheFruit': 200
//   },
//   {
//     'fruitName':'banana',
//     'fruitQuantity': 10,
//     'rateOfTheFruit': 40
//   },
//   {
//     'fruitName':'kiwi',
//     'fruitQuantity': 12,
//     'rateOfTheFruit': 100
//   }
// ]
// console.log("first fruit name", shopInventory[0].fruitName);

// for(fruitIndex in shopInventory) {
//   console.log("fruitIndex", fruitIndex);
//   // console.log("shopInventory items", shopInventory[fruitIndex]);
//   // console.log("fruit name", shopInventory[fruitIndex].fruitName);
//   const currentObject = shopInventory[fruitIndex];
//   for(fruitObjectKey in currentObject) {
//     console.log("fruitObjectKey", fruitObjectKey);
//     console.log("fruitObjectValue", currentObject[fruitObjectKey]);
//   }
// }

// const vegetables = [
//   {
//     'vegetableName':'spinach',
//     'vegetableQuantity': 6,
//     'rateOfTheVegetable': 200
//   },
//   {
//     'vegetableName':'potato',
//     'vegetableQuantity': 6,
//     'rateOfTheVegetable': 200
//   },
//   {
//     'vegetableName':'tomato',
//     'vegetableQuantity': 6,
//     'rateOfTheVegetable': 200
//   },
// ];

// for(let vegetableElementIndex in vegetables) {
// console.log("outer for loop");
// console.log("vegetableElementIndex or object position", vegetableElementIndex);
// // console.log("vegetableElement",vegetables[vegetableElementIndex]);
// let vegetableInfo = vegetables[vegetableElementIndex];
// for(let vegetableKey in vegetableInfo) {
//   console.log("inner for loop");
//   console.log("vegetableKey", vegetableKey);
//   console.log("vegetableValue", vegetableInfo[vegetableKey]);
// }
// }

// for(let i=0;i<3;i++){
//   console.log("i value", i);
//   console.log("outer for loop");

//   for(let j=0;j<3;j++) {
//     console.log("inner for loop");
//     console.log("j value", j);
//   }
// }

// const vegetableInfo = {
//     'vegetableName':'spinach',
//     'vegetableQuantity': 6,
//     'rateOfTheVegetable': 200
// }

// for(let vegetableKey in vegetableInfo) {
//   console.log("vegetableKey", vegetableKey);
//   console.log("vegetableValue", vegetableInfo[vegetableKey]);
// }

// this keyword
// global context
// console.log("this value", this);
// this.alert("asdfasdf");

// function marveCharacterInfo() {
//   // local context
//   console.log("this value within the function", this);
// }
// marveCharacterInfo();

// global
// const marvelCharacters = {
//   'name':'Captain America',
//   'personName': 'Steve Rogers',
//   'friends': ['Winter Soldier', 'Falcon'],
//   'marveCharacterInfo': function() {
//     console.log("this keyword", this);
//     console.log("marvelCharacters", marvelCharacters);
//     console.log("name", this.name);
//     console.log("personName", this.personName);
//     console.log("friend", this.friends);
//   }
// }

// marvelCharacters.marveCharacterInfo();

// const marvelCharacters = {
//   'name':'Spider Man',
//   'personName': 'Peter Parker',
//   'friends': ['Iron Man', 'Mary Jane'],
//   'marveCharacterInfo': function() {
//     console.log("second friend of Spider Man",this.friends[1]);
//   }
// }
// marvelCharacters.marveCharacterInfo();

// map,reduce and filter

// const numbers = [1,2,3,4,5];

// const numbersSquared = [];
// for(let number of numbers) {
//   // console.log("number", number);
//   const squaredNumber = Math.pow(number, 2);
//   // console.log("square of each number", squaredNumber);
//   numbersSquared.push(squaredNumber);
// }
// console.log("numbers", numbers);
// console.log("numbersSquared", numbersSquared);

// console.log("numbers", numbers);

// function getSquaredValue(number, index) {
//    console.log("number passed", number);
//    console.log("index value", index);
//    return Math.pow(number,2);
// }

// function getCubeValue(number, index) {
//    console.log("number passed", number);
//    console.log("index value", index);
//    return Math.pow(number,3);
// }

// const squaredValues = numbers.map(getSquaredValue);
// const cubeValues = numbers.map(getCubeValue);
// console.log("squaredValue", squaredValues);
// console.log("cubeValues", cubeValues);

// const numbers = [1,2,3,4,5];

// const squaredValues = numbers.map(function (number, index) {
//   return Math.pow(number,2);
// });

// const cubeValues = numbers.map(function(number) {
//   return Math.pow(number,3);
// });

// console.log("squaredValues", squaredValues);
// console.log("cubeValues", cubeValues);

const numbers = [1, 2, 3, 4, 5];
// let sumOfAllElements = 0;
// for(let number of numbers) {
//   console.log("number value", number);
//   sumOfAllElements = sumOfAllElements + number;
// }
// console.log("sumOfAllElements", sumOfAllElements);

function sumOfElements(sum, number) {
  return sum + number;
}
// reduce
const sumOfAllElements = numbers.reduce(sumOfElements, 0);
console.log("sumOfAllElements", sumOfAllElements);

const sumUsingSecondVariation = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log("sumUsingSecondVariation", sumUsingSecondVariation);
