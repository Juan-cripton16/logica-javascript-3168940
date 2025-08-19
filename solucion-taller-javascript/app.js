1//
let numero = prompt("1. Ingresa un número:");
numero = Number(numero);

console.log("El número ingresado es:", numero);

if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

//2.
let num1 = prompt("2. Ingresa el primer número:");
let num2 = prompt("2. Ingresa el segundo número:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > 0) {
    alert("El primer número es positivo: " + num1);
}

if (num2 > 0) {
    alert("El segundo número es positivo: " + num2);
}

//3
let numA = prompt("3. Ingresa el primer número:");
let numB = prompt("3. Ingresa el segundo número:");

numA = Number(numA);
numB = Number(numB);

let resultado;

if (numA === numB) {
    resultado = numA * numB;
    alert("Los números son iguales. El resultado de la multiplicación es: " + resultado);
} else if (numA > numB) {
    resultado = numA - numB;
    alert("El primer número es mayor. El resultado de la resta es: " + resultado);
} else {
    resultado = numA + numB;
    alert("El segundo número es mayor. El resultado de la suma es: " + resultado);
}
//4.
let costo = prompt("4. Ingresa el costo del artículo:");
let pago = prompt("4. Ingresa el dinero entregado:");

costo = Number(costo);
pago = Number(pago);

if (pago >= costo) {
    let cambio = pago - costo;
    console.log("El cambio a entregar es:", cambio);
} else {
    alert("El dinero entregado es insuficiente.");
}
//5.
let numVacunas = prompt("5. Ingresa el número de vacunas:");
let costoVacuna = prompt("5. Ingresa el costo de cada vacuna:");
let costoAplicacion = prompt("5. Ingresa el costo de aplicación:");

numVacunas = Number(numVacunas);
costoVacuna = Number(costoVacuna);
costoAplicacion = Number(costoAplicacion);

let totalGastado = numVacunas * (costoVacuna + costoAplicacion);

console.log("El total gastado en vacunas es:", totalGastado);

//6.
let cantidadCamisas = prompt("6. Ingresa la cantidad de camisas:");
let precioUnitario = prompt("6. Ingresa el precio por camisa:");

cantidadCamisas = Number(cantidadCamisas);
precioUnitario = Number(precioUnitario);

let totalSinDescuento = cantidadCamisas * precioUnitario;
let descuento;

if (cantidadCamisas >= 3) {
    descuento = totalSinDescuento * 0.20;
    alert("Descuento del 20% aplicado.");
} else {
    descuento = totalSinDescuento * 0.10;
    alert("Descuento del 10% aplicado.");
}

let totalConDescuento = totalSinDescuento - descuento;
console.log("El total a pagar es:", totalConDescuento);

//7.
let dineroInicial = prompt("7. Ingresa el dinero con el que el tendero empezó el día:");

dineroInicial = Number(dineroInicial);

const valorVenta = 800000;
const numVentas = 4;
const totalVentas = valorVenta * numVentas;
const dineroEnCaja = dineroInicial + totalVentas;
const pagoAcreedores = dineroEnCaja * 0.10;
const dineroFinal = dineroEnCaja - pagoAcreedores;

console.log("Dinero con el que empezó:", dineroInicial);
console.log("El pago a sus acreedores fue:", pagoAcreedores);
console.log("Dinero con el que terminó:", dineroFinal);

//8.
let venta1 = prompt("8. Ingresa la venta del día 1:");
let venta2 = prompt("8. Ingresa la venta del día 2:");
let venta3 = prompt("8. Ingresa la venta del día 3:");
let venta4 = prompt("8. Ingresa la venta del día 4:");
let venta5 = prompt("8. Ingresa la venta del día 5:");

let ventasTotales = Number(venta1) + Number(venta2) + Number(venta3) + Number(venta4) + Number(venta5);
let promedio = ventasTotales / 5;

console.log("El promedio de ventas es:", promedio);

