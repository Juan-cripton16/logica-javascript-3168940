let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad:");

if (edad >= 18) {
  alert("Puedes ingresar a la discoteca.");
} else {
  alert("No puedes ingresar a la discoteca.");
}

if (nombre.toLowerCase() === "mario" || nombre.toLowerCase() === "carlos") {
  alert("eres cliente VIP.");
}
