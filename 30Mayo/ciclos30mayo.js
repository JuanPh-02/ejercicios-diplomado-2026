// // mostrar los numeros pares que estan del 0 al 100
for (let i = 0; i <= 100; i++) {
    console.log("iteracion:", i)
    if (i % 2 === 0) {
        console.log("El numero", i, "es par");
    }
}

// sin condicional
for (let i = 6; i <= 100; i += 2) {
    console.log("El numero", i, "es par");
}

// total = 120000
// total = total + 50000   -------> total += 50000

// i = 28
// i = i + 2   ----->     i += 2


// Tablas de multiplicar

let numeroTabla = 7;

for(let i = 1; i <= 10; i++) {
    // console.log(numeroTabla, "X", i, "=", numeroTabla*i)
    // console.log(numeroTabla + " X " + i + " = " + numeroTabla  * i)
    console.log(`${numeroTabla} X ${i} = ${numeroTabla * i}`)
}



for(let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        console.log("El numero", i, "es impar");
    }
}

let juegos = ['Call of duty', 'Fifa', 'Dios de la guerra', 'Assasins', 'GTA'];

console.log('Array antes de agregar: ', juegos);

// recorrer arrays hasta la longitud del array
for(let i = 0; i < juegos.length; i++) {
    console.log(juegos[i])
}

let arrayProductos = [
    {nombre: "Empanada", stock: 30, precio: 1500},
    {nombre: "Pastel de pollo", stock: 20, precio: 2000}
]

arrayProductos.push({nombre: "Palito de queso", stock:15, precio: 2000})

for(let i = 0; i < arrayProductos.length; i++) {
    console.log(arrayProductos[i])
    console.log(arrayProductos[i].nombre, arrayProductos[i].precio)
}



let arrayNumeros = [10, 30, 50, 45, 50, 67, 40, 100, 120, 200]

for(let i= 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i])
}


// CICLO WHILE
// while(condicion) {
//     // CODIGO QUE SE REPITE
// }

// for(let i=1; i<=5;i++) {
//     console.log(i)
// }

let contador = 1
while(contador <= 5){
    contador++;
    console.log(contador)
}

contador = 1
numeroTabla = 8
while(contador <= 10) {
    console.log(numeroTabla + " X " + contador + " = " + numeroTabla  * contador)
    contador++;
    // contador = contador + 1;
    // contador += 1;
}

// DIFERENCIAS ENTRE FOR Y WHILE

//      FOR                                  WHILE
// Se conoce cantidad de veces         No siempre se conoce
// Mas estructurado                    Mas flexible
//Muy usado para arrays                Muy usado para validaciones



// EJERCICIO EN PAREJAS O EQUIPO
// debemos crear un array de numeros con minimo 5 numeros y 
// debemos de sumar todos los numeros del array