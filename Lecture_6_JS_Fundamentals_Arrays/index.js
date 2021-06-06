// replace method
// const studentName = `John Stark`;
// const updatedStudentName = studentName.replace("Stark","Smith");
// console.log(`updatedStudentName value ${updatedStudentName}`);

// const visit = `Please learn from online lectures`;
// const updatedVisit = visit.replace("online", "offline");
// console.log(`updatedVisit value ${updatedVisit}`);

// substring
// const dayValue = `Today is Sunday`;
// const todayValue = dayValue.substring(0,5);
// console.log(`substring value ${todayValue}`);

// const monthValue = `The current month is June`;
// const theValue = monthValue.substring(monthValue.length-4,monthValue.length);
// console.log(`substring value ${theValue}`);

// uppercase/lowercase
// const fruit = `apple`;
// const capitalizeFruit = fruit.toUpperCase();
// console.log(`capitalized value is ${capitalizeFruit}`);

// const vegetable = `spinach`;
// const capitalizeVegetable = vegetable.toUpperCase();
// console.log(`capitalized value is ${capitalizeVegetable}`);

// const icecream = `ButterScotch`;
// const lowercasedIcecream = icecream.toLowerCase();
// console.log(`lowercased value is ${lowercasedIcecream}`);

// const toy = `HotWheels Car`;
// const lowerCaseToy = toy.toLowerCase();
// console.log(`lowercased value is ${lowerCaseToy}`);

// concat
// const firstName = "Arjun";
// const lastName = "Ranawat";
// const fullName = `${firstName} ${lastName}`;
// const fullName2 = firstName.concat(" ",lastName);
// const fullSentence = fullName2.concat(" is a good student", ". He studies seriously");
// console.log(`fullSentence value ${fullSentence}`);

// const name = `John`;
// const lastName = `Smith`;
// const fullName = name.concat(" ", lastName);
// console.log(`fullName value ${fullName}`);

// undefined
// let x;
// console.log("Value of variable is", typeof x)

// null
// let shirt = null;
// console.log("type of value", typeof shirt);
// console.log("value of shirt is", shirt);

// request is compelted
// shirt = "Raymond";
// console.log("updated value of shirt is", shirt);

// arrays
// const fruitsArray = ["apple", "banana", "orange", "watermelon", "muskmelon"];

// console.log(`fruitsArray value ${fruitsArray}`);
// const firstValue = fruitsArray[0];
// console.log(`First fruit in array is ${firstValue}`);

// const vegetablesArray = ["spinach", "tomatoes", "potato", "coriander", "ginger"];
// const secondValue = vegetablesArray[1];
// console.log(`Second value in vegetablesArray is ${secondValue}`);

// length
// console.log(`Length of fruits array is ${fruitsArray.length}`);
// console.log(`Length of vegetable array is ${vegetablesArray.length}`);

// push method
// fruitsArray.push("Kiwi");
// console.log(`Updated value of fruitsArray is: ${fruitsArray}`);

// vegetablesArray.push("cabbage");
// console.log(`Updated value of vegetablesArray is: ${vegetablesArray}`);

// pop method
// fruitsArray.pop();
// console.log(`current value of fruitsArray after removal: ${fruitsArray}`);
// const removedValue = vegetablesArray.pop()
// console.log(`Value of vegetables array after removal is:  ${vegetablesArray}`);
// console.log(`Removed value is ${removedValue}`);

// unshift
// fruitsArray.unshift("pineapple");
// console.log(`Updated value of fruits array is ${fruitsArray}`);

// vegetablesArray.unshift("beetroot");
// console.log(`Updated value of vegetables array is ${vegetablesArray}`);

const fruitsArray = ["apple", "banana", "orange", "watermelon", "muskmelon"];

// replacing values
// fruitsArray[0] = "strawberry";

// console.log(`updated value of fruits array is ${fruitsArray}`);

// const vegetablesArray = ["spinach", "tomatoes", "potato", "coriander", "ginger"];
// vegetablesArray[1] = "cabbage";
// console.log(`updated value of vegetablesArray is ${vegetablesArray}`);

// slice method
// const subArray = fruitsArray.slice(0,2);
// console.log(`Sub array value ${subArray}`);

// const vegetableSubArray = vegetablesArray.slice(0,3);
// console.log(`Sub array for vegetable ${vegetableSubArray}`)

// splice method
// inserting values at an index
// fruitsArray.splice(1,0,"Kiwi","grapes");
// console.log(`updated array value ${fruitsArray}`);

// removal using splice method
// console.log(`original value of array: ${fruitsArray}`);
// fruitsArray.splice(1,2,"Kiwi");
// console.log(`updated array value: ${fruitsArray}`);

// fruitsArray.splice(1,2,"Kiwi", "grapes");
// console.log(`updated array value: ${fruitsArray}`);

// const basket = ['apple','banana','cabbage','potato'];
// console.log("basket", basket);
// basket.splice(1,0,"grapes");
// console.log("updated basket", basket);

// const vegetablesArray = ["spinach", "tomatoes", "potato", "coriander", "ginger"];
// console.log("original array", vegetablesArray);
// // ["spinach", "beetroot", "tomatoes", "potato", "coriander", "ginger"];
// vegetablesArray.splice(1,0,"beetroot");
// console.log("updatedArray", vegetablesArray);

// const basket = ['apple','banana','cabbage','potato'];
// console.log("basket",basket);
// basket.splice(2,0,"beet");
// console.log(`the updated basket is ${basket}`);
