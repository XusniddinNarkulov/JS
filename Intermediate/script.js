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

// chaining methods
// let arr = [1, 2, 3, 4];
// let sum = arr
//   .filter((val, key) => val > 2)
//   .map((val) => val * 3)
//   .reduce(function (su, val) {
//     return su + 10 + val;
//   }, 0);
// console.log(sum);
// //
// console.log(arr.findIndex((val) => val === 3));
// console.log(arr.some((val) => val > 1)); //true. Bu metod ||(or) operatoriga o'xshab ketadi
// console.log(arr.every((val) => val > 1)); //false. Bu metod &&(and) operatoriga o'xshab ketadi
// console.log(arr.every((val) => val > 0)); //true
// //
// let arr1 = [[4, 5, [6, 7]], 8, 9];

// console.log(arr1.flat(0)); //(3) [array(3),8,9]
// console.log(arr1.flat(1)); //(5) [4,5,array(2),8,9]
// console.log(arr1.flat(2)); //(6) [4,5,6,7,8,9]

// let arr2 = [arr, arr1];
// console.log(
//   arr2.map(function (val) {
//     return val.flat(10);
//   })
// ); //(2) [array(4), array(6)]

// console.log(
//   arr2.flatMap(function (val) {
//     return val;
//   })
// ); //faqat 1ta qavsni ochadi

// contest 1
// const s = "fhkasfmagsadidadsacsadjsodaf";
// let mag = "magicsoft";
// let x = [...s];
// function check(s) {
//   for (let el of mag) {
//     if (x.includes(el)) {
//       console.log(`topdim`);
//     } else {
//       console.log(`topolmadim`);
//     }
//   }
// }
// check(s);

// // Sort
// let x = [
//   "qs",
//   "qe",
//   "Wd",
//   "Wa",
//   "eee",
//   "ee",
//   "r",
//   "t",
//   "y",
//   22,
//   2,
//   35,
//   11,
//   111,
//   -2,
//   0,
// ];
// console.log(x.sort());
// let str = "hel";
// console.log(str.charCodeAt(2));
// console.log(String.fromCharCode(33)); //utf da 50-nomerda turgan symbolni olib keladi
// //raqamlar uchun
// x.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(x);
// let sortt = function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else if ((a = b)) {
//     return 0;
//   }
// };

// let sortirovka = function (arr) {
//   for (let i = 0; i < arr.length; i++) {}
// };
// console.log(sortirovka(x));

//fill and from methods
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill(2, arr.length, 10));
// let x = new Array(10);
// console.log(x);
// console.log(x.fill(33, 0, 5));
// console.log(arr.fill(11, -2)); //[1,2,3,11,11]
// let y = new Array(23, 2323, 2323);
// console.log(y);

// let q = new Array(20);

// let a = Array.from({ length: 20 }, function (val, key) {
//   return key + 1;
// });
// console.log(a);

// let juft = Array.from({ length: 50 }, function (val, key) {
//   return key * 2 + 1;
// });
// console.log(juft);

// let arr1 = Array.from(arr, (val) => val * 10);
// console.log(arr1);

// numbers NUMBERS
// let x = "24";
// console.log(Number(x)); //24
// console.log(+x + 2); //26
// console.log(x + 2); //242
// console.log(x);
// let y = "22";
// console.log(y + 2);

// let a = 2.288235;
// console.log(a.toFixed()); //2
// console.log(a.toFixed(1)); //2.3
// console.log(a.toFixed(2)); //2.29

// console.log(Number.parseInt("23.7 px, 4")); //23 nuqtadan keyingi sonlarni olmaydi
// console.log(Number.parseFloat("323.23 23 px 23")); //323.23 nuqtadan keyingi sonlarni oladi
// console.log(Number.parseFloat("px 24")); //NaN (not a number)

// console.log(Number.isNaN(Number.parseFloat("px 24"))); //true //isNan faqat NaN qiymatga true qaytaradi//
// console.log(Number.isNaN(+"23px")); //true
// console.log(Number.isNaN("sadad")); //false
// console.log(Number.isNaN(23)); //false

// console.log(Number.isFinite("23")); //false //raqamligini tekshirish
// console.log(Number.isFinite(23)); //true

// console.log(Number.isInteger(23)); //true //kasr yoki butun sonligini tekshirish
// console.log(Number.isInteger(23.2)); //false
// console.log(Number.isInteger("24")); //false

// console.log(50 / 0); //Infinity

// let a = Math.max(7, 13, 23, 1, 233, 325);
// console.log(a);
// let b = [23, 1231, 1243, 234];
// console.log(Math.min(...b));
// console.log(Math.max(23, 124, 134, 134, 57));

// let i = Math.round(Math.random() * 10);
// console.log(i);

// function rando(a, b) {
//   let c = Math.round(Math.random() * (b - a) + a);
//   return c;
// }
// console.log(rando(-5, 5));

// console.log(Math.sqrt(9)); //3
// console.log(9 ** (1 / 2)); //3
// console.log(343 ** (1 / 3)); //7
// console.log(256 ** (1 / 8)); //2

