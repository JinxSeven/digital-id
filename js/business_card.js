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

window.addEventListener('resize', function() {
    let viewportWidth = window.innerWidth;
    let zoomLevel = 110;

    if (viewportWidth >= 1200) {
        zoomLevel = 100;
    } else if (viewportWidth >= 992 && viewportWidth < 1200) {
        zoomLevel = 80;
    } else if (viewportWidth >= 768 && viewportWidth < 992) {
        zoomLevel = 70;
    } else if (viewportWidth >= 320 && viewportWidth < 768) {
        zoomLevel = 60;
    }

    document.body.style.zoom = zoomLevel + '%';
});
