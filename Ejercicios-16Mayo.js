let producto = {
  nombre: 'Computador',
  precio: 2000000,
  categoria: 'Tecnologia',
};
let precioFinal = producto.precio;

if (producto.categoria === 'Tecnologia') {
  // Aplicar descuento del 20%
  precioFinal = producto.precio * 0.8;
} else if (producto.categoria === 'Ropa') {
  // Aplicar descuento del 10%
  precioFinal = producto.precio * 0.9;
} else if (producto.categoria === 'Alimentos') {
  // Aplicar descuento del 5%
  precioFinal = producto.precio * 0.95;
}

console.log(
  'Su precio final del producto ',
  producto.nombre,
  ' es $',
  precioFinal
);

// SISTEMA DE EMPLEADOS

let empleado = {
  nombre: 'Pepito Perez',
  horasTrabajadas: 40,
  valorHora: 7959,
};

let sueldo = empleado.horasTrabajadas * empleado.valorHora;

console.log('Al empleado', empleado.nombre, 'se le paga $', sueldo);
console.log(`Al empleado ${empleado.nombre} se le paga $ ${sueldo}`);

// SWITCH (condicional)
// Es una estructura que permite ejecutar diferentes bloques de codigo
// dependiendo del valor de una variable.
//
// Es util cuando existen muchas opciones posibles.

// Explicacion de cada parte
// switch (variable)         Define la estructura y recibe la variable a trabajar
// case valor                Comparar posibles valores
// break                     Detener la ejecucion (Se usa dentro de los case)
// default              Se ejecuta si no coincide ningun caso (Seria como el else)

// SINTAXIS

let variable = 25;

switch (variable) {
  case 5:
    console.log('Es 5');
    break;
  case 10:
    console.log('Es 10');
    break;
  case 20:
    console.log('Es 20');
    break;
  default:
    console.log('Es otro diferente');
}



// Ejercicio 1 — Sistema de transporte

// Una empresa de transporte cobra diferentes precios dependiendo del tipo de usuario:

// "estudiante" → paga $2.000
// "adulto" → paga $3.500
// "adulto mayor" → paga $1.500
// Cualquier otro tipo → mostrar "Tipo de usuario no válido"

// Además de mostrar el tipo de tarifa, debes mostrar el valor final del pasaje.

// Datos iniciales
let usuario = "estudiante";
let tarifa = 0;

// Resultado esperado
// Tarifa asignada: 2000

// Analiza si usar switch o if.

let pasajero = {
  usuario: 'Niño',
};

switch (pasajero.usuario) {
  case 'Estudiante':
    console.log('Tarifa $', 2000);
    break;
  case 'Adulto':
    console.log(`Tarifa${3500}`);
    break;
  case 'Adulto Mayor':
    console.log('Tarifa $' + 1500);
    break;
  default:
    console.log('Usuario no valido');
}