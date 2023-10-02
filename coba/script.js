const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

function updateSlide() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Tambahkan event listener untuk tombol navigasi
document.querySelector('#prevBtn').addEventListener('click', prevSlide);
document.querySelector('#nextBtn').addEventListener('click', nextSlide);

// Jalankan slide otomatis
setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
