//for loops
for (let i = 0; i < 5; i++) {
  console.log("For Loop iteration: " + i);
}

//nested for loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log("Nested For Loop iteration: i=" + i + ", j=" + j);
  }
}

//while loops
let count = 0;
while (count < 5) {
  console.log("While Loop count: " + count);
  count++;
}

//while loop with break
let num = 0;
while (true) {
  if (num >= 3) {
    break;
  }
  console.log("While Loop with Break num: " + num);
  num++;
}
