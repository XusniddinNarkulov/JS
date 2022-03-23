"use strict";

//
//Constructor functions and new Operator
// const Neo = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// const neo = new Neo("anderson", 24);
// console.log(neo);
// const sardor = new Neo("sardor", 20);
// Neo.prototype.birth = function (year) {
//   console.log(2022 - year);
// };
// console.log(Neo);
// neo.birth(1996);
// console.log(neo);
// console.log(sardor);
// console.log(neo.hasOwnProperty("birth"));
// console.log(neo.__proto__);
// console.log(sardor.__proto__);
// console.log(Neo.prototype.isPrototypeOf(neo));
// console.log(Neo.prototype);

//
// let Car = function (brand, color) {
//   this.brand = brand;
//   this.color = color;
// };

// let cobalt = new Car("cobalt", "white");
// console.log(cobalt);

// Car.prototype.year = function (year) {
//   return year;
// };
// console.log(cobalt.year(2020));

// let lacetti = new Car("lacetti", "grey");
// console.log(lacetti);
// lacetti.year(2022);
// console.log(lacetti);

// console.log(Car.prototype);
// console.log(cobalt.__proto__);
// console.log(lacetti.__proto__.__proto__ == Object.prototype);
// console.log(cobalt.hasOwnProperty("year"));
// console.log(Car.__proto__.__proto__);

//ES6 classes
//class declaration
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getBirthYear() {
    return 2022 - this.age;
  }
}

let neo = new Student("neo", 22);
console.log(neo);
console.log(neo.getBirthYear());
Student.prototype.fakultet = function () {
  return "AI";
};
console.log(neo.fakultet());

//class expression
const Student1 = class {};

//
class Bank {
  #pin;

  constructor(user, age, pin) {
    this.user = user;
    this.age = age;
    this.#pin = pin;
    this.til = navigator.language;
    this.movements = [this.pul];
    this.qarz = [];
  }

  get pinniOlish() {
    return this.#pin;
  }
  set pinniOlish(val) {
    this.#pin = val;
  }
  get qarzOlish() {}
  set qarzOlish(val) {}
}

let jon = new Bank("Jon", 20, 1111);
console.log(jon);
jon.movements.push(200, -200, 300, -400);
console.log(jon);
console.log(jon.pinniOlish);
jon.qarz.push(100);
console.log(jon);

class Phone {
  static a = 200;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get olish() {
    return [this.name, this.price];
  }
  set uzgartir(narx) {
    this.price = narx;
  }
}

let mi = new Phone("redmi", 300);
mi.uzgartir = 200;
console.log(mi.olish);
console.log(Phone.a);

//Object.create
const Tel = {
  init(name, price) {
    this.name = name;
    this.price = price;
  },
};

let iphone = Object.create(Tel);
iphone.name = "X";
iphone.price = 1200;
iphone.year = 2020;
console.log(iphone);
