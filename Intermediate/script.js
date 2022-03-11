"use strict";
// let myName = 24;
// const me = {
//   name: `Umid`,
//   age: 25,
//   aboutt: function (a, b) {
//     console.log(this.name);
//     console.log(arguments);
//     return a - b;
//   },
// };
// console.log(me);
// me.aboutt(10, 4);

// Destructing Arrays
// const arr = [2, 3, 4, 6];
// console.log(arr);

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z, t, g] = arr;
// console.log(x, y, z, t, g);
// console.log(z);

// const kafe = {
//   cafeName: "MagicCafe",
//   taomlar: ["plov", "shurva", "shashlik"],
//   sweets: ["icecream", "cake", "chocolate"],
//   ichimliklar: ["coffee", "tea", "energetics"],
//   workingTime: {
//     dush: { open: "8:00", close: "22:00" },
//     shanba: { open: "6:00", close: "00:00" },
//   },
//   locationCafe: "Tashkent, Yunusobod, TATU",
//   order: function (taom, ichimlik) {
//     console.log(
//       `Buyurtmangiz: ${this.taomlar[taom]} va ${this.ichimliklar[ichimlik]}`
//     );
//   },
// };

// const firstTaom = kafe.taomlar[0];
// console.log(firstTaom);

// const [firstFood, , thirdFood] = kafe.taomlar;
// console.log(firstFood, thirdFood);
// console.log(kafe.taomlar);
// console.log(kafe.taomlar[1]);

// kafe.taomlar = [thirdFood, firstFood];
// console.log(kafe.taomlar);

//
// const arr = [1, 2, 4];
// const [x = 1, y = 1, z = 1, t = 1, r = 1] = arr;

// console.log(x, y, z, t, r);

// //
// const barr = [1, 2, [3, 4, [5, 6]]];
// const [a, , [b, , [, c]]] = barr;
// console.log(barr);
// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < barr.length; i++) {
//   if (typeof barr[i] == "object") {
//     let q = barr[i][i][0];
//     console.log(q);
//     break;
//   }
// }

//
// let kafe = {
//   cafeName: "MagicCafe",
//   taomlar: ["plov", "shurva", "shashlik"],
//   sweets: ["icecream", "cake", "chocolate"],
//   ichimliklar: ["coffee", "tea", "energetics"],
//   workingTime: {
//     dush: { open: "8:00", close: "22:00" },
//     shanba: { open: "6:00", close: "00:00" },
//   },
//   locationCafe: "Tashkent, Yunusobod, TATU",
//   order: function (taom, ichimlik) {
//     console.log(
//       `Buyurtmangiz: ${this.taomlar[taom]} va ${this.ichimliklar[ichimlik]}`
//     );
//   },
// };

// let {
//   cafeName: nomi,
//   sweets,
//   locationCafe,
//   workingTime: { dush },
//   workingTime: {
//     shanba: { open: ochilish, close: yopilish },
//   },
// } = kafe;
// console.log(nomi);
// console.log(dush);
// console.log(ochilish);
// console.log(yopilish);

// [ochilish, yopilish] = [yopilish, ochilish];
// console.log(ochilish);
// console.log(yopilish);

// const c = {
//   a: 7,
//   b: 8,
// };

// let y = function (obj) {
//   const { a, b } = obj;
//   return a + b;
// };

// console.log(y(c));

// // spread operator
// let arrIch = [...kafe.ichimliklar, "fanta"];
// console.log(arrIch);

// let arrShirin = [...kafe.sweets];
// console.log(arrShirin);

// //
// const str = "Uzbekistan";
// console.log(...str);
// const arrUz = [...str];
// console.log(arrUz);

// 4 rest pattern an Parameters
// const [, x, ...arr1] = [1, 2, 3, 4, 5, 6];
// console.log(x);
// console.log(arr1);

