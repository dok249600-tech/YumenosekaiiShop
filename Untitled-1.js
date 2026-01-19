<script>
/* ===== DANH SÁCH ẢNH SLIDER ===== */
const slides = [
    "banner-big-1.jpg",
    "banner-big-2.jpg",
    "banner-big-3.jpg"
];

let currentSlide = 0;
const heroImage = document.getElementById("heroImage");
const dots = document.querySelectorAll(".dot");

/* ===== HIỂN THỊ SLIDE ===== */
function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentSlide = index;
    heroImage.src = slides[currentSlide];

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

/* ===== NEXT / PREV ===== */
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

/* ===== DOT CLICK ===== */
function goSlide(index) {
    showSlide(index);
}

/* ===== AUTO SLIDER ===== */
let autoSlide = setInterval(nextSlide, 4000);

/* ===== DỪNG KHI HOVER (GIỐNG SHOP THẬT) ===== */
const heroLeft = document.querySelector(".hero-left");

heroLeft.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

heroLeft.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextSlide, 4000);
});
</script>// JavaScript Document