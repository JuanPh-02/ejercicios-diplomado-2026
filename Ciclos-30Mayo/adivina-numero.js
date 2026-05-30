const read = require("readline-sync")
const numeroCorrecto = 56;
let intento = 0;

console.log("Adivina el numero \n Ingresa un numero del 1 al 99")

while(intento !== numeroCorrecto) {
    intento = read.questionInt("Ingrese un numero: ");

    if(intento !== numeroCorrecto) {
        console.log("Intentalo nuevamente")
    } else {
        console.log("Felicitaciones! Adivinaste el número 👋👌")
    }
    
}

// console.log("Felicitaciones! Adivinaste el número 👋👌")