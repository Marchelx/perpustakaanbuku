const tabelBuku = document.getElementById("tabelBuku");
const dataTransaksi = document.getElementById("dataTransaksi");

const selectPinjam = document.getElementById("buku");
const selectKembali = document.getElementById("bukuKembali");

const formPinjam = document.getElementById("formTransaksi");
const formKembali = document.getElementById("formPengembalian");

// DATA BUKU
let bukuList = [
  { judul: "Pemrograman Web 1", pengarang: "Samso Supriyatna", tahun: 2026, status: "Tersedia" },
  { judul: "Basis Data", pengarang: "Ari Putra", tahun: 2026, status: "Tersedia" },
  { judul: "Konsep Sistem Informasi", pengarang: "Fahrul Roji", tahun: 2026, status: "Tersedia" }
];

// RENDER BUKU
function renderBuku() {
  tabelBuku.innerHTML = "";
  selectPinjam.innerHTML = `<option value="">-- Pilih Buku --</option>`;
  selectKembali.innerHTML = `<option value="">-- Pilih Buku --</option>`;

  bukuList.forEach((b, i) => {
    tabelBuku.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${b.judul}</td>
        <td>${b.pengarang}</td>
        <td>${b.tahun}</td>
        <td>
          <span class="badge ${b.status === "Tersedia" ? "bg-success" : "bg-danger"}">
            ${b.status}
          </span>
        </td>
      </tr>
    `;

    if (b.status === "Tersedia") {
      selectPinjam.innerHTML += `<option>${b.judul}</option>`;
    } else {
      selectKembali.innerHTML += `<option>${b.judul}</option>`;
    }
  });
}

// PINJAM BUKU
formPinjam.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const buku = selectPinjam.value;
  const jumlah = document.getElementById("jumlah").value;
  const tanggal = document.getElementById("tanggal").value;

  if (!nama || !buku || !jumlah || !tanggal) {
    alert("Lengkapi data peminjaman!");
    return;
  }

  dataTransaksi.innerHTML += `
    <tr>
      <td>${nama}</td>
      <td>${buku}</td>
      <td>${jumlah}</td>
      <td>${tanggal}</td>
    </tr>
  `;

  bukuList.forEach(b => {
    if (b.judul === buku) b.status = "Tidak Tersedia";
  });

  formPinjam.reset();
  renderBuku();
});

// KEMBALIKAN BUKU
formKembali.addEventListener("submit", function (e) {
  e.preventDefault();

  const buku = selectKembali.value;
  const tanggal = document.getElementById("tanggalKembali").value;

  if (!buku || !tanggal) {
    alert("Lengkapi data pengembalian!");
    return;
  }

  bukuList.forEach(b => {
    if (b.judul === buku) b.status = "Tersedia";
  });

  formKembali.reset();
  renderBuku();
  alert("Buku berhasil dikembalikan!");
});

// LOAD AWAL
renderBuku();
