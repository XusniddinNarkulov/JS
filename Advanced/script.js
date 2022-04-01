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
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getBirthYear() {
//     return 2022 - this.age;
//   }
// }

// let neo = new Student("neo", 22);
// console.log(neo);
// console.log(neo.getBirthYear());
// Student.prototype.fakultet = function () {
//   return "AI";
// };
// console.log(neo.fakultet());

// //class expression
// const Student1 = class {};

// //
// class Bank {
//   #pin;

//   constructor(user, age, pin) {
//     this.user = user;
//     this.age = age;
//     this.#pin = pin;
//     this.til = navigator.language;
//     this.movements = [this.pul];
//     this.qarz = [];
//   }

//   get pinniOlish() {
//     return this.#pin;
//   }
//   set pinniOlish(val) {
//     this.#pin = val;
//   }
//   get qarzOlish() {}
//   set qarzOlish(val) {}
// }

// let jon = new Bank("Jon", 20, 1111);
// console.log(jon);
// jon.movements.push(200, -200, 300, -400);
// console.log(jon);
// console.log(jon.pinniOlish);
// jon.qarz.push(100);
// console.log(jon);

// class Phone {
//   static a = 200;
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   get olish() {
//     return [this.name, this.price];
//   }
//   set uzgartir(narx) {
//     this.price = narx;
//   }
// }

// let mi = new Phone("redmi", 300);
// mi.uzgartir = 200;
// console.log(mi.olish);
// console.log(Phone.a);

// //Object.create
// const Tel = {
//   init(name, price) {
//     this.name = name;
//     this.price = price;
//   },
// };

// let iphone = Object.create(Tel);
// iphone.name = "X";
// iphone.price = 1200;
// iphone.year = 2020;
// console.log(iphone);

//
//inheritence in constructor functions
// String;
// const me = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
//   boshla(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   },
// };
// let umid = Object.create(me);
// umid.boshla("Umid", 21);
// umid.hisobla();
// console.log(umid);
// console.log(umid.hisobla());

//
// const Person = function (ism, yosh) {
//   this.ism = ism;
//   this.yosh = yosh;
// };
// Person.prototype.yoshniHisobla = function () {
//   return 2022 - this.yosh;
// };
// Person.prototype.oylikniHisobla = function () {
//   return this.oylik * 11000;
// };
// const Talaba = function (ism, yosh, fakultet, stip) {
//   // this.ism = ism;
//   // this.yosh = yosh;
//   Person.call(this, ism, yosh);
//   this.fakultet = fakultet;
//   this.stip = stip;
// };
// // Talaba.prototype = Person.prototype; xato usul
// Talaba.prototype = Object.create(Person.prototype);
// const umid = new Talaba("Umid", 20, "AI", 100);
// const aziz = new Person("Aziz", 19, "AI", 100);
// console.log(umid.yoshniHisobla());
// console.log(umid);
// console.log(aziz.yoshniHisobla());
// console.log(aziz);

// const Teacher = function (ism, yosh, fan, oylik) {
//   Person.call(this, ism, yosh);
//   this.fan = fan;
//   this.oylik = oylik;
// };

// Teacher.prototype = Object.create(Person.prototype);
// const lisa = new Teacher("Lisa", 30, "Frontend", 2000);
// console.log(lisa);
// console.log(lisa.oylikniHisobla());
// console.log(umid.__proto__.__proto__.__proto__);

//Inheritance in class

// class Person {
//   constructor(ism, yosh, bosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.bosh = bosh;
//   }

//   yoshniHisobla() {
//     return 2022 - this.yosh;
//   }
// }

// class Talaba extends Person {
//   constructor(ism, yosh, fak) {
//     super(ism, yosh);
//     this.fak = fak;
//   }
// }

// Person.prototype.yoshniHisobla = function () {
//   return 2022 - this.yosh;
// };

// const neo = new Talaba("Neo", 22, "ai");
// console.log(neo);
// console.log(neo.yoshniHisobla());

//Inheritance in Object.create()

// const Person = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
//   qush(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   },
// };

// const Student = Object.create(Person);
// // Student.qush("Umid", 23);
// Student.qush = function (ism, yosh, fak) {
//   Person.qush.call(this, ism, yosh);
//   this.fak = fak;
// };

// Student.tanish = function () {
//   console.log(`I am ${this.ism}`);
// };

// const jack = Object.create(Person);
// const neo = Object.create(Student);
// neo.qush("Neo", 23, "AI");
// console.log(neo.hisobla()); //1999
// console.log(neo);
// jack.qush("Jack", 22);
// console.log(jack);
// console.log(jack.hisobla());

// //Encapsulation: Protected properties and methods

// class University {
//   #nomi;
//   constructor(nomi, soni, pin) {
//     this.#nomi = nomi;
//     this.soni = soni;
//     this._pin = pin;
//   }
//   nomiUzgar(val) {
//     this.#nomi = val;
//   }
//   _parolUzgar(val) {
//     this._pin = "1" + val + "1";
//   }
//   parol(val) {
//     this._parolUzgar(val);
//   }
// }
// const tatu = new University("TATU", 5000, 2222);
// tatu.pin = 3333;
// console.log(tatu);
// tatu._parolUzgar(4444);
// console.log(tatu);
// tatu.parol("0000");
// console.log(tatu);
// console.log(tatu.nomi);
// tatu.nomiUzgar("tuit");
// console.log(tatu);
// //Encapsulation: private properties and methods

// const faculty = new University("dev", 1000, 7777);
// console.log(faculty);

//chaining methods

// class Car {
//   constructor(nomi) {
//     this.nomi = nomi;
//   }
//   nomniOl() {
//     console.log(this.name);
//     return this;
//   }
//   nomniUzgartir(val) {
//     this.name = val;
//     return this;
//   }
// }

// let nexia = new Car("BMW");
// console.log(nexia.nomniUzgartir("Malibu").nomniOl());

//ASYNCHRONOUS JS
setInterval((e) => {
  // console.log(a);
  // console.log(e);
  let b = 3;
  // console.log(b);
}, 1000);
let a = 5;

let b;
navigator.geolocation.getCurrentPosition(function (e) {
  b = e;
  console.log(b);
});
console.log(b);
