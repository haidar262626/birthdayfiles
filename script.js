document.addEventListener("DOMContentLoaded", () => {

    console.log("JS aktif ✔");

    // OPEN BUTTON
    const btn = document.getElementById("open-btn");
    const opening = document.getElementById("opening-screen");
    const main = document.getElementById("main");
    const loading = document.getElementById("loading-screen");

    // ⛔ PASTIKAN LOADING HILANG
    setTimeout(() => {
        if (loading) loading.style.display = "none";
    }, 1500);

    // OPEN GIFT
    if (btn) {
        btn.addEventListener("click", () => {
            console.log("Button diklik ✔");

            if (opening) opening.style.display = "none";
            if (main) main.classList.remove("hidden");

            document.getElementById("music").play();

            setInterval(createHeart, 500);

            //startSlider();
        });
    }

    // TYPEWRITER TEST
    const text = `Untuk kamu yang aku sayangi ❤️

Aku tidak tahu bagaimana cara semesta mempertemukan kita,
tapi aku bersyukur kamu hadir di hidupku.

Terima kasih sudah bertahan, sudah tersenyum, dan sudah menjadi alasan aku semangat setiap hari.

Kalau dunia terasa berat, ingat ya...
aku selalu ada di sini untuk kamu ❤️`;
    let i = 0;

    function type() {
        const el = document.getElementById("typing");
        if (!el) return;

        if (i < text.length) {
            el.innerHTML += text[i];
            i++;
            setTimeout(type, 50);
        }
    }

    setTimeout(type, 2000);

    // CONFETTI SIMPLE CHECK
    const confettiBtn = document.getElementById("confetti-btn");
    if (confettiBtn) {
        confettiBtn.onclick = () => {
            const confettiBtn = document.getElementById("confetti-btn");

            if (confettiBtn) {
                confettiBtn.onclick = () => {

                    confetti({
                        particleCount: 200,
                        spread: 120,
                        origin: { y: 0.6 }
                    });

                };
            }
        };
    }

    function createHeart() {
        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    let currentSlide = 0;

    function startSlider() {
        const slides = document.querySelectorAll(".slide");

        setInterval(() => {
            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");
        }, 3000);
    }

});