//1
console.log("Hello, World!");

let a = 5;
let b = 7;
console.log(a + b);

let name = prompt("Введите ваше имя:");
console.log("Привет, " + name);

let n = 4;
console.log(n ** 2);

let num = -3;
if (num > 0) console.log("Положительное");
else if (num < 0) console.log("Отрицательное");
else console.log("Ноль");

let numbers = [2, 4, 6, 8];
console.log(numbers.length);

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

let x = 10;
console.log(x % 2 === 0 ? "Чётное" : "Нечётное");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let user = { name: "Uğur", age: 12, city: "Baku" };
console.log(user.name);
console.log(user.age);
console.log(user.city);

////2

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));

function average(arr) {
  let total = 0;
  for (let num of arr) total += num;
  return total / arr.length;
}
console.log(average([2, 4, 6, 8]));

let arr = [1, 2, 3, 4];
for (let item of arr) console.log(item);

arr.forEach((item, index) => console.log(index, item));

function strLength(str) {
  return str.length;
}
console.log(strLength("hello"));

function countVowels(str) {
  let vowels = "aeoёиуыэюя";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Привет")); // 2

let nums = [5, 12, -3, 8, 0];
console.log("Max:", Math.max(...nums));
console.log("Min:", Math.min(...nums));

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello"));// "olleh"

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

let day = 3;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Неверный день");
}

///3

function showArgs(...args) {
  console.log(args);
}
showArgs(1, "hi", true);

const square = (num) => num ** 2;
console.log(square(6));

function greet(name = "Гость") {
  console.log("Привет, " + name);
}
greet();
greet("Угур");

function varLetConstExample() {
  var x = 1; // function scope
  let y = 2; // block scope
  const z = 3;
  console.log(x, y, z);
}
varLetConstExample();

function sumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}
console.log(sumToN(10));

function scopeExample() {
  if (true) {
    var a = 1; // видна в функции
    let b = 2; // видна только внутри  if
  }
  console.log(a);
}
scopeExample();
