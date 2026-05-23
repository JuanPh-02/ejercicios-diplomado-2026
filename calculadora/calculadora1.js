//let numero1 = '30';
//let tipoDato = typeof numero1;

//numero1 = Number(numero1)

//console.log(tipoDato);

// EJERCICIO DE CALCULADORA CON ESRUCTURA SWITCH

const libreriaRead = require('readline-sync');

// MENU
console.log('APLICACION EN CONSOLA - CALCULADORA');
console.log('Bienvenido/a hola');
console.log('Ingrese 1 para sumar');
console.log('Ingrese 2 para restar');
console.log('Ingrese 3 para multiplicar');
console.log('Ingrese 4 para dividir');

let operacion = libreriaRead.questionInt('Ingrese el número de la operacion: ');  //10

if(operacion >= 1 && operacion <= 4 ) {
  let num1 = libreriaRead.questionInt('Ingrese el número 1: ');
  let num2 = libreriaRead.questionInt('Ingrese el número 2: ');
  
  let total;
  
  switch (operacion) {
    case 1:
      total = num1 + num2;
      break;
    case 2:
      total = num1 - num2;
      break;
    case 3:
      total = num1 * num2;
      break;
    case 4:
      //OPCION 1
      if (num2 !== 0) {
        total = num1 / num2;
      } else {
        console.log('No se puede dividir por cero');
      }
  
      // OPCION 2
      // if(num2 === 0) {
      //   console.log("No se puede dividir por cero");
      // } else {
      //   console.log('Total: ', num1 / num2);
      // }
      break;
  }
  
  console.log('Su resultado es: ', total);
} else {
  console.log("OPERACIÓN NO VÁLIDA")
}