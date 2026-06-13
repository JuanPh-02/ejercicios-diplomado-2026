const usuarios = [
    {nombre: "Pepito", cedula: "123456", activo: true},
    {nombre: "Julanito", cedula: "47890", activo: true},
    {nombre: "Peranito", cedula: "234567", activo: true},
    {nombre: "Josefin", cedula: "907355", activo: true},
]

let filtrados = usuarios.filter(us => us.activo)
console.log(filtrados)

let existePepito = filtrados.find(user => user.nombre === "Pepito")
console.log(existePepito)

// METODO some - que al menos uno cumpla la condicion
const hayInactivos = usuarios.some(user => !user.activo)
console.log(hayInactivos)

// METODO every - que todos cumplan la condicion
const todosActivos = usuarios.every(u => u.activo)
console.log(todosActivos)