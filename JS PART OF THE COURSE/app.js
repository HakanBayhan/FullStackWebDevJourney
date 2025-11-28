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
