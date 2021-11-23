class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  toString() {
    let res = [];
    for (let i in this) res.push(this[i]);

    return res.join(" ");
  }
  isTheSameBook(book) {
    if (this.title == book.title && this.author == book.author)
      return "The same book";
    return "Different books";
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = bookId;
  }
  get bookId() {
    return this._bookId;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this.quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(q) {
    if (typeof q != "number") return "Wrong input for quantity";
    this._quantity = q;
  }
  set title(t) {
    if (typeof t != "string" || t == "") return "Wrong input for title";
    this._title = t;
  }
  set author(a) {
    if (typeof a != "string" || a == "") return "Wrong input for author";
    this._author = a;
  }
  set bookId(id) {
    if (typeof id != "number") return "Wrong input for id";
    this._bookId = id;
  }
  increaseQuantityBy(amount) {
    if (typeof amount != "number" || amount <= 0) return "Wrong input";
    this.quantity += amount;
    return this.quantity;
  }
  decreaseQuantityBy(amount) {
    if (typeof amount != "number" || amount <= 0) return "Wrong input";
    this.quantity -= amount;
    return this.quantity;
  }
}

class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this.bookId = bookId;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
  }
  get bookId() {
    return this._bookId;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  get isReturned() {
    return this._isReturned;
  }
  set bookId(id) {
    if (typeof id != "number") return "Wrong input for book id";
    this._bookId = id;
  }
  set expirationDate(date) {
    if (typeof date != "string" || date == "") return "Wrong input for date";
    this._expirationDate = date;
  }
  set isReturned(val) {
    if (typeof val != "boolean") return "Wrong input for isReturned";
    this._isReturned = val;
  }
}

class Reader {
  constructor(firstName, lastName, readerId, books = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.books = books;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    if (typeof name != "string" && name == "")
      return "Wrong input for firstName";
    this._firstName = name;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(surname) {
    if (typeof surname != "string" && surname == "")
      return "Wrong input for lastName";
    this._lastName = surname;
  }
  get readerId() {
    return this._readerId;
  }
  set readerId(id) {
    if (typeof id != "number") return "Wrong input for reader id";
    this._readerId = id;
  }
  get books() {
    return this._books;
  }
  set books(b) {
    if (!Array.isArray(b)) return "Wrong input for Books";
    this._books = b;
  }
  borrowBook(book, library) {
    if (!(book instanceof ReaderBook)) return "Invalid Book";
    if (!(library instanceof Library)) return "Library does not existe";
    this.books.push(book);
  }
}

class Library {
  constructor(books = [], readers = []) {
    this._books = books;
    this._readers = readers;
  }
  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  goHaveBook(requestedBook) {
    const books = this.books;
    if (books.find((el) => el == requestedBook)) return true;
    return false;
  }
  addBook(newBook) {
    if (!(newBook instanceof LibraryBook)) return "Invalid book";
    if (this.books.includes(newBook))
      this.books.find((el) => el == newBook).quantity += 1;
    else this.books.push(newBook);
  }
  addBooks(newBooks) {
    if (!Array.isArray(newBooks)) return "Wrong arguments";
    for (let i in newBooks) {
      if (!(newBooks[i] instanceof LibraryBook)) return "Invalid book";
      if (this.books.includes(newBooks[i]))
        this.books.find((el) => el == newBooks[i]).quantity += 1;
      else this.books.push(newBooks[i]);
    }
  }
  checkReaderId(readerId) {
    if (this.readers.find((el) => el.readerId == readerId)) return true;
    return false;
  }
  lendBook(book, readerId) {
    if (!(book instanceof LibraryBook)) return "Invalid book type";
    const bookInLib = this.books.find((el) => el == book);
    if (bookInLib) {
      if (bookInLib.quantity == 0) return `Not enough`;
    } else return `Don't have that book`;
    const reader = this.readers.find((el) => el.readerId == readerId);
    if (!reader) return `Reader doesn't existe`;
    bookInLib.quantity -= 1;
    const newBook = new ReaderBook(
      book._title,
      book._author,
      Math.floor(Math.random() * 1000),
      new Date().toString(),
      false
    );
    reader.books.push(newBook);
    return newBook;
  }
}

const book = new Book("Harry", "Potter");
console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.toString());
console.log(book.isTheSameBook(book));
const bookBase = new LibraryBookBase("Harry", "Potter", 5);
console.log(bookBase);
console.log(bookBase.toString());
const libraryBook = new LibraryBook("Harry", "Potter", 5, 15);
console.log(libraryBook);
console.log(libraryBook.quantity);
console.log((libraryBook.title = "ffffff"));
console.log(libraryBook);
console.log(libraryBook.increaseQuantityBy(20));
console.log(libraryBook.decreaseQuantityBy(20));
console.log(libraryBook.toString());
const readerBook = new ReaderBook("Harry", "Potter", 5, "September 5", false);
console.log(readerBook);
const reader = new Reader("Taron", "Harutyunyan", 55, ["Harry Potter", "1+2"]);
console.log(reader);
reader.borrowBook(readerBook, "lsls");
console.log(reader.books);

const HarryPotter = new LibraryBook("Harry Potter", "JK Rowling", 5, 15);
const randomBook = new LibraryBook("IDK", "IDK too", 99, 100);
const Taron = new Reader("Taron", "Harutyunyan", 56, []);
const Hayk = new Reader("Hayk", "Galstyan", 59, []);
const lib = new Library([HarryPotter, randomBook], [Hayk, Taron]);
console.log(lib);
console.log(lib.goHaveBook(randomBook));
console.log(lib.addBook(randomBook));
console.log(lib.addBooks([randomBook, randomBook, HarryPotter]));
console.log(lib.checkReaderId(56));
console.log(lib.lendBook(randomBook, 56));
console.log(lib.books[1].quantity);
