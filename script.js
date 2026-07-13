const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;

    // Mouse position inside the container
    startX = e.pageX - slider.offsetLeft;

    // Current scroll position
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk;
});