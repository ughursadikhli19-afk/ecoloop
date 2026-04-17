// 1. Факториал
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 2. Проверка на чётность
function isEven(num) {
  return num % 2 === 0;
}

// 3. Подсчёт количества букв "а" в строке
function countA(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (char === 'а') count++;
  }
  return count;
}

// 4. Сумма элементов массива
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// 5. Генератор случайного пароля
function generatePassword(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
