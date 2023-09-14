const image = document.querySelector('.gallery_image');

function previousPhoto() {
    image.src = './assets/photo3.jpg';
}

function nextPhoto() {
    image.src = './assets/photo1.jpg';
}