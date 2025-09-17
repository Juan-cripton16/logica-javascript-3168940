


const flotante = document.querySelector("#flotante");
const cuadro = document.querySelector("#cuadro");
const equis = document.querySelector("#equis");
const sig = document.querySelector("#sig");
const ant = document.querySelector("#ant");
const imgprincipal = document.querySelector("#imgprincipal");
const miniaturas = document.querySelectorAll(".min");

let indiceActual = 0;


function mostrarLightbox() {
  flotante.style.top = "0px";
}


function ocultarLightbox() {
  flotante.style.top = "-100vh";
}


function mostrarImagen(indice) {
  
  if (indice < 0) {
    indiceActual = miniaturas.length - 1;
  } else if (indice >= miniaturas.length) {
    indiceActual = 0;
  } else {
    indiceActual = indice;
  }
   
  imgprincipal.src = miniaturas[indiceActual].src;
}


miniaturas.forEach((miniatura, indice) => {
  miniatura.addEventListener("click", () => {
    mostrarLightbox();
    mostrarImagen(indice);
  });
});


sig.addEventListener("click", () => {
  mostrarImagen(indiceActual + 1);
});


ant.addEventListener("click", () => {
  mostrarImagen(indiceActual - 1);
});


equis.addEventListener("click", () => {
  ocultarLightbox();
});


cuadro.addEventListener("click", (e) => {
  if (e.target === cuadro) {
    ocultarLightbox();
  }
});