// Tablero 10x10
const filas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const columnas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let tablero = {
    A: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],  
    B: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    C: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    D: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    E: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    F: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    G: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    H: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    I: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
    J: ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ']
}
const crucero = ["🛳️", "🛳️"]
const lancha = ["🚤"]

// recorriendo filas
for (let fila of filas) {
    console.log(tablero[fila])
}

// recorriendo cada posicion (filas + columnas)
for (let fila of filas) {
    for (let columna of columnas) {
        console.log(tablero[fila][columna])
    }

}

// Guardamos en lista vacía las posiciones de los elementos
let listaVacia = []
for (let fila of filas) {
    for (let columna of columnas) {
        listaVacia.push(fila + String(columna))
    }

}
console.log(listaVacia)

// bucle con todos los elementos de la lancha

for (let fila of filas) {
    for (let columna of columnas) {
        tablero[fila][columna] = lancha[0] // [0] para acceder lo que hay dentro de lancha
    }

}

console.table(tablero)