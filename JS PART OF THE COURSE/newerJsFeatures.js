//Default Params
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function rollDontDie(numSides, sides = 10) {
  return Math.floor(Math.random() * numSides) + 1;
}

//Spread in Function Call
let names = ["şaban", "ahmet", "mehmet", "necmi"];
let numbers = ["10", "20", "20", "30"];
console.log(Math.max(numbers)); //this logs us NAN because the values are not spreaded
console.log(Math.max(...numbers)); //this logs us 30

//Spread with array literals
let differentNumbers = [...numbers]; //numbers arrayindeki elemanları diffirentNumbers arrayine yazdım
let turkishNumbers = [...numbers, "Hakan", "Karışık"]; //numbers'ın elemanlarını ve ekstradan başka eklemek istediğim elemanları atadım.
let numbersAndCharacters = [...numbers, ...names]; //iki tane arrayin elemanlarını tek bir arraye atıyorum

//Spread In Objects
let quizResults = {
  Hakan: "77",
  Güngör: "72",
  Selami: "15",
};
let quiz2Results = {
  Fatma: "55",
  Hasan: "100",
  Akın: "36",
  Güngör: "55", //eğer aynı değeri 2 defa girersem atamayı yaparken hangi değer sonra geliyorsa o değeri alır
};

let allQuizResults = { ...quizResults, ...quiz2Results }; //allQuizResults diye bir object oluşturdum ve ona 2 objectin değerlerini atadım
console.log(allQuizResults);

//Rest
function toplama(...sayılar) {
  return console.log(sayılar.reduce((total, el) => total + el));
}

toplama(1, 2, 3, 4, 5); //çıktı 15 olacak verilen değerlere göre çıktı da değişir.

function gethering(greeting, name, ...theOnesToTalk) {
  console.log(`${greeting} everyone!`);
  console.log(name + " how are u?");
  console.log(theOnesToTalk);
}
gethering("hello", "hakan", "sami,ahmet", "mehmet", "özgür");

//Array Destructuring
const scores = [10, 20, 30, 40, 50];

const [ahmet, mehmet, seçkin, sağdıç, kalbur] = scores;
console.log(ahmet);
const [selim, kumru, ...everyoneelse] = scores;
console.log(everyoneelse);

//Object Destructuring
const informations = {
  born: 1997,
  died: 2025,
  age: 28,
  borname: "hakan",
  job: "manken",
};

const { name: firstname, born, died } = informations;

//Param
const informations2 = {
  ad: "hakan",
  is: "işsiz",
};

function nameJob({ ad, is }) {
  return console.log(`onun adı ${ad}, ve o bir ${is}`);
}
nameJob(informations2); //informations2 yazarak objeyi belirtmeseydim çalışmazdı.


