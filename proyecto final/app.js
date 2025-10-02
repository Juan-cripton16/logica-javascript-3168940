// MODO OSCURO
document.querySelector(".dark-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎵 AUDIO
const audio = document.querySelector("#audio");
const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    heroBtn.textContent = "⏸ Pausar";
  } else {
    audio.pause();
    heroBtn.textContent = "▶ Escuchar";
  }
});

// 🔍 FILTRAR ÁLBUMES
document.querySelector("#filtro").addEventListener("keyup", () => {
  let filtro = document.querySelector("#filtro").value.toLowerCase();
  document.querySelectorAll(".album").forEach(album => {
    album.style.display = album.textContent.toLowerCase().includes(filtro) ? "block" : "none";
  });
});

// 📩 VALIDAR FORMULARIO
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault(); // evita recargar
  let nombre = document.querySelector("#nombre").value.trim();
  let email = document.querySelector("#email").value.trim();
  let mensaje = document.querySelector("#mensaje").value.trim();

  document.querySelector("#errorNombre").textContent = nombre ? "" : "Ingresa tu nombre";
  document.querySelector("#errorEmail").textContent = /\S+@\S+\.\S+/.test(email) ? "" : "Correo inválido";
  document.querySelector("#errorMensaje").textContent = mensaje ? "" : "Escribe un mensaje";

  if (nombre && email && mensaje) {
    alert("Mensaje enviado ✅");
    e.target.reset();
  }
});

// ⬆ BOTÓN ARRIBA
const topBtn = document.querySelector("#topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🎬 ANIMACIÓN FADE-IN EN SCROLL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-section").forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// 📱 MENÚ RESPONSIVE
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});


//GALERIA

// 🎨 CAMBIAR IMAGEN EN GALERÍA
const img = document.querySelector("#imgPrincipal");
const btnCambiar = document.querySelector("#cambiarImg");

const imagenes = [
  "rodolfo2.png",
  
];

let indice = 0;

btnCambiar.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length; // avanza y vuelve al inicio
  img.src = imagenes[indice];
});
