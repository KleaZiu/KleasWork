var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(imgElement) {
    fullImgBox.style.display = "flex";
    fullImg.src = imgElement.src;

    fullImgBox.addEventListener("click", closeFullImg);
}

function closeFullImg() {
    fullImgBox.style.display = "none";

    fullImgBox.removeEventListener("click", closeFullImg);
}

const image_array = [

    'Askoll Elektrik/Askoll Elektrik NGS (1).jpg',
    'Askoll Elektrik/Askoll Elektrik NGS (2).jpg',
    'Askoll Elektrik/Askoll Elektrik NGS (3).jpg',
    'Askoll Elektrik/askoll presentation (1).jpg',
    'Askoll Elektrik/askoll presentation (2).jpg',
    'Askoll Elektrik/askoll presentation (3).jpg',
    'Askoll Elektrik/askoll presentation (4).jpg',
    'Askoll Elektrik/askoll presentation (5).jpg',
    'Moto Tirana/BRP Albania (1).jpg',
    'Moto Tirana/BRP Albania (3).jpg',
    'Moto Tirana/Business Brochure BRP-1.jpg',
    'Moto Tirana/Business Brochure BRP-1.jpg',
    'Moto Tirana/cardo systems (1).jpg',
    'Moto Tirana/cardo systems (2).jpg',
    'Moto Tirana/cardo systems (3).jpg',
    'Moto Tirana/Dunlop (1).jpg',
    'Moto Tirana/Dunlop (2).jpg',
    'Moto Tirana/Dunlop (3).jpg',
    'Moto Tirana/Informacione (1).jpg',
    'Moto Tirana/Informacione (2).jpg',
    'Moto Tirana/Informacione (3).jpg',
    'Moto Tirana/kokore post (1).jpg',
    'Moto Tirana/kokore post (2).jpg',
    'Moto Tirana/kokore post (3).jpg',
    'Moto Tirana/LS2 Evo (1).jpg',
    'Moto Tirana/LS2 Evo (2).jpg',
    'Moto Tirana/LS2 Evo (3).jpg',
    'Moto Tirana/LS2 New Arrivals (1).jpg',
    'Moto Tirana/LS2 New Arrivals (2).jpg',
    'Moto Tirana/LS2 New Arrivals (3).jpg',
    'Moto Tirana/Repsol post (1).jpg',
    'Moto Tirana/Repsol post (2).jpg',
    'Moto Tirana/Repsol post (3).jpg',
    'Psikologu/psikologu juaj (1).jpg',
    'Psikologu/psikologu juaj (2).jpg',
    'Psikologu/psikologu juaj (3).jpg',
    'Psikologu/psikologu juaj (4).jpg',
    'Psikologu/psikologu juaj (5).jpg',
    'Psikologu/psikologu juaj (6).jpg',
    'Psikologu/psikologu juaj (7).jpg',
    'Psikologu/psikologu juaj (8).jpg',
    'Psikologu/psikologu juaj (9).jpg',
    'Hajde/1.jpg',
    'Hajde/2.jpg',
    'Hajde/3.jpg',
    'Hajde/4.jpg',
    'Hajde/5.jpg',
    'Hajde/6.jpg',
    'Hajde/7.jpg',
    'Hajde/8.jpg',
    'Hajde/9.jpg',
    'Hajde/10.jpg',
    'Hajde/11.jpg',
    'Hajde/12.jpg',
    'Hajde/13.jpg',
    'Hajde/14.jpg',
    'Hajde/15.jpg',
    'Hajde/16.jpg',
    'Hajde/17.jpg',
    'Hajde/18.jpg',

]

const imageGallery = document.getElementById('dynamic-photo-container');
image_array.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;

    img.addEventListener('click', () => openFullImg(img));
 
    imageGallery.appendChild(img);
});
