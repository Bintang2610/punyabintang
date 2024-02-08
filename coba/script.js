const character1 = document.getElementById('character1');
const character2 = document.getElementById('character2');
const scoreValue = document.getElementById('scoreValue');
const popup = document.getElementById('popup');

let isDragging = false;
let score = 0;

// Membuat karakter 1 bisa bergerak dengan mouse
character1.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

// Mengatur lokasi karakter 2
character2.style.left = '300px'; // Ganti dengan posisi x karakter 2
character2.style.top = '200px'; // Ganti dengan posisi y karakter 2

// Menampilkan peringatan jika karakter 1 menyentuh karakter 2 dan meningkatkan skor
function checkCollision() {
    const rect1 = character1.getBoundingClientRect();
    const rect2 = character2.getBoundingClientRect();

    if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    ) {
        score++;
        scoreValue.textContent = score;
        if (score === 100) {
            alert('horee dah 100 lope nya klo sampe 250 ada apaa yaaa🤔🤔');
        }
        if (score === 250) {
            alert('waw dah 250😳😳😳 klo sampe 500 ada harta karun kahh');
        }
        if (score === 500) {
            alert('lope banget dah 500❤️❤️❤️❤️😍😍😍😍 dikit lagi nihh sampe 1000');
        }
        if (score % 1000 === 0 && score !== 0) {
            showPopup();
            alert('congrats❤️❤️❤️❤️😍😍😍😍coba pencet ok😳');
        }
        if (score % 10 === 0 && score !== 0) {
            generateSmallImages();
        }
    }
}

function startDrag(event) {
    isDragging = true;
}

function drag(event) {
    if (isDragging) {
        const x = event.clientX;
        const y = event.clientY;
        character1.style.left = x + 'px';
        character1.style.top = y + 'px';
        checkCollision();
    }
}

function endDrag(event) {
    isDragging = false;
}

// Membuat banyak gambar kecil yang menyebar ke seluruh layar
function generateSmallImages() {
    for (let i = 0; i < 50; i++) {
        const smallImage = document.createElement('div');
        smallImage.classList.add('small-image');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        smallImage.style.left = x + 'px';
        smallImage.style.top = y + 'px';
        document.body.appendChild(smallImage);
    }
}

// Menampilkan popup
function showPopup() {
    popup.style.display = 'block';
}