const pertanyaan = [
  {
    soal: "Apa ibu kota Indonesia?",
    jawaban: ["Surabaya", "Bandung", "Jakarta", "Medan"],
    benar: "Jakarta"
  },
  {
    soal: "2 + 5 x 2 = ?",
    jawaban: ["14", "12", "10", "9"],
    benar: "12"
  },
  {
    soal: "Bahasa pemrograman untuk web frontend adalah...",
    jawaban: ["Python", "C++", "JavaScript", "PHP"],
    benar: "JavaScript"
  }
];

let indeks = 0;
let skor = 0;

function tampilkanPertanyaan() {
  const data = pertanyaan[indeks];
  document.getElementById("pertanyaan").textContent = data.soal;

  const pilihanBox = document.getElementById("pilihan");
  pilihanBox.innerHTML = "";

  data.jawaban.forEach(pil => {
    const btn = document.createElement("button");
    btn.className = "pilihan";
    btn.textContent = pil;
    btn.onclick = () => cekJawaban(pil);
    pilihanBox.appendChild(btn);
  });

  document.getElementById("selanjutnya").style.display = "none";
}

function cekJawaban(pilihan) {
  const data = pertanyaan[indeks];
  if (pilihan === data.benar) {
    skor++;
  }

  const semuaTombol = document.querySelectorAll(".pilihan");
  semuaTombol.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === data.benar) {
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "crimson";
    }
  });

  document.getElementById("selanjutnya").style.display = "inline-block";
}

function selanjutnya() {
  indeks++;
  if (indeks < pertanyaan.length) {
    tampilkanPertanyaan();
  } else {
    tampilkanHasil();
  }
}

function tampilkanHasil() {
  document.getElementById("pertanyaan-box").style.display = "none";
  document.getElementById("selanjutnya").style.display = "none";
  document.getElementById("skor").textContent = `Skor akhir kamu: ${skor} dari ${pertanyaan.length}`;
}

tampilkanPertanyaan();