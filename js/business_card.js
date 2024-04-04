document.addEventListener("mousemove", (e) => {
    rotateElements(e);
});

function rotateElements(event) {
    const wholeblock = document.querySelector(".whole_block");

    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 5;
    const offsetY = ((y - middleY) / middleY) * 5;

    wholeblock.style.transform = `perspective(5000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;

}