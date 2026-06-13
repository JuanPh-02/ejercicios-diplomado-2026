// CLASE
// Molde para crear muchos objetos
// Nos sirve para definir una estructura y comportamiento especifico

let estudiantes = [
    {nombre: "Manuela", nota: 4, activo: true},
    {nombre: "Ana", cedula: "2345664"},
    {nombre: "Pipe", celular: "3214567890"},
]

class Estudiante {
    constructor(nombre, cedula, celular) {
        //this -> Referencia al objeto que se esta creando  
        this.nombre = nombre;
        this.cedula = cedula;
        this.celular = celular;
        this.activo = true;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
}


// SE crean objetos a partir de una clase (Estudiante)
let estudiante1 = new Estudiante("Lupita", "23456", 123445644)
let estudiante2 = new Estudiante("Felipe", "345222", 3212145555)

estudiante1.saludar()

estudiante2.saludar()

