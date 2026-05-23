let arrayNumeros = [2, 4, 5, 8, 12];

// ACCEDER A UN ELEMENTO - READ
console.log(arrayNumeros[0]);

// AGREGAR O MODIFICAR - CREATE O UPDATE
arrayNumeros[2] = 50;
arrayNumeros[5] = 20;
console.log(arrayNumeros[5]);

// USANDO METODOS BASICOS

// AGREGAR (1 elemento o varios)- CREATE  - Agrega al final del array
arrayNumeros.push(70)
arrayNumeros.push(100, 1000, 230)

// ELIMINAR - DELETE - Elimina el ultimo del array y lo retorna
let elementoEliminadoPop = arrayNumeros.pop()
arrayNumeros.pop()

// ELIMINAR - DELETE - Elimina el primero del array y lo retorna
let elementoEliminadoShift = arrayNumeros.shift()
// 50 es indice 2 queda con indice 1

// AGREGAR - CREATE - Agrega a inicio del array (uno o varios elementos) y retorna la longitud
let nuevaLongitud = arrayNumeros.unshift(2500, 3000)

// VERIFICAR SI EXISTE
let existe = arrayNumeros.includes(3000)



console.log("Existe el 3000?: ", existe)
console.log("elemento eliminado pop: ", elementoEliminadoPop)
console.log("elemento eliminado shift: ", elementoEliminadoShift)
console.log(arrayNumeros[7])
console.log("numero de elementos: ", nuevaLongitud);
console.log('-------------------------------------------------');
console.log(arrayNumeros);


// CREAR UNA LISTA DE PRODUCTOS (STRING) y agregar un nuevo producto pedido por terminal
// con readline
let productos = ["Arroz", "Aceite"]
