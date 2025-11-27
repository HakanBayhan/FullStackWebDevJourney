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
