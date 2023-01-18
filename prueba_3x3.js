// Recorrer filas
// Para recorrer o acceder a alguna posición del tablero, al ser una tabla indexada es decir un objeto, primero se tiene que acceder por las filas y luego por las columnas
// Ejemplo, para acceder al primer elemento de todos: tablero["A"][0]
const filas = ["A", "B", "C"]
const columnas = [0, 1, 2]

let tablero = {
    A: [' ', ' ', ' '],
    B: [' ', ' ', ' '],
    C: [' ', ' ', ' ']
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

// La función tendra un bucle que ira recorriendo y creando las filas y otro bucle que ira creando y recorriendo las columnas, además queremos que cada elemento sea [' '].



function generadorTablero (filas, columnas){
    let tablero = {}
    // bucle filas
    for (let i = 0; i < filas; i++) {
        let indiceFila = String.fromCharCode(65 + i)
        tablero[indiceFila] = []
        // bucle columnas
        for (let j = 0; j < columnas; j++){
            tablero[indiceFila].push(' ')  
        } 
    }
    return tablero
}

console.table(generadorTablero(10, 10))