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
const submitButton = form.querySelector('button[type="submit"]'); // Tombol submit
const statusMessage = document.getElementById('status-msg'); // Elemen status yang sudah ada

form.addEventListener('submit', e => {
  e.preventDefault();

  // Tampilkan pesan "sedang memproses"
  statusMessage.textContent = 'Sedang memproses...';
  statusMessage.style.display = 'block'; // Atau gunakan visibility: 'visible'
  statusMessage.style.color = 'blue'; // Warna untuk status memproses
  submitButton.disabled = true;

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      statusMessage.textContent = 'Form berhasil dikirim!';
      statusMessage.style.color = 'green'; // Warna hijau untuk berhasil
      form.reset(); // Reset form setelah berhasil
    })
    .catch(error => {
      console.error('Error!', error.message);
      statusMessage.textContent = 'Gagal mengirim form. Silakan coba lagi.';
      statusMessage.style.color = 'red'; // Warna merah untuk gagal
    })
    .finally(() => {
      submitButton.disabled = false; // Aktifkan tombol kembali
      
      // Sembunyikan pesan setelah 3 detik
      setTimeout(() => {
        statusMessage.style.display = 'none'; // Atau gunakan visibility: 'hidden'
      }, 3000);
    });
});



