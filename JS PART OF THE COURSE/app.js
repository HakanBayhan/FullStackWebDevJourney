let num = 10;

if (num % 2 === 0) {
  console.log("even");
}

const childAge = 10;
if (childAge < 10) {
  console.log("there will be no child support");
} else if (childAge >= 10 && childAge <= 18) {
  console.log("child support is 100$");
} else {
  console.log("child support is 500$");
}

const workDay = "Monday".toLowerCase();

if (workDay === "monday") {
  console.log("plan course structure");
} else if (workDay === "tuesday") {
  console.log("prepare theory videos");
} else if (workDay === "wednesday" || workDay === "thursday") {
  console.log("write code examples");
} else if (workDay === "friday") {
  console.log("record videos");
} else {
  console.log("enjoy the weekend :D");
}

let phrase = "green";
if (phrase.toLowerCase() === "stop") {
  console.log("red");
} else if (phrase.toLowerCase() === "slow") {
  console.log("yellow");
} else if (phrase.toLowerCase() === "go") {
  console.log("green");
} else {
  console.log("purple");
}

//nested if else statements
const age = 25;
if (age >= 18) {
  if (age <= 65) {
    console.log("you are eligible to work");
  } else {
    console.log("you should be retired");
  }
} else {
  console.log("you are not eligible to work");
}

//logical operators
const hasDrivingLicense = true;
const hasGoodVision = false;
if (hasDrivingLicense && hasGoodVision) {
  console.log("you are able to drive");
} else {
  console.log("someone else should drive");
}

const mystery = "Piscologia7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}

//switch statement
const sandwich = 2;
switch (sandwich) {
  case 1:
    console.log("You ordered a ham sandwich");
    break;
  case 2:
    console.log("You ordered a turkey sandwich");
    break;
  case 3:
    console.log("You ordered a veggie sandwich");
    break;
  default:
    console.log("Unknown sandwich order");
}

//JS arrays
let fruits = ["apple", "banana", "orange"];
fruits[1] = "grape"; //change banana to grape
fruits.push("kiwi"); //add kiwi to the end
fruits.pop(); //remove the last element
fruits.unshift("mango"); //add mango to the beginning
fruits.shift(); //remove the first element

//concat
let vegetables = ["carrot", "broccoli", "spinach"];
let food = fruits.concat(vegetables);
console.log(food);

//indexof
console.log(food.indexOf("banana")); //1
console.log(food.indexOf("potato")); //-1

//includes
console.log(food.includes("orange")); //true
console.log(food.includes("potato")); //false

//reverse
food.reverse(); //reverses the array
console.log(food); //logs the reversed array

//slice
let someFood = food.slice(1, 4); //creates a new array from index 1 to 3
console.log(someFood); //logs the new array

//splice
food.splice(2, 1); //removes 1 element at index 2
console.log(food); //logs the modified array

//sort
food.sort(); //sorts the array alphabetically

//nested arrays
let nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false],
];
console.log(nestedArray[1][0]); //logs "a"

// Key value pairs in objects

let person = {
  name: "John",
  age: 30,
  isEmployed: true,
  1999: "year of birth", //all keys are converted to strings
  hobbies: ["reading", "traveling", "swimming"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
console.log(person.name); //logs "John"
console.log(person["age"]); //logs 30
console.log(person.hobbies[1]); //logs "traveling"

//course quiz question answer
let fullAddress =
  restaurant.address +
  "," +
  restaurant.city +
  ", " +
  restaurant.state +
  restaurant.zipcode;

//changing values
person.age = 31; //changes age to 31
