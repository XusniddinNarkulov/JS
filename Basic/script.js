"use strict";
// ex 1
// let vazn = 70;
// let height = 1.83;
// let a = vazn / height ** 2;
// console.log(a);
// console.log(18.5 * height * height);

// let vaznNeo = 60;
// let heightNeo = 1.7;
// let b = vaznNeo / heightNeo ** 2;
// console.log(b);

// let c = a < b;
// console.log(c);
// ex 1 end

// ex2

// let me = `I am`;
// let myName = `${me} anderson`;
// console.log(myName);

// let askAge = prompt("yoshingni kirit: ");
// if (askAge > 18) {
//   console.log(`sani yoshing ${askAge} da. san maktabni bitirgansan`);
// } else if (askAge > 7) {
//   console.log(`san maktabga borishing mumkin`);
// } else {
//   console.log(`sani yoshing ${askAge} da. San maktab yoshida emassan`);
// }

// console.log("28" * "4" + "8");
// console.log("4" + "4" + 2);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// let age = prompt("yoshingizni kiriting:");
// let univer = prompt("diploming bormi?(1 yoki 0 kiriting)");
// if (age >= 18 && univer === "1") {
//   console.log("ishga olamiz");
// } else if (age < 18 && univer === "1") {
//   console.log("yoshingiz kichkina");
// } else if (age >= 18 && univer === "0") {
//   console.log("o'qishni bitiring");
// } else {
//   console.log("uyga bor");
// }

// let age = Number(prompt("yoshni kirit"));
// switch (age) {
//   case 1:
//     console.log("1da");
//     break;
//   case 2:
//     console.log("2da");
//     break;
//   case 3:
//   case 4:
//     console.log("3da");
//     break;
//   case (3, 4):
//     console.log("3da");
//     break;
//   default:
//     console.log("not Found");
//     break;
// }

// let age = 51;
// // if (age > 18) {
// //   console.log("ishga olamiz");
// // } else if (age < 14) {
// //   console.log("ishga olmaymiz");
// // } else {
// //   console.log("stajirovkaga olamiz");
// // }

// age > 18
//   ? console.log("ishga olamiz")
//   : age < 14
//   ? console.log("ishga olmaymiz")
//   : console.log("stajirovkaga olamiz");

// function yoshniHisobla(birthYear, presentYear) {
//   console.log("Tug'ilgan yilni hisoblash");
//   return presentYear - birthYear;
// }
// console.log(yoshniHisobla(1999, 2022));

// Function declaration

// const friends = [22, "Tolib", "Aziz"];
// console.log(friends);
// console.log(friends[1], friends[0]);
// const friend = new Array("22", "tolib");
// console.log(friend);
// console.log(friends.length);
// friends[1] = "Tolibjon";
// console.log(friends);

// const books = ["salom", "hello", friends];
// console.log(books);

// const book = ["qwerty", "asd", "zxc"];
// book.push("fgh");
// book.unshift("Bekzod");
// console.log(book);

// book.pop();
// console.log(book);

// book.shift();
// console.log(book);
// book.splice(1, 2);
// console.log(book);

// let about = {
//   job: "Developer",
//   age: 24,
//   university: "TATU",
// };
// console.log(about.job, about.age);
// console.log(about["job"]);

// const aboutMe = {
//   birth: 1998,
//   now: 2022,

//   calcAge: function () {
//     return this.now - this.birth;
//   },
// };

// console.log(aboutMe.calcAge());

// for (let i = 1; i < 12; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 100; i += 2) {
//   console.log(`100 gacha bo'lgan juft sonlar: ${i}`);
// }
// for (let i = 1; i < 100; i += 2) {
//   console.log(`100 gacha bo'lgan toq sonlar: ${i}`);
// }

// let birth = [1996, 1998, 2000, 2002];
// let age = [];
// let calcAge = function () {
//   for (let i = 0; i < birth.length; i++) {
//     age.push(2022 - birth[i]);
//   }
//   return age;
// };
// console.log(calcAge());

function myFunction(a, b) {
  a = a.split("%");
  b = b.split("%");
  a = a.join("");
  b = b.join("");
  b = b.split("");
  let c = [];
  for (let i = b.length - 1; i >= 0; i--) {
    c.push(b[i]);
  }
  c = c.join("");
  return `${a[0].toUpperCase()}${a.slice(1)}${c}`;
}
console.log(myFunction("java", "tpi%rcs"));
console.log(myFunction("c%ountry", "edis"));
console.log(myFunction("down", "nw%ot"));
// for (let i = birth.length - 1; i >= 0; i--) {
//   console.log(birth[i]);
// }
// let incre = 1;
// const weekdays = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
// for (let i = 0; i < weekdays.length; i++) {
//   console.log(weekdays[i]);
//   for (let j = 1; j < incre; j++) {
//     console.log(`${j}-para`);
//   }
//   incre++;
// }

// let soqqa = Math.ceil(-4.6);
// console.log(soqqa);
// let soqqa;
// while (soqqa !== 4) {
//   console.log(`${soqqa} chiqdi. Yutqazdiz`);
//   soqqa = Math.round(Math.random() * 10);
// }
// console.log(`Siz yutdingiz: ${soqqa}`);

// let num = Math.trunc(Math.random() * 10) + 1;
// while (num) {
//   if (num > 5 && num % 2 == 0) {
//     console.log(`${num}`);
//     break;
//   }
//   console.log(`${num}`);
//   num = Math.trunc(Math.random() * 10) + 1;
// }

// let str = "Konsol";
// // console.log(str);
// // console.log(str.indexOf(""));
// console.log(str.lastIndexOf());
// console.log(str.startsWith("Ko"));
// console.log(str.endsWith("ol"));
// console.log(str.slice(1, 4));
// console.log(str.slice(-2));
// console.log(str.substring(1, 5));
// console.log(str.substring(4, 2));
// console.log(str.substr(1, 3));
// console.log(str.replace("o", "aa"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let str1 = "hel";
// let str2 = "lo";
// // // let = full;
// // // full = full.concat(str1);
// // // full = full.concat(str2);
// // // console.log(full);
// str1 = str1.concat(str2, "John");
// console.log(str1);
// // // trim 2ta tomondan probellarni olib tashlaydi
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.charAt(3));
// console.log(str.length);

// str = str.toUpperCase();
// let arr = [];
// arr = str.split("");
// console.log(arr);
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr1.push(arr[i]);
//   if (arr[i] === "L") {
//     arr1.push("L");
//   }
// }

// console.log(arr1);
// console.log(arr1.join("+"));

let sp = "Salom Toshkent ";
console.log(sp.split("o"));
