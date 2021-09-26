const mobileMenuIcon = document.querySelector('.humburger-menu');
const mobileMenu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenuIcon.classList.toggle('humburger-menu-active');
  mobileMenu.classList.toggle('menu-active');
})

window.addEventListener('scroll', () => {
  mobileMenuIcon.classList.remove('humburger-menu-active');
  mobileMenu.classList.remove('menu-active');
})


const header = document.querySelector('.header');
const headerReplace = document.querySelector('.header__replace');
let startPosition = 0;
let scrolled;
window.addEventListener('scroll', function () {
  scrolled = this.pageYOffset;
  if (scrolled > 150 && scrolled > startPosition) {
    // header.classList.add('out');
    header.classList.add('move');
    headerReplace.classList.remove('hidden');
  } else {
    // header.classList.remove('out');
    // header.classList.remove('move');
    // headerReplace.classList.add('hidden');
  }
  startPosition = scrolled;
})

// const burger = document.querySelector('.humburger-menu');
// const menuElem = document.querySelector('.menu');
// const toggleMenu = () => {
//   menuElem.classList.toggle('menu-active');
//   burger.classList.toggle('humburger-menu-active');
// }
// burger.addEventListener('click', () => toggleMenu());