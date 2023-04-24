/* const menu = document.querySelector(".menuToggle");
const navigator = document.querySelector(".navigation");

menu.onclick = function () {
    navigator.classList.toggle('open');
}

const lista = document.querySelectorAll(".list");

function activarLink() {
    lista.forEach((item) =>
        item.classList.remove('active'))
        this.classList.add('active')
}
lista.forEach((item) =>
    item.addEventListener('click', activarLink)
)
*/
//modales
/* MODAL Eliminar */
// var modal = document.getElementById("targetModal");
// var btnAbrirModal = document.getElementById("btnAbrirModal");
// var btnCerrarModal = document.getElementsByClassName("cerrar-modal")[0];


// btnAbrirModal.onclick = function () {
//   modal.style.display = "block";
// }

// btnCerrarModal.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var openModalLinks = document.querySelectorAll('a[data-target]'); // seleccionar todas las etiquetas "a" con atributo "data-target"

for (var i = 0; i < openModalLinks.length; i++) {
  openModalLinks[i].addEventListener('click', function(event) {
    event.preventDefault(); // prevenir que la etiqueta "a" recargue la página al hacer clic
    
    var target = this.getAttribute('data-target');
    var modal = document.querySelector(target); // seleccionar el modal correspondiente al atributo "data-target"
    
    modal.style.display = 'block'; // mostrar el modal
  });
}

var closeModalButtons = document.querySelectorAll('.modal .close'); // seleccionar todos los botones "close" dentro de los modales

for (var i = 0; i < closeModalButtons.length; i++) {
  closeModalButtons[i].addEventListener('click', function() {
    var modal = this.parentElement.parentElement; // seleccionar el modal padre del botón "close"

    
    modal.style.display = 'none'; // ocultar el modal
    

    
  });
}

// var btnCerrarModal = document.getElementsByClassName(".cerrar-modal");

// btnCerrarModal.onclick = function () {
//   modal.style.display = "none";
// }
