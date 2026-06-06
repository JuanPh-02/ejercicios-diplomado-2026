let frutas = ["Manzana", "Pera", "Banano", "Piña", "Sandia"]
let numeros = [2, 3, 5, 7, 10, 15]

let correo = " correo@hotmail.com  "
// trim()  limpia espacios al inicio y final de un string
let correoLimpio = correo.trim();
// console.log("Tiene ", correo.length, "caracteres iniciales")
// console.log("Tiene", correoLimpio.length, "caracteres al limpiar")

let arrayResultado = numeros.map(num => num * 2)
// console.log(arrayResultado)

const estudiantes = [
    {nombre: "Guillermo", nota: 4.0, cedula: "12345"},
    {nombre: "Eliza", nota: 2.5, cedula: "34567"},
    {nombre: "Felipe", nota: 3.8, cedula: "09876"},
    {nombre: "Mariana", nota: 2.8, cedula: "436777"}
]
// console.log(frutas)

// for(let alumno of estudiantes) {
//     console.log(alumno.nombre, alumno.nota )
// }

// Funcion forEach, no retorna nada (undefined)
// let loRetornado = estudiantes.forEach(alumno => {
//     if(alumno.nota >= 3) {
//         console.log(alumno.nombre, alumno.nota )
//     }
// })

// console.log(loRetornado)

// Funcion map, me retorna un nuevo array
// let loRetornado = estudiantes.map(alumno => {
//     if(alumno.nota >= 3) {
//         console.log(alumno.nombre, alumno.nota )
//     }
//     return alumno.nombre;
// })
// console.log(loRetornado)
// console.log(estudiantes)


// Forma mas comun de recorrido
// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// toLowerCase  para poner minusculas
// toUpperCase  para poner mayusculas
// Simplificado 
// for(let fruta of frutas) {
//     console.log(fruta.toLowerCase())
// }

// metodo forEach
// frutas.forEach(fru => {
//     console.log(fru)
// })

// for(let num of numeros) {
//     console.log(num)
// }



frutas = ["Manzana", "Pera", "Banano", "Piña", "Sandia"]
let frutasMayusculas = frutas.map(fruta => {
    return fruta.toUpperCase()
})
console.log(frutasMayusculas)



let fruMayusculas = []
frutas.forEach(fruta => {
    fruMayusculas.push(fruta.toUpperCase())
})
console.log(fruMayusculas)


// EJERCICIO - generar nuevo array con los cuadrados de dos de los numeros
numeros = [1, 2, 3, 4]

// para usar potencia usamos (**)
let cuadradoDeDos = numeros[2] ** 2

let resultados = numeros.map(n => {
    return n ** 2
})

resultados = numeros.map(num => num ** 2);
console.log(resultados)


// forma comun
for(let i=0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// forma simplificada
for(let num of numeros) {
    console.log(num)
}

// metodo avanzado pero simple
numeros.forEach(num => console.log(num))


// METODO filter en arrays, devuelve tambien un nuevo array

const edades = [18, 15, 22, 10, 12]

// necesito filtrar los mayores de edad (>=18)

let mayores = edades.filter(edad => edad >= 18)
console.log(mayores)



// Crear un array con precios de productos y
// generar uno nuevo con IVA (19%) 

const precios = [12000, 34000, 56000, 60000]

const preciosConIVA = precios.map(precio => precio * 1.19)

// for(let i=0; i < precios.length; i++) {
//     console.log(`Precio base: ${precios[i]} --- Precio con IVA: ${preciosConIVA[i]}`)
// }

// [12000, 34000, 56000, 60000]
precios.forEach((precio, i) => console.log(precio, i))


// const preciosConIVA = precios.map(precio => {
//     let valorIva = precio * 0.19
//     let precioFinal = precio + valorIva
//     return precioFinal
// })


console.log(preciosConIVA)


