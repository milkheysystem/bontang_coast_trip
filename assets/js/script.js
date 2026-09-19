

const navbar = document.getElementById("ulNavbar");
const hamburger = document.getElementById("hamburgerBar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// AKTIFKAN CARD TANGGAL 
const tanggalTampil =
    document.getElementById("tanggalTampil");

const btnTanggal =
    document.getElementById("btnTanggal");

const calendarTanggal =
    document.getElementById("calendarTanggal");

const calendarHari =
    document.getElementById("calendarHari");

const bulanTahun =
    document.getElementById("bulanTahun");

const bulanSebelumnya =
    document.getElementById("bulanSebelumnya");

const bulanBerikutnya =
    document.getElementById("bulanBerikutnya");


// TANGGAL HARI INI
const hariIni = new Date();
hariIni.setHours(0, 0, 0, 0);

// Tanggal yang sedang dipilih
let tanggalTerpilih = new Date(hariIni);

// Bulan yang sedang ditampilkan
let bulanTampil = new Date(
    hariIni.getFullYear(),
    hariIni.getMonth(),
    1
);

const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

function formatTanggal(tanggal) {
    return tanggal.toLocaleDateString("id-ID", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });

}

tanggalTampil.textContent =
    formatTanggal(tanggalTerpilih);

function renderCalendar() {

    calendarHari.innerHTML = "";
    const tahun =
        bulanTampil.getFullYear();

    const bulan =
        bulanTampil.getMonth();

    bulanTahun.textContent =
        `${namaBulan[bulan]} ${tahun}`;
    const hariPertama =
        new Date(tahun, bulan, 1);
    const posisiAwal =
        hariPertama.getDay();
    const jumlahHari =
        new Date(
            tahun,
            bulan + 1,
            0
        ).getDate();


    for (let i = 0; i < posisiAwal; i++) {
        const kosong =
            document.createElement("div");
        calendarHari.appendChild(kosong);
    }


    for (let tanggal = 1; tanggal <= jumlahHari; tanggal++) {
        const tombol =
            document.createElement("button");
        tombol.type = "button";
        tombol.textContent = tanggal;

        const tanggalSekarang =
            new Date(
                tahun,
                bulan,
                tanggal
            );
        tanggalSekarang.setHours(0, 0, 0, 0);
        if (
            tanggalSekarang.getTime() ===
            hariIni.getTime()
        ) {
            tombol.classList.add("hari-ini");
        }
        if (
            tanggalSekarang.getTime() ===
            tanggalTerpilih.getTime()
        ) {
            tombol.classList.add("terpilih");
        }
        if (
            tanggalSekarang < hariIni
        ) {
            tombol.classList.add("disabled");
        }
        tombol.addEventListener("click", function () {
            tanggalTerpilih =
                new Date(
                    tahun,
                    bulan,
                    tanggal
                );
            tanggalTerpilih.setHours(
                0, 0, 0, 0
            );
            tanggalTampil.textContent =
                formatTanggal(tanggalTerpilih);
            calendarTanggal.classList.remove("show");
            renderCalendar();
        });
        calendarHari.appendChild(tombol);
    }
}

btnTanggal.addEventListener("click", function () {
    calendarTanggal.classList.toggle("show");
});

tanggalTampil.addEventListener("click", function () {
    calendarTanggal.classList.toggle("show");
});

bulanSebelumnya.addEventListener("click", function (event) {
    event.stopPropagation();
    bulanTampil.setMonth(
        bulanTampil.getMonth() - 1
    );
    renderCalendar();
});

bulanBerikutnya.addEventListener("click", function (event) {
    event.stopPropagation();
    bulanTampil.setMonth(
        bulanTampil.getMonth() + 1
    );
    renderCalendar();
});


document.addEventListener("click", function (event) {
    if (
        !calendarTanggal.contains(event.target) &&
        !btnTanggal.contains(event.target) &&
        !tanggalTampil.contains(event.target)
    ) {
        calendarTanggal.classList.remove("show");
    }
});
renderCalendar();

// AKTIFKAN LOGIKA BTN WA PADA FORM BOKING 
const btnCtwa = document.getElementById("btnCtwa");
    btnCtwa.addEventListener("click", function(e){
        e.preventDefault();

        const destinasi = document.getElementById("destinasi").value;
        const layanan = document.getElementById("layanan").value;
        const jumlahOrang = document.getElementById("jumlahOrang").value;
        const tanggal = document.getElementById("tanggalTampil").textContent.trim();

        if(!destinasi){
            alert("Silahkan pilih destinasi terlebih dahulu.");
            return;
        }

        if(!layanan){
            alert("Silahkan pilih jenis layanan terlebih dahulu.");
            return;
        }
        if(!jumlahOrang){
            alert("Silahkan masukkan jumlah orang terlebih dahulu.");
            return;
        }
        if(!tanggal){
            alert("Silahkan pilih tanggal keberangkatan.");
            return;
        }

        const pesan = `Halo Bontang Coast Trip, Saya ingin memesan paket wisata.
        Destinasi: ${document.getElementById("destinasi").selectedOptions[0].text}
        Jenis Layanan: ${layanan}
        Jumlah Orang: ${jumlahOrang} orang
        Tanggal: ${tanggal}
        
        Mohon informasi lebih lanjut. Terima Kasih.`;

        const nomor = "6282254584336";
        const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");

    });


