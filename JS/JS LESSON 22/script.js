// 1. Площадь прямоугольника
const rectangle = {
  width: 75,
  height: 2,
  area() {
    return this.width * this.height;
  }
};

console.log( rectangle.area()); // 150


// 2. Среднее арифметическое 
const numbers = {
  values: [15, 82, 52, 67, 41],
  average() {
    const sum = this.values.reduce((a, b) => a + b, 0);
    return sum / this.values.length;
  }
};

console.log( numbers.average()); // 51.4


// 3. Процент от числа
const percentageCalculator = {
  number: 900,
  percent: 15,
  calculate() {
    return this.number * (this.percent / 100);
  }
};

console.log( percentageCalculator.calculate()); // 135


// 4. Конвертер валют
const converter = {
  usd: 1,
  eur: 0.86,
  convertToEur(amount) {
    return amount * this.eur;
  }
};

console.log( converter.convertToEur(100)); // 86


// 5. Факториал числа
const factorialCalculator = {
  number: 8,
  factorial() {
    let result = 1;
    for (let i = 1; i <= this.number; i++) {
      result *= i;
    }
    return result;
  }
};

console.log("Факториал:", factorialCalculator.factorial()); // 40320
