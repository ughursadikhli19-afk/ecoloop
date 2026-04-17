
//  1

const person = {
  name: "Угур",
  age: 37,
  isStudent: true,

  introduce() {
    const status = this.isStudent ? "являюсь студентом" : "не являюсь студентом";
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет и я ${status}.`);
  }
};

person.introduce();



//  2

function updateAge(obj) {
  obj.age += 1;
}

updateAge(person);
console.log("После увеличения возраста:", person);



// 3

const book = {
  title: "JavaScript Basics",
  author: "Гаджимурад",
  year: 2025,
  isAvailable: true
};

console.log("Свойства книги:");
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}


// ЗАДАЧА 4:

const user = {
  name: "Шахмар",
  address: {
    city: "Baku",
    country: "Azerbaijan"
  }
};

function printAddress(userObj) {
  console.log(`Адрес: ${userObj.address.city}, ${userObj.address.country}`);
}

printAddress(user);



// 5:

const student = {
  name: "Гаджимурад",
  age: 17,
  course: "Frontend Development"
};

function removeCourse(obj) {
  const newObj = { ...obj };
  delete newObj.course;
  return newObj;
}

const updatedStudent = removeCourse(student);
console.log("Студент без course:", updatedStudent);
console.log("Оригинальный студент:", student);