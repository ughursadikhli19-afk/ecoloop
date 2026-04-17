//1
const person = {
  firstName: "Ugur",
  lastName: "Sadikhli",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

//2
const car = {
  brand: "BMW❤️",
  model: "M5",
  info() {
    return `Машина: ${this.brand} ${this.model}`;
  },
};
console.log(car.info());

//3
const user = { 
  name: "Гаджи"
 };

user.sayHello = function () {
  console.log(`Hello, ${this.name}`);
};
user.sayHello();

//4
const laptop = { brand: "Asus❤️", price: 2500, cpu: "i8" };
const values = Object.values(laptop);
console.log(values);

//5
const json = JSON.stringify(laptop);
console.log(json);

//6 🤷 7(vmeste))
const student = {
  language: "english",

  get lang() {
    return this.language.toUpperCase();
  },

  set lang(value) {
    this.language = value;
  },
};

console.log(student.lang); // english → ENGLISH
student.lang = "russian";
console.log(student.language); // russian

//8
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = new Person("Jasmin❤️", 2);
console.log(p);

//9
Person.prototype.info = function () {
  return `${this.name}, ${this.age} years old`;
};
console.log(p.info());

//10
const settings = { theme: "dark", version: 1 };
Object.freeze(settings);

settings.theme = "light"; // не изменится
console.log(settings);
console.log(Object.isFrozen(settings));