// AKTIFKAN MODAL DETAIL PAKET
const paket = {
    paket1: {
        nama: "3 Destinasi",
        jenis: "Private Trip",
        harga: "Rp 2.400.000",

        destinasi: [
            "Pulau Berash Basah",
            "Pulau Segaja",
            "Kedindingan"
        ],

        fasilitas: [
            "Kapal",
            "Pelampung",
            "Tour Guide Wisata",
            "1 Set Alat Snorkling",
            "Waterspot Banana Boat",
            "Tempat Istirahat(Gazebo)",
            "Air Mineral",
            "Makan Siang",
            "Dokumentasi Premium:",
            "(Drone, Kamera underwater, Kamera DSLR)"
        ],

        paddleBoard: {
            judul: "Paket Sewa Paddle Board + Dokumentasi",

            deskripsi: `Hanya Rp 150.000/orang dengan minimal 2 orang agar kami dapat menyiapkan 1 unit paddle board. Jika hanya 1 orang, biaya menjadi Rp 250.000.`,

            termasuk: [
                "1 Unit paddle board",
                "Dokumentasi drone",
                "Foto kamera DSLR"
            ],

            penutup: "Siap menikmati pengalaman seru di laut bersama Bontang Coast Trip!"
        },

        nb: "Menginap dikenakan biaya tambahan BBM(450K)"

    },

    paket2: {
        nama: "3 Destinasi",
        jenis: "Open Trip",
        harga: "Rp 275.000",

        destinasi: [
            "Pulau Beras Basah",
            "Pulau Segajah",
            "Kedindingan",
        ],

        fasilitas: [
            "Transportasi Kapal PP",
            "Tour Guide Wisata",
            "Waterspot Banana Boat",
            "Tempat Istirahat(Gazebo)",
            "Air Mineral",
            "Makan Siang",
            "Dokumentasi premium:",
            "(Drone, Kamera underwater, Kamera DSLR)"
        ],

        paddleBoard: {
            judul: "Paket Sewa Paddle Board + Dokumentasi",

            deskripsi: `Hanya Rp 150.000/orang dengan minimal 2 orang agar kami dapat menyiapkan 1 unit paddle board. Jika hanya 1 orang, biaya menjadi Rp 250.000.`,

            termasuk: [
                "1 Unit paddle board",
                "Dokumentasi drone",
                "Foto kamera DSLR"
            ],

            penutup: "Siap menikmati pengalaman seru di laut bersama Bontang Coast Trip!"
        },

        nb: "Menginap dikenakan biaya tambahan BBM(450K)"
    },

    paket3: {
        nama: "1 Destinasi",
        jenis: "Open Trip",
        harga: "Rp 275.000",

        destinasi: [
            "Pulau Beras Basah",

        ],

        fasilitas: [
            "Transportasi kapal PP",
            "Tour guide wisata lokal",
            "1 Set alat snorkling",
            "Watersport banana boat",
            "Tempat istirahat (Gazebo)",
            "Air mineral",
            "Makan siang",
            "Dokumentasi premium:",
            '(Drone, Kamera underwater, Kamera DSLR)'
        ],
        paddleBoard: {
            judul: "Paket Sewa Paddle Board + Dokumentasi",

            deskripsi: `Hanya Rp 150.000/orang dengan minimal 2 orang agar kami dapat menyiapkan 1 unit paddle board. Jika hanya 1 orang, biaya menjadi Rp 250.000.`,

            termasuk: [
                "1 Unit paddle board",
                "Dokumentasi drone",
                "Foto kamera DSLR"
            ],
            penutup: "Siap menikmati pengalaman seru di laut bersama Bontang Coast Trip!"
        },

        nb: "Menginap dikenakan biaya tambahan BBM(450K)"

    }
};

// NYALAKAN MODAL 
function openDetailModal(id) {

    const data = paket[id];


    document.getElementById("modal-nama").textContent = data.nama;
    document.getElementById("modal-jenis").textContent = data.jenis;
    document.getElementById("modal-harga").textContent = data.harga;

    const destinasi = document.getElementById("modal-destinasi");
    destinasi.innerHTML = "";
    data.destinasi.forEach(item => {
        destinasi.innerHTML += `<li>${item}</li>`;
    });

    const fasilitas = document.getElementById("modal-fasilitas");
    fasilitas.innerHTML = "";
    data.fasilitas.forEach(item => {
        fasilitas.innerHTML += `<li>${item}</li>`;
    });

    const paddleBoard = document.getElementById("modal-paddle");

    paddleBoard.innerHTML = `
        <li>
            ${data.paddleBoard.judul}
        </li>

        <li>
            ${data.paddleBoard.deskripsi}
        </li>

        <li>
            Termasuk:
            <ul>
                ${data.paddleBoard.termasuk
            .map(item => `<li>${item}</li>`)
            .join("")}
            </ul>
        </li>

        <li>
            ${data.paddleBoard.penutup}
        </li>
    `;

    document.getElementById("nb").textContent = data.nb;

    document.getElementById("modal-detail")
        .classList.add("active");
}

function closeDetailModal() {

    document.getElementById("modal-detail")
        .classList.remove("active");

}

// NYALAKAN ANIMASI
const hiddenElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in, .fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
hiddenElements.forEach((el) =>{
    observer.observe(el);
});