document.addEventListener("DOMContentLoaded", function () {
    const head = document.querySelectorAll(".head");
    const pic = document.querySelectorAll(".pic");

    function showCategory(category) {
        pic.forEach(pics => {
            pics.style.display = (category === "all" || pics.classList.contains(category)) ? "block" : "none";
        });
    }

    head.forEach(heads => {
        heads.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            head.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            showCategory(category);
        });
    });

    showCategory("all");

    const images = document.querySelectorAll(".pic img");
    const bttn = document.querySelector(".button");
    const fullImg = document.getElementById("fullImg");
    const close = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        currentIndex = index;
        fullImg.src = images[currentIndex].src;
        bttn.classList.remove("hidden");
        bttn.classList.add("visible");
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            showImage(index);
        });
    });

    close.addEventListener("click", () => {
        bttn.classList.remove("visible");
        bttn.classList.add("hidden");
    });

    prev.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    window.addEventListener("click", (e) => {
        if (e.target === bttn) {
            bttn.classList.remove("visible");
            bttn.classList.add("hidden");
        }
    });
});
