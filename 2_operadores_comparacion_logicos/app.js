//boolean//

console.log( '  "5"== "5" ' , "5" == "5" ) // true
console.log( ' "5"=== "5" ' , "5" === "5" ) // true
console.log( '  5 === "5" ' , 5 === "5" ) // false
console.log( '  5 == "5" ' , 5 == "5" ) // true
console.log( '  5 === (3+2) ' , "5" === (3+2) ) // false
console.log( '  5 === 5  ', 5 === 5 ) // true



//PIDA DOS NUMEROS AL USUARIO Y SUMALOS
//let num1 = prompt('dame num1')//5
//let num2 = prompt('dame num2')//3

//let resultado = num1+num2
//alert("el resultado de la suma es") + resultado

// Pedir al usuario los dos números usando la función prompt
// Los valores se guardan como strings inicialmente
let valorA = prompt("Ingresa el primer número:");
let valorB = prompt("Ingresa el segundo número:");

// Convertir los valores de string a números
// Usamos Number() para una conversión simple
let numA = Number(valorA);
let numB = Number(valorB);

// Imprimir los valores ingresados en la consola
console.log(`El valor A es: ${numA}`);
console.log(`El valor B es: ${numB}`);

// Calcular y mostrar la suma en la consola
let suma = numA + numB;
console.log(`La suma de ${numA} + ${numB} = ${suma}`);

// Calcular y mostrar la resta en la consola
let resta = numA - numB;
console.log(`La resta de ${numA} - ${numB} = ${resta}`);

// Calcular y mostrar la multiplicación en la consola
let multiplicacion = numA * numB;
console.log(`La multiplicación de ${numA} * ${numB} = ${multiplicacion}`);

// Calcular y mostrar la división en la consola
// Es buena práctica añadir una comprobación para evitar la división por cero
if (numB === 0) {
    console.warn(`Advertencia: Intento de división por cero. La división de ${numA} / ${numB} es indefinida.`);
} else {
    let division = numA / numB;
    console.log(`La división de ${numA} / ${numB} = ${division}`);
}