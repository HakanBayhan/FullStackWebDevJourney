//getElementById()

const { createElement } = require("react");

//course question answer
const image = document.getElementById("unicorn");
const heading = document.getElementById("mainheading");

//getElementByTagName()
const imaga2 = document.getElementByTagName("h1");
const heading2 = document.getElementsByTagName("h2");

//getElementByClassName()
const image3 = document.getElementsByClassName("imagens");
const heading3 = document.getElementsByClassName("mean");

//querySelector()
const image4 = document.querySelector("p"); //ilk matchleşen p elementini verir

//querySelectorAll()
const image5 = document.querySelectorAll("p a"); // matchleşen bütün p elementi altındaki a elementlerini verir

//course question answer
const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector("input[type = 'checkbox']");

//.innerHtml & .innerText & .textContext
doneTodos = document.querySelectorAll(".done").innerHtml; //done classının html kodlarına erişiyoruz
doneTodos = document.querySelectorAll(".done").textContext; //done classının kodlarda kaydettiğimiz şekliyle içeriğini gösterir
doneTodos = document.querySelectorAll(".done").innerText; //done classının içeriğini compile edildiği şekilde gösterir

//course question answer
document.querySelectorAll("span").innerText = "Disgusting";

//attributes
document.querySelector("h1").class = "important_message"; //h1'In Class'ını değiştirdik
hakan = document.querySelector("h1");
hakan.id = "cool"; //önce cool olarak değiştiriyoum h1'ın id'sini
hakan.setAttribute("id", "not_cool"); //burada da id'yi not cool olarak değiştiriyorum

//course question answer
document.querySelector("img").src =
  "https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200";
document.querySelector("img").alt = "chicken";

//changing the styles
const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.border = "solid";
h1.style.fontFamily = "georgia";

//course question answer
const div = document.querySelector("#container");
div.style.textAlign = "center";
console.log(div);
document.querySelector("img").style.width = "150px";
document.querySelector("img").style.borderRadius = "50%";

//course question answer
const h1 = document.querySelectorAll("h1 span");
for (let i = 0; i < 7; i++) {
  h1[i].style.color = colors[i];
}

//adding and removing classes
const h2 = document.querySelector("h2");
h2.classList.add("purple");
h2.classList.remove("border");

//course question answer
const ulClassed = document.querySelectorAll(".highlights");
const ulUnClassed = document.querySelectorAll("ul li");
ulUnClassed.classList.add("color", "blue");
ulClassed.classList.add("color", "purple");

//parent elements
const firstBold = document.querySelector("b");
firstBold.firstChild; //ilk alt elementini returnler
firstBold.parentElement; //üst elementin returnler
firstBold.parentElement.parentElement.parentElement; //3.üst elementini returnler
firstBold.children; //bütün alt elementlerini bir array olarak returnler

//.createElement
for (let i = 0; i < 100; i++) {
  let something = [];
  something.push(createElement("button"));
  something[i].append("Merhaba");
  div.append(something[i]);
}
