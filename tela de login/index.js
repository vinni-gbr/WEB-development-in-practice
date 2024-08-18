
let isFlipped = false;

function flipScreen() {
    const container = document.getElementById('flipContainer');
    if (isFlipped) {
        container.style.transform = 'rotateY(0deg)';
    } else {
        container.style.transform = 'rotateY(180deg)';
    }
    isFlipped = !isFlipped;
}