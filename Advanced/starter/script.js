'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//
//
//start
// const allSection = document.querySelectorAll(`.section`);
// console.log(allSection);
// const button = document.getElementsByTagName('button');
// console.log(typeof button);
// for (let [key, val] of Object.entries(button)) {
//   console.log();
// }

// //
// const footer = document.querySelector('footer');
// const box = document.createElement('div');
// box.classList.add('cook');
// // box.classList.remove('cook');
// // box.classList.toggle('cook');
// // box.classList.contains('cook');
// box.textContent = 'salom';
// box.innerHTML = '<h1 class="hello" >Hello</h1>';
// footer.prepend(box);
// footer.after(box.cloneNode(true));
// footer.before(box.cloneNode(true));

// document.querySelector('.cook').remove();
// console.log(box);

// //
// document.documentElement.style.setProperty('--color-primary', 'purple');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.width);
// console.log(logo.getAttribute('src'));
// console.log(logo.getAttributeNames());

// const nav = document.querySelector('.nav__links');
// console.log(getComputedStyle(nav).color);
// let balandlik = getComputedStyle(nav).height;
// nav.style.height = Number.parseFloat(balandlik) + 20 + 'px';
// console.log(nav.style.height);

// scrolling

// let btnScrollTo = document.querySelector('.btn--scroll-to');
// let section1 = document.querySelector('#section--1');
// let footer = document.querySelector('footer');

// console.log(section1.getBoundingClientRect());
// console.log(window.pageXOffset, window.pageYOffset);

// btnScrollTo.addEventListener('click', function (e) {
//   let scroll = btnScrollTo.getBoundingClientRect();
//   console.log(btnScrollTo.getBoundingClientRect()); //scroll bolganda elementni butun htmlga nisbatan joylashuvi
//   console.log('web x/y:', window.pageXOffset, window.pageYOffset); //necha px scroll bo'lganini korsatadi
//   console.log(
//     'viewport:',
//     document.documentElement.clientWidth,
//     document.documentElement.clientHeight
//   ); //100vw va 100 vh ni px da ko'rsatadi
//   // window.scrollTo({
//   //   behavior: 'smooth',
//   //   top: 1000,
//   //   // left: scroll.left,
//   //   // bottom: 3000,
//   //   // right: 2000,
//   // });
//   // section1.scrollIntoView({ behavior: 'smooth' });
//   footer.scrollIntoView({ behavior: 'smooth' });
// });

// btnScrollTo.addEventListener('mouseenter', function () {
//   btnScrollTo.style.backgroundColor = 'red';
// });
// btnScrollTo.addEventListener('mouseleave', function () {
//   btnScrollTo.style.backgroundColor = 'white';
// });

//
// footer.onmouseleave = () => (footer.style.background = 'red');

// let r = function () {
//   return Math.round(Math.random() * 255);
// };

// let nav = document.querySelector('.nav');
// let links = document.querySelector('.nav__links');
// let link = document.querySelectorAll('.nav__link');

// nav.onclick = e => (
//   // console.log(e),
//   e.stopPropagation(),
//   e.preventDefault(),
//   (nav.style.backgroundColor = `rgb(${r()},${r()},${r()})`)
// );
// links.onclick = e => (
//   e.stopPropagation(),
//   e.preventDefault(),
//   (links.style.backgroundColor = `rgb(${r()},${r()},${r()})`)
// );
// link.addEventListener('click', e => {
//   e.stopPropagation();
//   e.preventDefault();
//   link.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
// });
// btnScrollTo.onclick = () =>
//   (btnScrollTo.style.backgroundColor = `rgb(${r()},${r()},${r()})`);

//
//
// link.forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log(id);
//   });
// });

// links.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(e);
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// console.log(links.parentElement.children);
// console.log(link);

//
//
//
//Constructor functions and new Operator
const Neo = function (name, age) {
  this.name = name;
  this.age = age;
};
const neo = new Neo('anderson', 24);
console.log(neo);
const sardor = new Neo('sardor', 20);
Neo.prototype.birth = function (year) {
  console.log(2022 - year);
};
neo.birth(1996);
console.log(neo);
console.log(sardor);
console.log(neo.hasOwnProperty('birth'));
console.log(neo.__proto__);
console.log(sardor.__proto__);
console.log(Neo.prototype.isPrototypeOf(neo));
console.log(Neo.prototype);
