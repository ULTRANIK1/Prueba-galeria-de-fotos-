/*Name this external file gallery.js*/
height="604"

function upDate(previewPic){
  // 1) Cambiar la URL de la imagen de fondo del div con id = "image"
  document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
  // 2) Cambiar el texto del div con id = "image" al alt del previewPic
  document.getElementById('image').innerText = previewPic.alt;
}

function unDo(){
  document.getElementById('image').style.backgroundImage = 'url(' + image.src + ')';

  document.getElementById('image').innerText;
  
}

// Inicialización de la página
function initialize() {
  console.log("Page has loaded and initialize() function is called.");
  
  // Obtener todas las imágenes con la clase "preview"
  let images = document.querySelectorAll('.preview');
  
  // Bucle para recorrer cada imagen y agregar listeners
  images.forEach((image, index) => {
    image.addEventListener('focus', () => upDate(image));
    image.addEventListener('blur', () => unDo());
    console.log(`Added focus and blur listeners to image ${index}`);
  });
}