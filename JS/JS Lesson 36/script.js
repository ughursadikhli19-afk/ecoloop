const car = {
  brand: "BMW X7",
  year: 2025
};

function getInfo() {
  console.log(`${this.brand} was created in ${this.year}`);
}

getInfo.call(car);



function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [6, 7, 67];

const result = multiply.apply(null, numbers);
console.log(result);





function createCounter(startValue) {
  let value = startValue;

  return function () {
    value += 1;
    return value;
  };
}

const counter1 = createCounter(67);
const counter2 = createCounter(52);

console.log(counter1());// 68
console.log(counter1()); // 69

console.log(counter2()); //53
console.log(counter2()); //54





function processUser(name, callback) {
  console.log(` user: ${name}`);

  setTimeout(() => {
    callback(name);
  }, 1000);
}

function onUserProcessed(name) {
  console.log(`User ${name} logged in successfully.`);
}

processUser("Ughur", onUserProcessed);





function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  await delay(1000);
  alert("Первый");

  await delay(1000);
  alert("Второй");
}

run();

