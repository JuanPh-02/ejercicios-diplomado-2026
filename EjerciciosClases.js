// EJERCICIO 1 - COMPRAR ARTICULO
// Comprar un articulo de $80000

let saldo=500000
let articulo=80000

if (saldo >= articulo) {
  console.log("PUEDE COMPRAR")
} else {
  console.log('SALDO INSUFICIENTE')
}


// EJERCICIO 2 - VALIDAR LA NOTA

let nota = 4

if (nota <= 60) {
  console.log("REPROBADO")              
} else if (nota > 60 && nota < 80) {
  console.log("APROBADO")
} else if (nota >= 80 && nota <=100) {
   console.log("EXCELENTE") 
} else {
  console.log("ERROR: NOTA NO VÁLIDA")
}

//EJERCICIO COMPRA EN TIENDA CON DESCUENTO

//Si el cliente compra mas de 50000 realizar descuento del 10%,
//adicional si es cliente frecuente se hace pero un descuento del 20%.

let clienteFrecuente = false
let valorCompra = 60000
let valorFinal

console.log(valorFinal)
if (valorCompra >= 50000) {
  if (clienteFrecuente) {
    console.log("APLICAR DESCUENTO 20%")
    valorFinal = valorCompra * 0.8
  } else {
    console.log("APLICAR DESCUENTO 10%")
    valorFinal = valorCompra * 0.9
  }
} else {
  console.log("NO APLICA DESCUENTO")
}
console.log("EL CLIENTE PAGARÁ:")
console.log(valorFinal)








let personaje = {
  vidas: 5,
  energia: 100,
  escudo: true
}

let enemigo = {
  vidas: 1,
  dano: 80,
  potente: false
}

if(enemigo.potente) {
  personaje.escudo = false
}

personaje.energia = personaje.energia - enemigo.dano

if (personaje.escudo) {
  console.log("Protección ACTIVA")
}
if (personaje.vidas === 0) {
  console.log("GAME OVER")
} else if (personaje.energia < 20) {
  console.log("Energía BAJA")
}
console.log(personaje)









































