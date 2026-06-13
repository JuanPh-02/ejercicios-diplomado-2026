// SISTEMA DE ESTUDIANTES

const estudiantes = [
    {nombre: "Juan", nota: 4.5, activo: true },
    {nombre: "Ana", nota: 2.8, activo: true },
    {nombre: "Pedro", nota: 3.7, activo: true },
    {nombre: "Lina", nota: 4.2, activo: false },
]

// REALIZAR:
// 1- Obtener y mostrar solo los nombres de los estudiantes 
//   (Linea por Linea)
// 2- Obtener y mostrar estudiantes aprobados
// 3- Buscar a "Pedro" decir si existe o no existe
// 4- Verificar si hay estudiantes inactivos
// 5- Calcular promedio general de notas totales


// Sacando los nombres linea por linea____________________________________
console.log("Los nombres son ")
estudiantes.forEach(usuario => console.log(usuario.nombre))

// Los que pasan____________________________________
let notas = estudiantes.filter(estudiante => estudiante.nota >=3 )
console.log("Pasan ",notas)

// Buscando a Pedro____________________________________
const Pedro = estudiantes.some(name => name.nombre === "Pedro")
if(Pedro === true){
console.log("Pedro presente ")
};

// Estuviantes inactivos ____________________________________
const inactivos = estudiantes.filter(user => !user.activo)
console.log("Estudiante inactivo", inactivos)

// PROMEDIO DE NOTAS____________________________________

let valores = estudiantes.map(us => us.nota)

//const sumatoria = valores.reduce((acc, val) => acc + val, 0)
const sumatoria = estudiantes.reduce((acc, user) => acc + user.nota, 0)
const promedio = sumatoria / estudiantes.length

console.log(promedio)
