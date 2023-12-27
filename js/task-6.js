console.log("Завдання 6");

let input;
let total = 0;

do {
  input = prompt("Введіть число:");
  if (input !== null) {
    if (!isNaN(input)) {
      total += Number(input);
    } else {
      alert("Це не число!");
    }
  }
} while (input !== null);

alert("Сума чисел дорівнює " + total);

console.log("\n");
