
/* =========================
   MUSIK GLOBAL ANTAR HALAMAN
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    if (!music) return;

    music.volume = 0.25;

    // ambil waktu terakhir
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // mainkan musik
    music.play().catch(() => {});

    // simpan waktu terus
    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime);
    }, 500);
});
// simpan waktu musik sebelum pindah halaman
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const music = document.getElementById("bg-music");
        if (music) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    });
});


/* ================================
   LiteraKids - JavaScript Interaksi
   Versi RAPI & HALUS
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ===== OVERLAY & PAGE SHOW ===== */
    const overlay = document.querySelector(".page-overlay");

    requestAnimationFrame(() => {
        document.body.classList.add("page-show");
    });

    if (overlay) overlay.classList.remove("show");

    /* ===== ANIMASI CARD KATALOG ===== */
    const cards = document.querySelectorAll(".book-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(16px)";

        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 120 + index * 90);
    });

    /* ===== LOGO EFFECT ===== */
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.style.transition = "transform 0.25s ease";

        logo.addEventListener("mouseenter", () => {
            logo.style.transform = "scale(1.05)";
        });

        logo.addEventListener("mouseleave", () => {
            logo.style.transform = "scale(1)";
        });
    }
    /* ===== LOGO LITERAKIDS LUCU ===== */
const logoLetters = document.querySelectorAll(".logo-animate span");

logoLetters.forEach(letter => {
    letter.addEventListener("mouseenter", () => {
        letter.style.transform = "scale(1.3) rotate(8deg)";
    });

    letter.addEventListener("mouseleave", () => {
        letter.style.transform = "scale(1) rotate(0deg)";
    });
});


    /* ===== TRANSISI NAVIGASI ===== */
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const tujuan = this.getAttribute("href");

            setTimeout(() => {
                if (overlay) overlay.classList.add("show");
            }, 50);

            setTimeout(() => {
                window.location.href = tujuan;
            }, 600);
        });
    });

    /* =========================
       HERO BERANDA (TRANSISI TEKS)
       ========================= */
    const heroText = document.querySelector(".hero-text");
    const heroTitle = document.getElementById("hero-title");
    const heroBtn = document.querySelector(".hero-btn");

    if (heroText) {
        setTimeout(() => {
            heroText.classList.add("show");
        }, 150);
    }

    if (heroTitle) {
        // neon muncul tepat waktu (tidak telat)
        setTimeout(() => {
            heroTitle.classList.add("glow");
        }, 400);

        heroTitle.addEventListener("mouseenter", () => {
            heroTitle.style.transform = "scale(1.05)";
        });

        heroTitle.addEventListener("mouseleave", () => {
            heroTitle.style.transform = "scale(1)";
        });
    }

    if (heroBtn) {
        heroBtn.addEventListener("mouseenter", () => {
            heroBtn.style.transform = "scale(1.08)";
        });

        heroBtn.addEventListener("mouseleave", () => {
            heroBtn.style.transform = "scale(1)";
        });
    }

});

/* ===== VALIDASI FORM ===== */
function validasiForm() {
    const email = document.getElementById("email");

    if (!email || email.value.trim() === "") {
        alert("Email tidak boleh kosong 😊");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}

/* =========================
   QUIZ EDUKASI
   ========================= */

let skor = 0;
let dijawab = 0;
const totalSoal = 3;

function jawab(button, benar) {
    const buttons = button.closest(".quiz-options").querySelectorAll("button");

    // kunci jawaban
    buttons.forEach(btn => btn.disabled = true);

    if (benar) {
        button.classList.add("benar");
        skor++;
        document.getElementById("score").innerText = skor;
    } else {
        button.classList.add("salah");
    }

    dijawab++;
    const progress = (dijawab / totalSoal) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}


/* =========================
   TRANSISI HALAMAN EDUKASI
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const edukasi = document.querySelector(".fade-edukasi");

    if (edukasi) {
        setTimeout(() => {
            edukasi.classList.add("show");
        }, 200);
    }
});
 /* =========================
   TRANSISI HALAMAN KONTAK
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const kontak = document.querySelector(".fade-kontak");

    if (kontak) {
        setTimeout(() => {
            kontak.classList.add("show");
        }, 200);
    }
});
window.addEventListener("load", () => {
    const book = document.querySelector(".book-open");
    if (book) {
        setTimeout(() => {
            book.style.display = "none";
        }, 1500);
    }
});
// ===== TOGGLE MUSIK =====
const toggleBtn = document.getElementById("music-toggle");
const music = document.getElementById("bg-music");

if (toggleBtn && music) {
    toggleBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            toggleBtn.innerText = "🔊";
        } else {
            music.pause();
            toggleBtn.innerText = "🔇";
        }
    });
}
