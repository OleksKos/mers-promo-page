const linkHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linkHead, mainScroll];
const mobileMenuActive = document.querySelector('.menu');
const mobileMenuIconActive = document.querySelector('.humburger-menu');
newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (mobileMenuActive.classList.contains('menu-active')) {
      mobileMenuActive.classList.remove('menu-active');
    }
    if (mobileMenuIconActive.classList.contains('humburger-menu-active')) {
      mobileMenuIconActive.classList.remove('humburger-menu-active');
    }
    const ID = event.target.getAttribute('href').substr(1);
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    //console.dir - Выводит элемент ввиде объекта
  })
})