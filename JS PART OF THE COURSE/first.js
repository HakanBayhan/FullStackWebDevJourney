//starting with js
let me = 10;
let you = 20;

let us = me + you;

console.log(us);

//variables
let age = 25;
const pi = 10;
const hakan = 1000;
console.log(pi + hakan);

//math operations
let score = 5;
score += 5;
score -= 2;
score *= 2;
console.log(score);

//boolean
let isScoreHigher = true;
let isScoreLower = false;

//strings
let hakaninTipi = "yakışıklı";
let benimTipim = "çirkin        ";
console.log(hakaninTipi);
let shesaid = "i love 'you' baby";
console.log(shesaid);
console.log(pi + hakaninTipi); //"10yakışıklı"

//string indexing
console.log(shesaid[3]);
console.log(shesaid[10] + shesaid[11] + shesaid[12]);
console.log(shesaid.length);
let tipler = hakaninTipi + " ve " + benimTipim;
console.log(tipler);

// method
console.log(shesaid.toUpperCase());
console.log(benimTipim.trim());
console.log(benimTipim.trim().toUpperCase());

//indexOf
"hakan".indexOf("k"); //3
"hakan".indexOf("a"); //1
"hakan".indexOf("x"); //-1

//slice

"hakan başaran ,".slice(0, 5); //"hakan"
"hakan başaran ,".slice(6, 15); //"başaran"
"hakan başaran ,".slice(0, -2); //"hakan başaran"
"hakan başaran ,".slice(-9); //"başaran ,"

//replace
"hakan başaran ,".replace("hakan", "müslüm"); //"müslüm başaran ,"
"hakan başaran ,".replace("a", "e"); //"hekan başaran ,"

//repeat
"hakan ".repeat(3); //"hakan hakan hakan "
"haluk".repeat(2); //"halukhaluk"

//course question
const word = "skateboard";

let facialHair = word.slice(5, 10).replace("o", "e");
console.log(facialHair);

//null value

let loggedInUser = null;
let unloggedUser = null;

//math object
Math.Pı; //3.14
Math.round(3.7); //4
Math.floor(3.7); //3
Math.ceil(3.3); //4
Math.random(); //0-1 arasında rastgele sayı

//boolean logic
1 > 2; //false
2 >= 2; //true
3 < 4; //true
5 <= 4; //false
3 == 3; //true
4 != 4; //false

//console.log
console.log("Hello World"); //this is a log message
console.warn("This is a warning"); //this is a warning message
console.error("This is an error"); //this is an error message
alert("This is an alert"); //opens a popup in browser
prompt("What is your name?"); //opens a prompt in browser
prompt("What is your age?", "18"); //opens a prompt with default value