//
// let kafe = {
//   odam: 0,
//   cafeName: "MagicCafe",
//   taomlar: ["plov", "shurva", "shashlik"],
//   sweets: ["icecream", "cake", "chocolate"],
//   ichimliklar: ["coffee", "tea", "energetics"],
//   workingTime: {
//     dush: { open: "8:00", close: "22:00" },
//     shanba: { open: "6:00", close: "00:00" },
//   },
//   locationCafe: "Tashkent, Yunusobod, TATU",
//   order: function (taom, ichimlik) {
//     console.log(
//       `Buyurtmangiz: ${this.taomlar[taom]} va ${this.ichimliklar[ichimlik]}`
//     );
//   },
// };
// kafe.workingTime.dush?.open ? console.log("bor") : console.log("yoq");
// //
// // for (let [a, b] of Object.entries(kafe)) {
// //   console.log(a, `->`, b);
// // }
// let arr = Object.entries(kafe);
// console.log(arr);
// let mix = [...kafe.taomlar, ...kafe.ichimliklar];
// for (let el of mix.entries()) {
//   console.log(el[0] + 1, el[1]);
// }
// for (let [a, b] of kafe.taomlar.entries()) {
//   console.log(a + 1, b);
// }

// const x = [...kafe.taomlar, ...kafe.ichimliklar];

// const { workingTime } = kafe;
// console.log(workingTime);
// const { yakshanba, ...haftaKunlari } = workingTime;
// console.log(yakshanba);
// console.log(haftaKunlari);

//
// function ayirish(...raqamlar) {
//   let sum = 0;
//   for (let i = 0; i < raqamlar.length; i++) {
//     sum = sum - raqamlar[i];
//   }
//   console.log(sum);
// }
// ayirish(1, 2, 3, 4, 5, 6);

// // ||
// console.log(0 || "sa" || (23 && null));
// // &&
// console.log(1 && "salom" && 0);
// // ??
// console.log(kafe.odam ?? "bunaqa key yo'q");

// for-of loop
// let a = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// // for (let i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// //   sum = sum + a[i];
// // }
// // console.log(sum);

// for (let el of a) {
//   console.log(el);
//   sum = sum + el;
// }
// console.log(sum);

// let b = "salom";
// for (let i of b) {
//   console.log(i);
// }

// const [k, s] = input.split(' ').map(Number)
// function yech(k,s){

//   let [x,y,z];
//   0 <= [x,y,z];
//   k >= [x,y,z];
//   s = x + y +z;
//   };

//   yech(input);

// Sets
// let setsArr = new Set([1, 1, 2, 2, 3, 3]);
// console.log(setsArr);
// let str = new Set("hello hello");
// console.log(str);
// console.log(str.size);
// console.log(str.has("m")); //false
// console.log(str.add("qi"));
// str.delete("qi");
// console.log(str);
// str.clear();
// console.log(str);

// let ishchilarOffice = [
//   "frontend",
//   "frontend",
//   "frontend",
//   "frontend",
//   "backend",
//   "backend",
//   "mobile",
//   "mobile",
//   "counter",
// ];
// console.log(ishchilarOffice.length);
// const newSet = new Set(ishchilarOffice);
// console.log(newSet);

// Maps

// const obj = {
//   namee: "Umid",
//   age: 20,
//   job: "dev",
// };

// const me = new Map();
// me.set("namee", "Umid");
// me.set(1, 20);
// me.set(true, "yutding");
// console.log(me);
// console.log(me.get(true));
// console.log(me.get(1));
// console.log(me.get("namee"));
// console.log(me.has("namee"));
// me.delete(1);
// console.log(me);
// console.log(me.size);

// const rest = new Map([
//   ["namee", "Umid"],
//   ["age", 20],
//   ["job", "dev"],
// ]);
// console.log(rest);
// console.log(rest.get("job"));

// let arr = [1, 2];
// rest.set(arr, "Arrayni qo'shdim");
// console.log(rest.get(arr));
// console.log(rest);

// let dam = ["shanba", "yakshanba"];
// let ishKuni = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
// const office = new Map([
//   ["name", "magicSoft"],
//   ["open", 9],
//   ["close", 18],
//   [true, "Office ochiq"],
//   [false, "Office yopiq"],
// ]);
// let sorov = prompt("Kunni kiriting:");
// office.set("damOlish", dam);
// office.set("ishKuni", ishKuni);
// office.get("ishKuni").includes(sorov)
//   ? console.log("bu kun Ish kuni")
//   : console.log("bu kun Dam olish kuni");

// const savol = new Map([
//   ["savol", "O'zbekiston poytaxti"],
//   [1, "Toshkent"],
//   [2, "Samarqand"],
//   [3, "Xorazm"],
//   ["javob", 1],
//   [true, "topding"],
//   [false, "xato"],
// ]);

