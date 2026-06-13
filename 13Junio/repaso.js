let arrayNumeros = [10, 30, 50, 60, 68]

//METODO SPLICE
// Elimina un determinado numero de elementos desde el indice enviado
let eliminados = arrayNumeros.splice(0, 1)
// = [ 30, 50, 60, 68]

// Agregar elementos en indice especifico
arrayNumeros.splice(2, 0, 100, 200)
// = [ 30, 50, 100, 200, 60, 68]

// Modificar elemento en indice especifico
arrayNumeros.splice(3, 1, 500)
// = [ 30, 50, 100, 500, 60, 68]

console.log(arrayNumeros)
console.log(eliminados) //[200]

//METODO REDUCE
const total = arrayNumeros.reduce((acumulado, valor) => acumulado + valor, 0)
console.log(total)

let acum = 0
for(let num of arrayNumeros) {
    acum += num;
}
console.log(acum)

let encontrado = arrayNumeros.find(num => num === 501)
let encontrado1 = arrayNumeros.findIndex(num => num === 501)
console.log(encontrado, encontrado1)



ojq-mrnv-wgw
