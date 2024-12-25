const menuicon = document.getElementById('icon-menu');
const menulist = document.getElementById('menu-list');

menuicon.addEventListener("click", () => {
    menulist.classList.toggle('hidden');
})

// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxuwLN0ran-WPE-AQH5zDcVaIt7gV3RgNi9X9dkzVdpr6VHpuNw38wRXgZpfy5pN43Oiw/exec';
const form = document.forms['Contact-form-web-2'];
const formLabel = document.getElementById("myForm");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      form.reset(); // reset form after submission
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});

