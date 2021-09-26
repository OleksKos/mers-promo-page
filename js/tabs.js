// const tabBtn = document.querySelectorAll('.design-list__item');
// const tabs = document.querySelectorAll('.design__descr');
// const futeredImg = document.querySelectorAll('.feature__img');
// const designImages = document.querySelectorAll('.design-images');

// tabBtn.forEach((item) => {

//   item.addEventListener('click', () => {

//     tabBtn.forEach((element) => {
//       element.classList.remove('design-list__item_active');
//     });

//     item.classList.add('design-list__item_active');

//     tabs.forEach(tab => {
//       tab.classList.toggle('hidden');
//     })

//     futeredImg.forEach(img => {
//       img.classList.toggle('hidden');
//     })

//     designImages.forEach(img => {
//       debugger;
//       img.classList.toggle('hidden');
//       setTimeout(show, 1000);
//     })

//   })

// })

// function show() {
//   img.classList.add('show');
// }


const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
console.log(tabsHandlerElems);
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
console.log(tabsContentElems);
//design-list__item_active
for (let btn of tabsHandlerElems) {

  btn.addEventListener('click', () => {

    tabsHandlerElems.forEach(item => {
      item.classList.remove('design-list__item_active');
    })
    btn.classList.add('design-list__item_active');
    debugger;
    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    })

  });
}

