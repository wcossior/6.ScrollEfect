const boxes = document.querySelectorAll('.box');

window.addEventListener("scroll", ShowBoxes);

function ShowBoxes() {
    let windowHeight = window.innerHeight;

    boxes.forEach(box => {
        let topPositionBox = box.getBoundingClientRect().top;
        if (topPositionBox < windowHeight * 0.75) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    });


}
