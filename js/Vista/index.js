import Controlador from '../Controlador/controlador.js'

const Vista = {

  separarImagenes:function(imagenes){

    const imagenesSeparadas = imagenes.split(",");
    return imagenesSeparadas;

  },
  agregarImagenes: function (imagenesCortadas, tarjetaIcono) {
    for (let index = 0; index < imagenesCortadas.length; index++) {
      const imagen = document.createElement('img');
      imagen.src = imagenesCortadas[index];
      tarjetaIcono.append(imagen);
    }
  },

  mostrarProyectos: function (data) {

    data.forEach((element) => {
      const tarjetaSlider = document.getElementById('swiperWrapper')
      const swiperSlider = document.createElement('div')
      const tarjeta = document.createElement('div');
      const botonPagina = document.createElement('div')

      botonPagina.classList = 'tarjeta-boton'
      swiperSlider.classList = 'swiper-slide'
      tarjeta.classList = 'tarjeta'

      let imagenesCortadas = this.separarImagenes(element.imagenes)
       
      const tarjetaIcono = document.createElement('div');
      tarjetaIcono.classList ='tarjeta-icono';
      tarjetaIcono.setAttribute = ("id", "tarjetaIcono");


      tarjeta.innerHTML = ` 
        
        <div class="tarjeta-lenguaje">
            <p class="tarjeta__lenguaje">${element.lenguajes}</p>
        </div>
        <div class="tarjeta-titulo">
            <h3 class="tarjeta__titulo"> <span class="color-verde">${element.titulo}</span>
            </h3>
        </div>
        <div class="tarjeta-descripcion">
            <p class="tarjeta__descripcion">${element.descripcion}</p>
        </div>
    `

    if (element.pagina == 'si') {
      
      botonPagina.innerHTML = `
      <a target="_blank" href="${element.github}">Ver
      repositorio en github<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      <a target="_blank" href="${element.url}">Visitar
      página <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      `
      tarjeta.appendChild(botonPagina);
    }else{
      botonPagina.innerHTML=`
      <a target="_blank" href="${element.github}">Ver
      repositorio en github<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      `
      tarjeta.appendChild(botonPagina);
    }   
    this.agregarImagenes(imagenesCortadas, tarjetaIcono);
      tarjeta.append(tarjetaIcono)
      swiperSlider.append(tarjeta)
      tarjetaSlider.append(swiperSlider)
    })
  }

}
export default Vista;

document.addEventListener('DOMContentLoaded', function () {
  /*CONTROLADOR*/
  Controlador.transitionSmooth();
  Controlador.btn_whatsapp();
  Controlador.slider_lugar();
  Controlador.cambioBanner();
  Controlador.mostrarContenido();
})