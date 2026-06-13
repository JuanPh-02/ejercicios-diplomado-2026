// FUNCION
// Serie de instrucciones
// Un bloque de código que es reutilizable
//
// Parametros -> Lo que necesita la funcion para ejecutarse
// SINTAXIS
//
// function nombreFuncion(parametro1, parametro2) {
//      CUERPO DE LA FUNCION
// }

// Llamar a la funcion
// nombreFuncion(p1, p2);            -------p1 y p2 son los argumentos
// 
// Puede tener return o no 
// SI tiene return la funcion retorna un valor especifico, de lo contrario devuelve undefined

// EJEMPLOS 
function obtenerIVA(precio) {
    let valorIVA = precio * 0.19;
    return valorIVA;
}

function saludar(nombre) {
    console.log(`Hola ${nombre}, Bienvenido/a`)
} 

saludar("Pepito")
saludar("Julanito")
saludar("Peranito")


// let p1 = 20000 * 0.19
// let p2 = 40000 * 0.19
// let p3 = 2000 * 0.19 
// let p4 = 15000 * 0.19
// let p5 = 24590 * 0.19
// let p6 = 4500 * 0.19

let p1 = obtenerIVA(20000)
let p2 = obtenerIVA(40000)
let p3 = obtenerIVA(2000)
let p4 = obtenerIVA(15000)
let p5 = obtenerIVA(24590)
let p6 = obtenerIVA(4500)


// SACAR AREA DE UN RECTANGULO
function obtenerAreaRectangulo(base, altura){
    const area = base * altura;
    return area
    console.log("El area es: ", area)
}


obtenerAreaRectangulo(20, 10)

const estudiante = {
    nombre: "Pepito",
    notas: [4.2, 3.8, 4, 3],
    calcularPromedio: (notas) => {
        let total = notas.reduce((acum, n) => acum + n, 0);
        const prom = total / notas.length;
        console.log("El promedio es: ", prom)
        return prom
    }
}

estudiante.calcularPromedio([2.9, 4, 3.2, 5])