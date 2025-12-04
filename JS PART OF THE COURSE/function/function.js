let myname = "John";
let mysurname = "Doe";

function name(fullname) {
  let fullname = myname + " " + mysurname;
}

console.log(`My name is: ${fullname}`);

//course question answer
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase() + "!");
  }
}

//course question answer
function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

//course question answer
function multiply(x, y) {
  return x * y;
}

//course question answer
function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

//course question answer
function lastElement(array) {
  if (array.length === 0) {
    return null;
  } else {
    return array[array.length - 1];
  }
}

//course question answer
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

//course question answer
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

//course question answer
function returnDay(number) {
  if (number > 7 || number < 1) {
    return null;
  } else
    switch (number) {
      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      case 7:
        return "Sunday";
    }
}

//scope
let bird = "mandarin duck";
function birdWatch() {
  let bird = "golden pheasant";
  console.log(bird);
}
birdWatch(); // golden pheasant
console.log(bird); // mandarin duck

/*course question answer
const square = function (num) {
  return num * num;
};
*/

//course question answer
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

//this keyword
const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOWWWWW`); //this refers to the object
  },
};
cat.meow();

//course question answer
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

//Try Catch
try {
  hello.toUpperCase();
} catch {
  console.log("ERRORRRR");
}

//foreach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (el) {
  console.log(el * el);
});

//map
const doubles = numbers.map(function (el) {
  return el * 2;
});
console.log(doubles);
//course question answer

const firstNames = fullNames.map(function (fullName) {
  console.log(fullName.first);
});

//arrow functions
const add = (x,y) => {
  return x + y;
};
const mutliply = (x,y) =>{
  return x * y
};
const nevermindnumber = (mi, mo) => {
  return mi + (mo * 2) - 10 * 5;
}

//course question answer
const greet = (firstname) =>{
  return "Hey " + firstname + "!";
}

//setInterval
const id = setInterval(() => {
  console.log("HELLO");
}, 5000);

//course question answer

const usernames = ["hakan", "SLŞDGMŞSLDAGŞLŞSDAMGŞLSDG"];

function validUserNames(usernames) {
  return usernames.filter((n) => n.length < 10);
}
validUserNames();

//every method
const mosts = ["75","80","90","80",]

mosts.every(most => most >= 75)

//some method 
const sayılar = ["10","100","1000"]

sayılar.every(sayı => sayı <= 10)

//course question answer 
function allEvens(xs){
   return xs.every(x => x % 2 == 0)
}

//reduce method 

const prices = [
  "9.99",
  "1.50",
  "19.90",
  "49.99",
  "30.50"
];

const total = prices.reduce((total,price) => {
  return total + price
})





