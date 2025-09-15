const contenedor = document.getElementById("contenedor");
const Titulo = document.querySelector(".titulo");
const btnSig = document.querySelector(".btn-sig");
const btnAnt = document.querySelector(".btn-ant");

let indice = 0;
const totalImagenes = contenedor.children.length;

btnSig.addEventListener("click", () => {
    indice++;
    if (indice >= totalImagenes) {
        indice = 0;
    }
    actualizar();
});

btnAnt.addEventListener("click", () => {
    indice--;
    if (indice < 0) {
        indice = totalImagenes - 1;
    }
    actualizar();
});

function actualizar() {
    const desplazamiento = -indice * 400; 
    contenedor.style.transform = `translateX(${desplazamiento}px)`;
    Titulo.textContent = `Imagen ${indice + 1}`;
}