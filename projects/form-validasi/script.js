const form = document.getElementById('contactForm');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  let errors = [];

  if (nama === '') {
    errors.push("Nama tidak boleh kosong.");
  }

  if (email === '' || !email.includes('@')) {
    errors.push("Email tidak valid.");
  }

  if (pesan.length < 10) {
    errors.push("Pesan minimal 10 karakter.");
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join('<br>');
  } else {
    errorDiv.innerHTML = '';
    alert("Pesan berhasil dikirim!");
    form.reset();
  }
});
