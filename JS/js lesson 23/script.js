class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Метод для тго чтобы  получить информацию о книге
  getInfo() {
    return `${this.title}, написанная ${this.author} в ${this.year} году.`;
  }
}

class Library {
  constructor() {
    this.books = [];  // Массив  хранения книг
  }

  // Метод для добавленя книг в библиотеку
  addBook(book) {
    if (!(book instanceof Book)) {
      throw new Error("Только объекты класса Book можно добавлять в библиотеку.");
    }
    this.books.push(book);
  }

  //  поиск книг по запросу (по названию или автору)
  findBooks(query) {
    return this.books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) || 
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  //  вывод информации о книгах
  listBooks() {
    if (this.books.length === 0) {
      return "Библиотека пуста.";
    }
    return this.books.map(book => book.getInfo()).join("\n");
    
  }
}

// Пример 

// Создание книг
const book1 = new Book("21 критическая ошибка в шахматах", "Максим Омариев", 2023);
const book2 = new Book("Война и мир", "Лев Толстой", 1869);
const book3 = new Book("1984", "Джордж Оруэлл", 1949);

// Создание библиотеки
const library = new Library();

// Добавление книг в библиотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Вывод всех книг
console.log(library.listBooks());

// Поиск книг 
console.log(library.findBooks("война"));
console.log(library.findBooks("Оруэлл"));
