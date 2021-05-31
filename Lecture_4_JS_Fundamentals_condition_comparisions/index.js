// Boolean values
let isSomeOneAStudent = false;
console.log("Type of isSomeOneAStudent is", typeof isSomeOneAStudent);
// if else block
if (isSomeOneAStudent) {
  console.log("Student should study with dedicataion");
} else {
  console.log(
    "A working profession should perform daily duties with complete dedication"
  );
}

let number = 5;
console.log("Type of", number, "is", typeof number);
if (number === 5) {
  const additionByThree = number + 3;
  console.log("Addition of", number, "with 3 is", additionByThree);
} else {
  console.log("Incorrect data recieved from server");
}

// Comparision Operators
let age = 21;
console.log("Comparision output", age > 21);
if (age > 21) {
  console.log(name, "has completed graduation");
} else if (age == 21) {
  // else if block
  console.log(name, "is pursuing his graduation");
} else {
  console.log(name, "has yet to complete his/her graduation");
}

let dayOfTheWeek = "Monday";
if (dayOfTheWeek == "Sunday") {
  console.log("This is a weekend");
} else if (dayOfTheWeek == "Wednesday") {
  console.log("This is a middle of the week");
} else if (dayOfTheWeek == "Monday") {
  console.log("This is a start of the week");
} else {
  console.log("This is a regular day of the week");
}
