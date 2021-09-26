const accardionBtn = document.querySelectorAll('.feature__link');
const featureSub = document.querySelectorAll('.feature-sub');

for (let i = 0; i < accardionBtn.length; i++) {
  const element = accardionBtn[i];
  element.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('feature__link_active')) {
      e.currentTarget.classList.remove('feature__link_active');
      e.currentTarget.nextElementSibling.classList.add('hidden');
    } else {
      for (let j = 0; j < featureSub.length; j++) {
        featureSub[j].classList.add('hidden');
        accardionBtn[j].classList.remove('feature__link_active');
      }
      e.currentTarget.classList.add('feature__link_active');
      e.currentTarget.nextElementSibling.classList.remove('hidden');
    }
  })
}