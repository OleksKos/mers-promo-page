const anyForm = document.querySelectorAll('.form');
anyForm.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {};
    for (const { name, value } of form.elements) {
      if (name) {
        data[name] = value;
      }
    }
    let trueFalse = checkFields(form);
    if (trueFalse === true) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => {
          // console.log(response);
          if (response.status === 200 || response.status === 201) {
            return response.json()
          } else {
            throw new Error(response.status);
          }
        })
        .then(data => {
          alert('Данные ушли');
          form.reset();
        })
        .catch(error => {
          alert('404')
        })
    } else {
      alert('Не все поля заполнены');
    }
  }
  )
})

function checkFields(form) {
  let allInputs = form.querySelectorAll('.input');
  for (let i = 0; i < allInputs.length; i++) {
    const element = allInputs[i];
    if (element.value === '') {
      return false;
    }
  }
  return true;
}
