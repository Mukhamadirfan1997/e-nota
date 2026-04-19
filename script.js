// ===== JAM REALTIME (UNTUK TAMPILAN DASHBOARD) =====
function updateClock() {
  const now = new Date();
  // Menampilkan waktu di elemen #clock tanpa kata "pukul"
  const optionsDate = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const tgl = now.toLocaleDateString("id-ID", optionsDate);
  const jam = now
    .toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(/\./g, ":");

  document.getElementById("clock").innerText = `${tgl} ${jam}`;
}
setInterval(updateClock, 1000);
updateClock();

// ===== DATA BBM =====
const bbmList = {
  PERTALITE: 10000,
  PERTAMAX: 12300,
  "PERTAMAX TURBO": 14000,
  DEXLITE: 13500,
  "PERTAMINA DEX": 15000,
};

// ===== INISIALISASI HALAMAN =====
window.onload = () => {
  const select = document.getElementById("bbm");
  for (let key in bbmList) {
    let opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    select.appendChild(opt);
  }

  // Default pilihan
  select.value = "PERTAMAX";
  document.getElementById("harga").value = bbmList["PERTAMAX"];

  // Input tanggal dibiarkan kosong agar sistem menggunakan jam realtime saat Preview/Print
};

// Update harga otomatis saat jenis BBM diganti
document.addEventListener("change", function (e) {
  if (e.target.id === "bbm") {
    document.getElementById("harga").value = bbmList[e.target.value];
    hitung();
  }
});

// ===== FUNGSI HITUNG LITER =====
function hitung() {
  const nominal = parseFloat(document.getElementById("nominal").value) || 0;
  const harga = parseFloat(document.getElementById("harga").value) || 0;
  let liter = harga > 0 ? nominal / harga : 0;

  // Menggunakan koma sebagai pemisah desimal sesuai standar Indonesia
  document.getElementById("liter").value = liter.toFixed(2).replace(".", ",");
}

// ===== FUNGSI HELPER LAYOUT =====
function centerText(text, width = 32) {
  text = text.trim();
  if (text.length >= width) return text;
  const margin = Math.floor((width - text.length) / 2);
  return " ".repeat(margin) + text;
}

function padRight(label, value) {
  // PadEnd(13) memastikan titik dua (:) sejajar secara vertikal
  return label.padEnd(13, " ") + " : " + value;
}

function formatTanggal(dateInput) {
  const d = new Date(dateInput);
  const tgl = d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const jam = d
    .toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(/\./g, ":");

  return `${tgl} ${jam}`;
}

function getTanggalInput() {
  const inputVal = document.getElementById("tanggal").value;
  // Jika input kosong, maka ambil waktu saat ini (Realtime)
  return inputVal ? new Date(inputVal) : new Date();
}

// ===== PENGAMBILAN & PENGOLAHAN DATA =====
let lastData = null;

function ambilData() {
  const nominal = parseFloat(document.getElementById("nominal").value) || 0;
  const harga = parseFloat(document.getElementById("harga").value) || 0;
  let liter = harga > 0 ? nominal / harga : 0;

  // Format Total: 30.000 menjadi 30. 000 (sesuai contoh gambar)
  let totalFormatted = nominal.toLocaleString("id-ID").replace(/\./g, ". ");

  return {
    bbm: document.getElementById("bbm").value,
    liter: liter.toFixed(2).replace(".", ","),
    harga: harga.toLocaleString("id-ID"),
    total: totalFormatted,
    pompa: document.getElementById("pompa").value || "",
    selang: document.getElementById("selang").value || "",
    plat: document.getElementById("plat").value || "",
    odo: document.getElementById("odo").value || "",
    nota: Math.floor(100000 + Math.random() * 900000),
  };
}

// ===== GENERATE PREVIEW =====
function generateNota() {
  const n = ambilData();
  const tgl = formatTanggal(getTanggalInput());

  const preview = `SPBU 54.671.17
JL, RAYA REJOSO PASURUAN
PASURUAN
Tlp. 085330231112
${tgl}
- - - - - - - - - - - - - - - -
${padRight("Nomor Nota", n.nota)}
${padRight("Nomor Pompa", n.pompa)}
${padRight("Nomor Selang", n.selang)}
${padRight("Jenis BBM", n.bbm)}
${padRight("Plat Nomor", n.plat)}
${padRight("Odometer", n.odo)}
${padRight("Liter.", n.liter)}
${padRight("Harga/L iter.", n.harga)}
Total ${n.total}
- - - - - - - - - - - - - - - -
AYO PATUHI 5M
PROTOKOL KESEHATAN
TERIMA KASIH SELAMAT JALAN`;

  document.getElementById("nota").innerText = preview;
  lastData = { ...n, tglString: tgl };
}

// ===== PRINT STRUK (METODE NATIVE BROWSER) =====
function printStruk() {
  if (!lastData) {
    alert("Silakan klik Preview terlebih dahulu!");
    return;
  }

  // 1. Browser akan memanggil sistem print bawaan Windows
  // 2. Tampilan struk akan otomatis disesuaikan (58mm) berkat kode CSS yang sudah kita tanamkan tempo hari.
  window.print();
}

// ===== PRINT MOBILE (VIA RAWBT APP) =====
function printRawBT() {
  if (!lastData) {
    alert("Silakan klik Preview terlebih dahulu!");
    return;
  }

  // Mengambil teks dari nota preview
  const text = document.getElementById("nota").innerText;
  
  // Encoding teks agar aman dikirim melalui link (Intent)
  const encodedText = encodeURIComponent(text);
  
  // Mencoba membuka aplikasi RawBT menggunakan sistem Android Intent
  // Jika aplikasi RawBT terinstall, ia akan otomatis menangkap pesan ini
  const intentUrl = `intent:#Intent;component=ru.a402d.rawbtprinter.activity.PrintActivity;S.text=${encodedText};end`;
  
  window.location.href = intentUrl;
}

// ===== MODAL HELP LOGIC =====
function toggleHelpModal() {
  const modal = document.getElementById("helpModal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Menutup modal jika user mengklik di luar area modal
window.onclick = function(event) {
  const modal = document.getElementById("helpModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ===== REGISTRASI PWA SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker terdaftar!', reg))
      .catch(err => console.error('Gagal daftar Service Worker:', err));
  });
}
