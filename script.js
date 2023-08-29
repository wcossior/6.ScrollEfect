const boxes = document.querySelectorAll('.box');

document.addEventListener("DOMContentLoaded", ShowBoxes);

function ShowBoxes() {
    if (window.scrollY === 0) {
        boxes.forEach(box => {
            box.classList.add('show');
        });
    }

}
