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

    '/projects/KleasWork/photo/Askoll Elektrik/Askoll Elektrik NGS (1).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/Askoll Elektrik NGS (2).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/Askoll Elektrik NGS (3).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/askoll presentation (1).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/askoll presentation (2).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/askoll presentation (3).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/askoll presentation (4).jpg',
    '/projects/KleasWork/photo/Askoll Elektrik/askoll presentation (5).jpg',
    '/projects/KleasWork/photo/Moto Tirana/BRP Albania (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/BRP Albania (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Business Brochure BRP-1.jpg',
    '/projects/KleasWork/photo/Moto Tirana/Business Brochure BRP-1.jpg',
    '/projects/KleasWork/photo/Moto Tirana/cardo systems (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/cardo systems (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/cardo systems (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Dunlop (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Dunlop (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Dunlop (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Informacione (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Informacione (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Informacione (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/kokore post (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/kokore post (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/kokore post (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 Evo (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 Evo (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 Evo (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 New Arrivals (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 New Arrivals (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/LS2 New Arrivals (3).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Repsol post (1).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Repsol post (2).jpg',
    '/projects/KleasWork/photo/Moto Tirana/Repsol post (3).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (1).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (2).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (3).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (4).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (5).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (6).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (7).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (8).jpg',
    '/projects/KleasWork/photo/Psikologu/psikologu juaj (9).jpg',
    '/projects/KleasWork/photo/Hajde/1.jpg',
    '/projects/KleasWork/photo/Hajde/2.jpg',
    '/projects/KleasWork/photo/Hajde/3.jpg',
    '/projects/KleasWork/photo/Hajde/4.jpg',
    '/projects/KleasWork/photo/Hajde/5.jpg',
    '/projects/KleasWork/photo/Hajde/6.jpg',
    '/projects/KleasWork/photo/Hajde/7.jpg',
    '/projects/KleasWork/photo/Hajde/8.jpg',
    '/projects/KleasWork/photo/Hajde/9.jpg',
    '/projects/KleasWork/photo/Hajde/10.jpg',
    '/projects/KleasWork/photo/Hajde/11.jpg',
    '/projects/KleasWork/photo/Hajde/12.jpg',
    '/projects/KleasWork/photo/Hajde/13.jpg',
    '/projects/KleasWork/photo/Hajde/14.jpg',
    '/projects/KleasWork/photo/Hajde/15.jpg',
    '/projects/KleasWork/photo/Hajde/16.jpg',
    '/projects/KleasWork/photo/Hajde/17.jpg',
    '/projects/KleasWork/photo/Hajde/18.jpg',

]

const imageGallery = document.getElementById('dynamic-photo-container');
image_array.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    
    // Attach the click event listener to each dynamically created image
    img.addEventListener('click', () => openFullImg(img));

    // Append the image to the imageGallery div  
    imageGallery.appendChild(img);
});
