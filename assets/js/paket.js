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



// AKTIFKAN BUTTON MODAL DI KONTEN PAKET WISATA
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
            "1 Set Alat Snorkling",
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

    },

     paket4: {
        nama: "1 Destinasi",
        jenis: "Private Trip",
        harga: "Rp 1.500.000",

        destinasi: [
            "Pulau Beras Basah",
        ],

        fasilitas: [
            "Transportasi kapal PP",
            "Tour guide wisata lokal",
            "1 Set alat snorkling",
            "Waterspot Banana Boat",
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
}

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

// JALANKAN BUTTON PILIH TRIP 
const paketWisata = document.getElementById("paketWisataContainer");

if(paketWisata) {
    const btnPrivate = document.getElementById("btnPrivate");
    const btnOpen = document.getElementById("btnOpen");

    const semuaPaket= paketWisata.querySelectorAll(".card-paket");
    
    function tampilkanPrivate() {
        semuaPaket.forEach(function(card) {
            if (card.dataset.jenis === "private") {
                card.classList.remove("hidden");
            } else{
                card.classList.add("hidden");
            }
        });

        btnPrivate.classList.add("active");
        btnOpen.classList.remove("remove");
    }

    function tampilkanOpen() {
        semuaPaket.forEach(function(card) {
            if(card.dataset.jenis === "open"){
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
        btnOpen.classList.add("active");
        btnPrivate.classList.remove("active");
    }

    btnPrivate.addEventListener("click", tampilkanPrivate);
    btnOpen.addEventListener("click", tampilkanOpen);

    tampilkanPrivate();
}


// ANIMASI
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
