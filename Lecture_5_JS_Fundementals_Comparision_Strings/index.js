// comparision operator
// const age = 18;
// console.log("Type of", typeof age);
// if(age !== 18) {
//   console.log("If condition was executed");
//   console.log("String Value is not equal to numeric 18 value");
// } else {
//   console.log("Else condition was executed")
//   console.log("Value is equal to numeric 18");
// }

// if(age >= 18) {
//   console.log("Person is an adult");
// } else {
//   console.log("Person is not an adult");
// }

// logical operator
// const x = 5;
// const y = 15;

// if(x<10 && y>9) {
//   console.log("Test was passed");
// } else {
//   console.log("Test failed");
// }

// const x = 10;
// const y = 20;

// if(x<10 && y>15) {
//   console.log("Test was passed");
// } else {
//   console.log("Test failed");
// }

// const x = 5;
// const y = 20;
// if(x<8 && y>18) {
//   console.log("or test passed");
// } else {
//   console.log("or test failed");
// }

// const x = 22;
// const y = "0";
// if(x<20 || y==0) {
//   console.log("or test passed");
// } else {
//   console.log("or test failed");
// }

// const x = 5;
// const y = 5;
// if(x<8 && (y>18 || y==0) ) {
//   console.log("combined test passed");
// } else {
//   console.log("combined test failed");
// }

// Strings
// const firstName = "Joe";
// const lastName = "Smith";
// console.log(typeof name);
// console.log(firstName,lastName,"is a good student");

// const firstName = `James`;
// const lastName = `Stark`;
// const branch = `Computer Science`
// const fullsentence = firstName+" "+ lastName + " is a good student and "+firstName+" is learning "+branch;
// console.log("fullsentence:", fullsentence);
// const sentenceUsingLiterals = `${firstName} ${lastName} is a good student and ${firstName} is learning ${branch}`;
// console.log("sentenceUsingLiterals:",sentenceUsingLiterals);

// const studentName = `Steve Smith`;
// console.log(`Student name is ${studentName}`);

// const studentName = `John`;
// const age = 18;
// console.log(`${studentName} is ${age} years old`);

// String methods
// const studentName = `John Smith`;
// const length = studentName.length;
// console.log(`length of studentName variable is ${length}`);

// const employeeName = `Ramesh`;
// console.log(`length of employeeName variable is ${employeeName.length}`);

// const positionOfRLetter = employeeName.indexOf("R");
// console.log(`position of characted R in employeeName variable is ${positionOfRLetter}`);

// const positionOfMLetter = employeeName.indexOf("m");
// console.log(`position of characted m in employeeName variable is ${positionOfMLetter}`);

// const student = `Sam Smith`;
// const indexOfSLetter = student.indexOf(`Z`);
// const indexOfSecondSLetter = student.lastIndexOf(`S`);
// console.log(`index of character S in student variable is ${indexOfSLetter}`);

// console.log(`index of last character S in student variable is ${indexOfSecondSLetter}`);

// charAt
const component = `RAM`;
// const indexOfLetterM = component.indexOf(`M`);
// console.log(`index of character M in component variable is ${indexOfLetterM}`);
// const charAtIndexZero = component.charAt(0);
// console.log(`character at index 0 in component variable is ${charAtIndexZero}`);
// const characterAtIndexOne = component.charAt(1);
// console.log(`character at index 1 in component variable is ${characterAtIndexOne}`);
const index = 0;
const characterAtIndex = component.charAt(index);
console.log(
  `character at ${index} in component variable is ${characterAtIndex}`
);