// const kirit = Number(prompt(`Javob raqamini kirit`));
// console.log(savol.get("Savol"));
// for (let [key, val] of savol) {
//   if (typeof key == "number") {
//     console.log(`${key} ->Javob: ${val}`);
//   }
// }

// let obj = {
//   ism: "neo",
//   job: "developer",
//   age: "23",
// };

// let arr = [...Object.values(obj)];
// console.log(arr);

// let arr0 = new Map(Object.entries(obj));
// console.log(arr0);

// const arr1 = [...arr0.keys()];
// console.log(arr1);

// //
// let str = "salom toshkent, xayr buxoro";
// console.log(str.split(" "));
// let arr = str.split(" ");
// for (let el of arr) {
//   console.log(el[0].toUpperCase() + el.slice(1));
// }

// let namee = "Neo \n";
// namee.padStart("!", 3);
// console.log(
//   namee.padStart(namee.length + 4, "+").padEnd(namee.length + 7, "!")
// );
// console.log(namee.repeat(5));

//function: default parameters
// let arr = [
//   {
//     name: "S20",
//     price: 100,
//     color: "black",
//   },
//   { name: "S10", price: 300, color: "black" },
//   { name: "S21", price: 200, color: "black" },
//   { name: "S22", price: 400, color: "black" },
// ];
// let market = function (cat = "Samsung", price = 400) {
//   switch (cat) {
//     case "Samsung":
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].price <= price) {
//           console.log(
//             `Siz ${arr[i].name} telefonini ${arr[i].price}$ ga ${arr[i].color} rangini olishingiz mumkin
//           `
//           );
//         }
//       }
//   }
// };

// market(undefined, 340);

////primitive va reference tiplarni funksiyaga argument sifatida berish
// let me = {
//   name: "Neo",
//   job: "Dev",
// };
// let age = 20;
// let myFunc = function (age, obj) {
//   age = 12;
//   obj.name = "Sardor";
//   console.log(age, obj);
// };

// myFunc(age, me);
// console.log(me, age);

//
// let lib = "Kutubxona";
// let person = {
//   id: 123123,
//   ism: "Neo",
// };
// function myFunc(id, ism) {
//   id = Number(prompt(`id raqamingizni kiriting`));
//   ism = person.ism;
//   if (id === person.id) {
//     console.log(`${lib}ga xush kelibsiz`);
//   } else {
//     console.log(`xato kiritdingiz`);
//   }
// }
// myFunc(person);

// primitive
// const age = 20;
// let myFunc = function (age) {
//   age = 30;
//   console.log(age);
// };
// myFunc(age);
// console.log(age);

// reference
// const umid = {
//   name: "Neo",
//   age: 30,
// };
// let myFunk = function (obj) {
//   obj.name = "Ja'far";
//   obj.age = 1;
//   console.log(obj);
// };
// console.log(umid);
// myFunk(umid);
// console.log(umid);

// First-class and Higher order functions
//High-order
// function func(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let ich = func(8);
// console.log(ich(5));

// //High-order
// function add(a, b) {
//   return a + b;
// }
// function calc(c, math) {
//   return c + math;
// }
// console.log(calc(8, add(5, 6)));

// //high-order
// function count() {
//   let counter = 0;
//   return function () {
//     console.log(counter++);
//   };
// }
// let co = count();
// co(); //0
// co(); //1
// co(); //2
// co(); //3

//
// let str = prompt("kiriting");
// function kattaHarf(suz) {
//   console.log(suz.toUppercase());
// }
// function kichikHarf(suz) {
//   console.log(suz.toLowercase());
// }
// function birinchiHarf(suz) {
//   let arr = suz.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUppercase() + arr[i].substr(1).toLowercase();
//   }
//   let str1 = arr.join("");
//   let str2 = str1;
//   str2 = str2.replace(`${str2[0]}`, `${str2[0].toLowercase()}`);
//   console.log(str2);
// }

// let transform = function (a, b) {
//   b(a);
// };

// transform(str, birinchiHarf);

//Functions Returning Functions
// function a(x) {
//   console.log(x);
//   return function (bir) {
//     console.log(bir);
//     return function (ikki) {
//       console.log(ikki);
//     };
//   };
// }
// let b = a(1); //1
// let c = b(4); //4
// let d = c(5); //5
// let e = d(8); //error d is not a function

//Call and apply
// function a(x, y) {
//   console.log(x + y);
// }
// const obj = {
//   name: "neo",
//   age: 22,
// };
// let arr = [10, 20];
// a.call(obj, 20, 30); //50
// a.call(obj, arr); //10,20undefined
// a.apply(obj, arr); //30
// a.call(obj, ...arr); //30

// //bind method
// let me = {
//   name: "Jack",
//   order(model, year, color) {
//     console.log(model, year, color);
//   },
// };

// let you = {
//   name: "Neo",
// };
// let newOrder = me.order;
// let youOrder = newOrder.bind(you, "s20");
// youOrder(2020, "black"); //s20, 2020, black

//
// let magicPhone = {};
// magicPhone.phones = 0;
// magicPhone.buy = function () {
//   console.log(++this.phones);
// };
// // console.log(magicPhone.phones);
// let func = magicPhone.buy.bind(magicPhone);
// document.querySelector(".box").addEventListener("click", func);

// IIFE
// (function () {
//   console.log("hello");
// })();

//closure
// const func = function () {
//   let sana = 0;
//   return function () {
//     sana++;
//     console.log(sana);
//   };
// };
// let b = func();
// b();
// b();
// b();
// //
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
//
// function a() {
//   let x = 4;
//   return function () {
//     console.log(--x);
//   };
// }
// let b = a();
// b();
// b();
// b();

// simple array methods
// let arr = ["U", "M", "I", "D"];
// console.log(arr.slice(0, -1));
// console.log(arr);
// console.log(arr.splice(2, 4));
// console.log(arr);
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.reverse());
// console.log(arr1);
// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr1.concat(arr2, arr));
// console.log(arr2.join("-"));
// console.log(arr2[1]);
// console.log(arr2.at(-1));
// console.log(arr2[arr2.length - 2]);
// let a = "Neo";
// console.log(a.at(2));

