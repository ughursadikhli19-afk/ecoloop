//base

// 1. Hello, World!
console.log("Hello, World!");

// 2. Сумма двух чисел
let a = 5,
  b = 7;
console.log(a + b);

// 3. Запрос имени
let name2 = prompt(" ваше имя:");
console.log(`Привет, ${name2}!`);

// 4. Квадрат числа
let n = 6;
console.log(n ** 2);

// 5. Проверка знака числа
let num = 0;
if (num > 0) console.log("Положительное");
else if (num < 0) console.log("Отрицательное");
else console.log("Ноль");

// 6. Длина массива
let arr = [2, 4, 6, 8];
console.log(arr.length);

// 7. Первый и последний элемент массива
console.log(arr[0], arr[arr.length - 1]);

// 8. Проверка чётности
let x = 9;
console.log(x % 2 === 0 ? "Чётное" : "Нечётное");

// 9. Цикл от 1 до 10
for (let i = 1; i <= 10; i++) console.log(i);

// 10. Объект user
let user = { name: "Ugur", age: 12, city: "Baku" };
console.log(user.name, user.age, user.city);

//middle
// 1. Функция суммы
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

// 2. Среднее значение массива
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(average([2, 4, 6]));

// 3. for...of
for (let item of arr) console.log(item);

// 4. forEach с индексом
arr.forEach((item, i) => console.log(i, item));

// 5. Длина строки
function strLen(str) {
  return str.length;
}
console.log(strLen("hello"));

// 6. Количество гласных
function countVowels(str) {
  const vowels = "аеёиоуыэюяaeiou";
  return [...str.toLowerCase()].filter((ch) => vowels.includes(ch)).length;
}
console.log(countVowels("Привет"));

// 7. Максимум и минимум
let nums = [5, 12, -3, 8];
console.log(Math.max(...nums), Math.min(...nums));

// 8. Переворот строки
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello"));

// 9. Палиндром
function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("level"));

// 10. День недели
let day = 5;
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
    console.log("Неверный номер");
}

//advanced

let numbers = [1, 5, 10, 15, 20, -3];

// 1. map (+2)
let plus2 = numbers.map((n) => n + 2);
console.log(plus2);

// 2. filter (только чётные)
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

// 3. reduce (сумма)
let total = numbers.reduce((a, b) => a + b, 0);
console.log(total);

// 4. find (первый > 10)
console.log(numbers.find((n) => n > 10));

// 5. some (есть отрицательные)
console.log(numbers.some((n) => n < 0));

// 6. every (все положительные?)
console.log(numbers.every((n) => n > 0));

// 7. sort (по возрастанию)
console.log([...numbers].sort((a, b) => a - b));

// 8. concat
let more = [100, 200];
console.log(numbers.concat(more));

// 9. includes
console.log(numbers.includes(10));

// 10. splice (удалить 2 элемента с индекса 3)
let arrCopy = [...numbers];
arrCopy.splice(3, 2);
console.log(arrCopy);
