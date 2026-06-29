// js/script.js — Pabrik Tempe Budianto

// ====== NAVBAR TOGGLE (Vanilla JS — tidak butuh jQuery) ======
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.navbar-toggle');
    var navMenu = document.querySelector('.navbar-collapse');

    if (toggleBtn && navMenu) {
        // Sembunyikan menu hanya di mobile saat pertama load
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
        }

        toggleBtn.addEventListener('click', function () {
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
        });

        // Kembalikan menu saat layar diperbesar ke desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) {
                navMenu.style.display = '';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
});

// ====== CAROUSEL (jQuery — jika tersedia) ======
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        $('#hero-carousel').carousel({ interval: 4000 });
    });
}
