// VARIABLES
// let - declarar variables (Poder reasignar o modificar su valor)
// const - declarar constante (No se puede reasignar o modificar su valor)
let numero1 = 20;
const numero2 = 50;

numero1 = 100;

let nombre;
const apellido = 'Perez';
console.log(apellido);

// EJECUTAR ARCHIVO .js en la terminal
// node repaso-29mayo.js

// Tipos de datos -
// Para definir obtejos o arreglos usamos:
// (Corchetes) [] - Arreglos arrays
// (Llaves) {} - Objetos

// Numericos (Enteros y punto flotante o decimales) (Number)
let edad = 25;
// Cadenas de texto (String)
let marcaPc = 'Dell';
// Booleanos (Boolean)
const esTecnico = true;
// Arreglos (Array)
let arrayNombres = ['Pedro', 'Julian'];
let arrayNumeros = [2, 16, 24, 32, 4];
// Objetos (Object)
let usuario = {
  nombre: 'Ana',
  edad: 28,
  activo: true,
  direccion: {
    barrio: 'Belencito',
    ciudad: 'Medellin',
    departamento: 'Antioquia',
    nomenclatura: 'Cra80 #45-30',
    ubicacion: {
      lat: -75.23444,
      lng: 60.433322,
    },
  },
};

usuario.direccion.ubicacion.lat;

// Condicionales - Permitir tomar caminos diferentes de acuerdo a una condicion
// if - else if - else
// si - sino si - si no

// 1 - Condicional simple (if) - Ejecuta el código solo si la condición es verdadera.
let tengoDinero = true;

if (tengoDinero) {
  console.log('¡Compraré un helado!');
}

// 2 - Condicional con alternativa (if...else)Ejecuta una acción si se cumple la condición, y otra alternativa si no se cumple.
let edadDos = 18;

if (edadDos >= 18) {
  console.log('Eres mayor de edad.');
} else {
  console.log('Eres menor de edad.');
}

// 3 - Múltiples condiciones (if...else if) - Útil cuando necesitas evaluar más de
// dos caminos o escenarios distintos.

let calificacion = 85;

if (calificacion >= 90) {
  console.log('Sobresaliente');
} else if (calificacion >= 75) {
  console.log('Aprobado');
} else {
  console.log('Reprobado');
}

// SWITCH
let dia;
let diaSemana = new Date().getDay();
console.log(diaSemana);

switch (diaSemana) {
  case 0:
    dia = 'Lunes';
    break;
  case 1:
    dia = 'Martes';
    break;
  case 2:
    dia = 'Miercoles';
    break;
  case 3:
    dia = 'Jueves';
    break;
  case 4:
    dia = 'Viernes';
    break;
  case 5:
    dia = 'Sabado';
    break;
  case 6:
    dia = 'Domingo';
}

console.log(dia);

// Metodos basicos de arrays
// METODO        FUNCION
// push         Agrega un elemento al final
// pop          Elimina el ultimo elemento
// unshift      Agrega al inicio
// shift        Eliminar el primero
// includes     Buscar un valor

let juegos = ['Call of duty', 'Fifa', 'Dios de la guerra', 'Assasins', 'GTA'];

console.log('Array antes de agregar: ', juegos);

juegos.push('Def Jam');
juegos.push('Free fire');
juegos.unshift('Need for speed');
juegos.shift();

console.log('Existe Free fire en juegos? ', juegos.includes('Free fire'));
console.log('Array despues de agregar: ', juegos);

// ARRAY DE OBJETOS
let productos = [
  {
    nombre: 'Computador Lenovo',
    precio: 2000000,
  },
  {
    nombre: 'Monitor asus 24',
    precio: 600000,
  },
];

console.log(productos[1].precio, productos[0].nombre);
