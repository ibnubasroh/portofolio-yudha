function tambahTugas() {
  const input = document.getElementById("tugasInput");
  const teks = input.value.trim();
  if (teks === "") return;

  const ul = document.getElementById("daftarTugas");
  const li = document.createElement("li");
  li.textContent = teks;

  // Toggle selesai
  li.addEventListener("click", function () {
    li.classList.toggle("selesai");
  });

  // Klik kanan untuk hapus
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    ul.removeChild(li);
  });

  ul.appendChild(li);
  input.value = "";
}