//Looping arrays:forEach()
// let arr = [1, 2, 3, 4, 5, "neo"];
// arr.forEach(function (val, key, ar) {
//   console.log(
//     val,
//     key,
//     ar.forEach(function (x, y, z) {
//       console.log(x, y, z);
//     })
//   );
// });

//
// let umidClick = {
//   name: "Umid Rustamov",
//   balance: 1000,
//   transaction: [],
//   pin: 1111,
// };

// let mironshohClick = {
//   name: "Mironshoh",
//   balance: 2000,
//   transaction: [],
//   pin: 2222,
// };
// let arr = [umidClick, mironshohClick];
// let utkazma = function (arr) {
//   let pinCode = Number(prompt(`parolni kirit`));
//   for (let element of arr) {
//     if (pinCode === element.pin) {
//       console.log(`sizning balansingiz: ${element.balance}`);
//       console.log(`account: ${element.name}`);
//       // let pul = Number(prompt(`qancha pul jo'natasiz`));
//     } else {
//       console.log("parol xato");
//     }
//   }
// };
// utkazma(arr);

//data transformations: map, filter, reduce
//map
// let arr = [1, 2, 3, 4, 5];
// let x = arr.map(function (val, key) {
//   return val * 10;
// });
// console.log(x);

// let dollar = [100, 200, 400, 30, 333];
// let dollarToUZS = 10900;
// let uzs = dollar.map(function (val, key) {
//   return val * dollarToUZS;
// });
// console.log(uzs);
// let filter200 = dollar.filter(function (val) {
//   return val > 200;
// });
// console.log(filter200);
// let reduce1 = dollar.reduce(function (sum, val, key) {
//   return sum + val;
// }, 0);
// console.log(reduce1);

// let mx = function () {
//   for (let i = 0; i < dollar.length; i++) {
//     let x = dollar[0];
//     if (x < dollar[i]) {
//       return x;
//     } else {
//       return dollar[i];
//     }
//   }
// };
// console.log(mx(dollar));
// let sum = dollar.reduce(function (max, val, key) {
//   if (max < val) {
//     return val;
//   } else {
//     return max;
//   }
// }, dollar[0]);
// console.log(sum);

//find method
// const accounts = [account1, account2, account3, account4];

// let x = accounts.find(function (val) {
//   return val.username === "js";
// });
// console.log(x);
// console.log(
//   accounts.find(function (val) {
//     return val.username === "ss";
//   })
// );
