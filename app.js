// Problema 1: Usando while, crea un programa que pregunte al usuario un número.
let numeroUsuario;
while (true) {
  numeroUsuario = prompt("Problema 1: Ingresa un número para el while loop.");
  if (numeroUsuario !== null && numeroUsuario.trim() !== "" && !isNaN(numeroUsuario)) {
    console.log("El número ingresado para el while loop es: " + numeroUsuario);
    numeroUsuario = parseInt(numeroUsuario);
    break;
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}



// Problema 2: Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
console.log(`\nProblema 2: Múltiplos de 5 desde 1 hasta ${numeroUsuario}:`);
let contador = 1;
while (contador <= numeroUsuario) {
  if (contador % 5 === 0) {
    console.log(contador);
  }
  contador++;
}


// Problema 4: Usando for, crea un programa que imprima en consola los números impares del 1 al 50.
console.log("\nProblema 4: Números impares del 1 al 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// Problema 5: Haciendo uso del for, imprimir una lista de números del 1 al 100 y excluir un rango de 10 números.
let inicioRangoExcluir;
let finRangoExcluir;
do {
  inicioRangoExcluir = parseInt(prompt("Problema 5: Ingresa el número de inicio del rango a excluir (de 1 a 90)."));
  if (!isNaN(inicioRangoExcluir) && inicioRangoExcluir >= 1 && inicioRangoExcluir <= 90) {
    finRangoExcluir = inicioRangoExcluir + 9;
    break;
  } else {
    alert("Por favor, ingresa un número de inicio válido.");
  }
} while (true);

console.log(`\nProblema 5: Números del 1 al 100, excluyendo el rango del ${inicioRangoExcluir} al ${finRangoExcluir}:`);
for (let j = 1; j <= 100; j++) {
  if (j < inicioRangoExcluir || j > finRangoExcluir) {
    console.log(j);
  }
}



for (let i = 1; i <= 10; i++) {
  // En cada iteración, 'i' representa el multiplicador (1, 2, 3, etc.)
  const resultado = 7 * i;
  console.log(`7 x ${i} = ${resultado}`);
}