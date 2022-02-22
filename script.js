let vazn = 70;
let height = 1.83;
let a = vazn / height ** 2;
console.log(a);
console.log(18.5 * height * height);

let vaznNeo = 60;
let heightNeo = 1.7;
let b = vaznNeo / heightNeo ** 2;
console.log(b);

let me = `I am`;
let myName = `${me} anderson`;
console.log(myName);

// let askAge = prompt("yoshingni kirit: ");
// if (askAge > 18) {
//   console.log(`sani yoshing ${askAge} da. san maktabni bitirgansan`);
// } else if (askAge > 7) {
//   console.log(`san maktabga borishing mumkin`);
// } else {
//   console.log(`sani yoshing ${askAge} da. San maktab yoshida emassan`);
// }

console.log("28" * "4" + "8");
console.log("4" + "4" + 2);
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

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
let age = Number(prompt("yoshni kirit"));
switch (age) {
  case 1:
    console.log("1da");
    break;
  case 2:
    console.log("2da");
    break;
  // case 3:
  // case 4:
  //   console.log("3da");
  //   break;
  case (3, 4):
    console.log("3da");
    break;
  default:
    console.log("not Found");
    break;
}
