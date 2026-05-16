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

// USO DE READLINE SYNC

const readlineSync = require('readline-sync');

let usuario = {};

// 2. Pedir al usuario, 3 datos (nombre, edad, profesion)
usuario.nombre = readlineSync.question('¿Cuál es tu nombre? ');
usuario.edad = readlineSync.questionInt('Cual es tu edad? ');
usuario.profesion = readlineSync.question('Cual es tu profesion? ');
usuario.cedula = readlineSync.question('Ingrese su cedula ');

// 3. Imprimir el resultado
console.log(usuario);

const readlineSync = require('readline-sync');

let diaSemana = 3;

switch (diaSemana) {
    case 0:
        console.log('Es Lunes');
        break;
    case 1:
        console.log('Es Martes');
        break;
    case 2:
        console.log('Es Miercoles');
        break;
    case 3:
        console.log('Es Jueves');
        break;
    case 4:
        console.log('Es Viernes');
        break;
    case 5:
        console.log('Es Sabado');
        break;
    case 6:
        console.log('Es Domingo');
        break;
    default:
        console.log('Dia invalido');
}

let opcionMenu = 3;

switch (opcionMenu) {
    case 1:
        console.log('Hamburguesa');
        break;
    case 2:
        console.log('Pizza');
        break;
    case 3:
        console.log('Perro Caliente');
        break;
    default:
        console.log('Opcion invalida - no existe en el menú');
}

// Se debe simular un sistema de acceso por niveles
// en los cuales habran 3 roles diferentes
// "Admin", "Editor", "Usuario", se deberá validar el rol
// del usuario y mostrar si es admin "ACCESO COMPLETO", si es editor "ACCESO LIMITADO"
// y si es usuario "SOLO LECTURA", sino cumple con uno de estos roles el Rol es "NO VÁLIDO"
//

let user = {
    nombre: 'Pepito',
    cedula: '123456',
    rol: 'Admin',
};

switch (user.rol) {
    case "Admin":
        console.log("ACCESO COMPLETO")
        break;
    case "Editor":
        console.log("ACCESO LIMITADO")
        break;
    case "Usuario":
        console.log("SOLO LECTURA")
    default:
        console.log("ROL NO VÁLIDO")
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


// Ejercicio 2 — Menú de restaurante

//Un restaurante tiene las siguientes opciones:

//"hamburguesa" → cuesta $18.000
//"pizza" → cuesta $25.000
//"perro" → cuesta $12.000
//Otra opción → mostrar "Producto no disponible"

//Además, si el cliente compra más de $20.000 debe recibir un mensaje de:
//Aplica para bebida gratis

//Datos iniciales
let producto1 = 'mandingas';
let precio = 0;

switch (producto1) {
    case 'hamburguesa':
        //hacemos aplicacion
        precio = 18000;
        break;
    case 'pizza':
        //hacemos aplicacion
        precio = 25000;
        break;
    case "mandingas":
        precio = 22000;
        break;
    case 'perro':
        //hacemos aplicacion
        precio = 12000;
        break;
    default:
        console.log('Producto no disponible');
}

console.log('El producto ', producto, "valor a pagar", precio);

if (precio >= 20000) {
    console.log('BEBIDA GRATIS');
}

