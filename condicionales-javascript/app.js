//let nombre = prompt("Ingresa tu nombre:");
//let edad = prompt("Ingresa tu edad:");

//if (edad >= 18) {
// alert("Puedes ingresar a la discoteca.");
//} else {
// alert("No puedes ingresar a la discoteca.");
//}

//if (nombre.toLowerCase() === "mario" || nombre.toLowerCase() === "carlos") {
// // alert("eres cliente VIP.");
//}
// EJRCICIO 2

// 1. Pedir tres datos al usuario
const estatura = Number(prompt("Por favor, ingresa tu estatura en cm:"));
const velocidad = Number(prompt("Por favor, ingresa tu velocidad en km/h:"));
const edad = Number(prompt("Por favor, ingresa tu edad:"));

// 2. Verificar si cumple con los requisitos
if (estatura >= 170 && velocidad >= 27) {
  // Si cumple los requisitos, determinar la división
  if (edad < 18) {
    alert("¡Felicidades! Cumples con los requisitos físicos y serás colocado en las divisiones menores.");
  } else {
    alert("¡Felicidades! Cumples con los requisitos físicos y serás colocado en el equipo profesional.");
  }
} else {
  // Si no cumple los requisitos, mostrar un mensaje
  alert("Lo siento, no cumples con los requisitos físicos para unirte al equipo.");
}




