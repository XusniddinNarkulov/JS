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

let obj = {
  ism: "neo",
  job: "developer",
  age: "23",
};

let arr = [...Object.values(obj)];
console.log(arr);

let arr0 = new Map(Object.entries(obj));
console.log(arr0);

const arr1 = [...arr0.keys()];
console.log(arr1);