//9.
let numA = prompt("9. Ingresa el primer número:");
let numB = prompt("9. Ingresa el segundo número:");
let operacion = prompt("9. Ingresa la operación (+, -, *, /):");

numA = Number(numA);
numB = Number(numB);
let resultado;

if (operacion === "+") {
    resultado = numA + numB;
} else if (operacion === "-") {
    resultado = numA - numB;
} else if (operacion === "*") {
    resultado = numA * numB;
} else if (operacion === "/") {
    if (numB !== 0) {
        resultado = numA / numB;
    } else {
        alert("No se puede dividir por cero.");
    }
}

if (resultado !== undefined) {
    alert("El resultado de la operación es: " + Math.trunc(resultado));
}
//10.
let a = prompt("10. Ingresa el primer número:");
let b = prompt("10. Ingresa el segundo número:");
let c = prompt("10. Ingresa el tercer número:");

a = Number(a);
b = Number(b);
c = Number(c);

let menor = Math.min(a, b, c);
let mayor = Math.max(a, b, c);
let medio = (a + b + c) - menor - mayor;

console.log("El número menor es:", menor);
console.log("El número medio es:", medio);
console.log("El número mayor es:", mayor);

if (a === b || a === c || b === c) {
    console.log("Hay números iguales.");
}
//11.
let edad = prompt("11. Ingresa la edad del deportista:");
let estatura = prompt("11. Ingresa la estatura en metros:");
let peso = prompt("11. Ingresa el peso en kilogramos:");

edad = Number(edad);
estatura = Number(estatura);
peso = Number(peso);

if (edad >= 18 && estatura > 1.7 && peso >= 50 && peso <= 90) {
    alert("El deportista ha sido seleccionado.");
} else {
    alert("El deportista NO ha sido seleccionado.");
}
//12.
const sueldoMinimo = 1300000; 
let sueldoActual = prompt("12. Ingresa el sueldo del trabajador:");

sueldoActual = Number(sueldoActual);
let sueldoFinal = sueldoActual;

if (sueldoActual === sueldoMinimo) {
    sueldoFinal = sueldoActual * 1.10;
    alert("Se aplicó un aumento del 10%.");
}

console.log("El sueldo a devengar es:", sueldoFinal);
13//
let palabra = prompt("13. Ingresa una palabra (casa, mesa, perro, gato):");
let traduccion;

switch (palabra.toLowerCase()) {
    case 'casa':
        traduccion = 'house';
        break;
    case 'mesa':
        traduccion = 'table';
        break;
    case 'perro':
        traduccion = 'dog';
        break;
    case 'gato':
        traduccion = 'cat';
        break;
    default:
        traduccion = 'Palabra no reconocida.';
}

alert("La traducción es: " + traduccion);

//14.
let datos = [];
let dato1 = prompt("14. Ingresa el primer dato:");
let dato2 = prompt("14. Ingresa el segundo dato:");
let dato3 = prompt("14. Ingresa el tercer dato:");

datos[0] = dato1;
datos[1] = dato2;
datos[2] = dato3;

console.log("El contenido del array es:");
console.log(datos);

//15
let nombre;
console.log("15. Ingresa nombres (escribe 'salir' para terminar).");
do {
    nombre = prompt("Ingresa un nombre:");
    if (nombre.toLowerCase() !== "salir") {
        console.log("Nombre ingresado:", nombre);
    }
} while (nombre.toLowerCase() !== "salir");

//16.
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 1000);
let respuestaCorrecta = num1 * num2;
let respuestaUsuario;

do {
    respuestaUsuario = prompt(`16. ¿Cuánto es ${num1} * ${num2}?`);
    if (Number(respuestaUsuario) === respuestaCorrecta) {
        alert("¡Ganaste!");
        break;
    } else {
        alert("Respuesta incorrecta. ¡Intenta de nuevo!");
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 1000);
        respuestaCorrecta = num1 * num2;
    }
} while (true);