// let arr = [];
// console.log(arr);

// let obj = {
//   1: "bir",
//   2: "ikki",
//   3: "uch",
//   4: "to'rt",
//   5: "besh",
//   6: "olti",
//   7: "yetti",
//   8: "sakkiz",
//   9: "to'qqiz",
//   10: "o'n",
// };
// let obj = {
//   bir: "1",
//   ikki: "2",
//   uch: "3",
//   tort: "4",
//   besh: "5",
//   olti: "6",
//   yetti: "7",
//   sakkiz: "8",
//   toqqiz: "9",
// };
// console.log(obj);
// let nMap = new Map(Object.entries(obj));
// console.log(nMap);
// let arr = [];
// function numToWord(a) {
//   let arr1 = [];
//   arr1 = [...String(a)];
//   for (let el of arr1) {
//     if (el == nMap.values) {
//       arr.push(nMap.keys);
//     }
//   }
//   return arr;
// }
// console.log(numToWord(14134));
// console.log(arr);
// console.log(...String(233));
// // console.log(arr);
// let y = [...String(123)];
// console.log(y);
// for (let el of y) {
//   console.log(el);
// }

//
// console.log(1_234_232_233);
// console.log(2 ** 1023);
// console.log(2 ** 69);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// let x = 2n;
// let y = 10;
// let z = x + BigInt(y);
// console.log(z);

// //
// let hozir = new Date();
// console.log(hozir);
// let kecha = new Date(2022, 2, 14, 15, 30, 24);
// console.log(kecha);
// let kechadanOldin = new Date("March,13,2022");
// console.log(kechadanOldin);
// console.log(new Date(1998, 0, 6));
// console.log(new Date(10 * 24 * 60 * 60 * 1000));
// console.log(new Date(1_100_000_000_000_0));
// console.log(new Date().getDate());
// console.log(new Date().toISOString());
// let a = new Date().getTime();
// console.log(a);
// let b = new Date((5 * 365 + 1) * 24 * 60 * 60 * 1000);
// let besh = new Date(a + b);
// console.log(besh);

// let hozir = new Date();
// hozir.setFullYear(2040);
// console.log(hozir);

// console.log(Date.now());
// console.log(new Date());

// shifr va deshifr
// let str = prompt("kodingizni kiriting");
// let str = "Hello";

// let a = [];
// function shifr(s) {
//   let arr = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     // console.log(arr[i].charCodeAt().toString(2));
//     a.push(arr[i].charCodeAt().toString(2));
//   }
//   a.join("");
//   // out = a.join("");
//   console.log(a.join(""));
// }
// shifr(str);

// let bin = 1110011110000111011001101111110110110000011010001100101110110011011001101111;
// console.log(bin.toString());

// function unshifr(u) {
//   for (let el of u) {
//     let char = el.toString();
//     console.log(char);
//   }
// }

// console.log(a[0]);

// ````````````let onlikarr = [];
// for (let k = 0; k < a.length; k++) {
//   let onlik = 0;
//   let arr1 = a[k].reverse();
//   for (let i = 0; i <= arr1.length; i++) {
//     if (arr1[i] == 1) {
//       onlik = onlik + 2 ** i;
//       harf = String.fromCharCode(onlik);
//     }
//   }
//   onlikarr.push(harf);
// }
// console.log(onlikarr);````````````

//
// console.log(new Date(2222, 1, 11).getTime());
// console.log(new Date(7955866800000));
// let data = new Date(7955866800000);
// let iso = data.toISOString();
// console.log(iso);

// let now = new Date();
// let options = {
//   day: "numeric",
//   month: "long",
//   weekday: "long",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// let uzb = new Intl.DateTimeFormat(navigator.language, options).format(now);
// console.log(uzb); //2022-3-16

// let davlat = navigator.language;
// console.log(davlat);

//intl numbers
let num = 12312321321.9898;
let settings = {
  style: "decimal",
  style: "currency",
  currency: "USD",
  style: "percent",
  style: "unit",
  unit: "celsius",
  useGrouping: false, //
};
let convert = new Intl.NumberFormat("ru-RU", settings).format(num);
console.log(convert);

//timer
// let a = Number(prompt(`1-raqam`));
// let b = Number(prompt(`2-raqam`));
// let timeOut = setTimeout(
//   function (a, b) {
//     let c = a + b;
//     if (c > 18) {
//       clearTimeout(timeOut);
//     }
//     console.log("salom");
//     console.log(c);
//   },
//   3000, //3000 millisekund
//   a,
//   b
//   // 2, //a
//   // 5 //b
// ); //3 sekunddan keyin salom chiqadi

// let age = Number(prompt(`yosh:`));
// let t = setTimeout(
//   function (d) {
//     console.log("hello");
//   },
//   2000,
//   age
// );
// if (age < 20) {
//   clearTimeout(t);
// }

let i = 59;
let min = 0;
let inter = setInterval(function () {
  console.log(min, i--);
  if (min == 0 && i == 0) {
    clearInterval(inter);
  }
  if (i == 0) {
    i = 59;
    min = min - 1;
  }
}, 100);
