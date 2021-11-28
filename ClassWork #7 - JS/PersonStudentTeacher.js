class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    this._firstName = name;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lName) {
    this._lastName = lName;
  }
  get gender() {
    return this._gender;
  }
  set gender(s) {
    this._gender = s;
  }
  get age() {
    return this._age;
  }
  set age(n) {
    this._age = n;
  }
  toString() {
    let res = [];
    for (let i in this) {
      if (Array.isArray(this[i])) {
        if (this[i].some((el) => typeof el == "object")) continue;
      }
      res.push(this[i]);
    }
    return res.join(" ");
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.exam = this.program.map((el) => {
      const obj = {};
      obj[el] = 0;
      return obj;
    });
  }
  get program() {
    return this._program;
  }
  set program(arr) {
    this._program = arr;
  }
  get year() {
    return this._year;
  }
  set year(y) {
    this._year = y;
  }
  get fee() {
    return this._fee;
  }
  set fee(f) {
    this._fee = f;
  }
  passExam(program, grade) {
    for (let i in this.exam)
      if (this.exam[i].hasOwnProperty(program)) {
        this.exam[i][program] = grade;
        break;
      }
  }
  isAllPassed() {
    let arr = this.exam;
    for (let i in arr)
      for (let j in arr[i]) if (arr[i][j] < 50) return "Failed exams";
    this.year += 1;
    return "Success";
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  get program() {
    return this._program;
  }
  set program(prog) {
    this._program = prog;
  }
  get pay() {
    return this._pay;
  }
  set pay(salary) {
    this._pay = salary;
  }
}

const pers = new Person("Hayk", "Galstyan", "male", 22);
const student = new Student(
  "Hayk",
  "Galstyan",
  "male",
  22,
  ["math", "JS", "React"],
  1,
  50000
);
const teacher = new Teacher("Hayk", "Galstyan", "male", 22, "math", 500);
student.passExam("math", 49);
student.passExam("JS", 66);
student.passExam("React", 66);
console.log(student.isAllPassed());
console.log(student.toString());
console.log(teacher.toString());
