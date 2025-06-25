let layar = document.getElementById('layar');

function tambahAngka(angka) {
  layar.value += angka;
}

function hitung() {
  try {
    layar.value = eval(layar.value);
  } catch {
    layar.value = 'Error';
  }
}

function hapus() {
  layar.value = '';
}
