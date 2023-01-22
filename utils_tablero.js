// Listas auxiliares
const indiceColumnas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const indiceFilas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

// Barcos
const portaaviones = ["🚢", "🚢", "🚢", "🚢", "🚢"] // 1
const buque = ["⛴️", "⛴️", "⛴️", "⛴️"] // 1
const submarino = ["⛵", "⛵", "⛵"] // 2
const crucero = ["🛳️", "🛳️"] // 3
const lancha = ["🚤"] // 3
const agua = ["💧"]
const tocado = ["💥"]

const barcos = {
    portaaviones: [portaaviones, 1],
    buque: [buque, 1],
    submarino: [submarino, 2],
    crucero: [crucero, 3],
    lancha: [lancha, 3]
}

// Obtener lista barcos en este formato:
// listaBarcos = [portaaviones, buque, submarino, submarino, crucero, crucero, crucero, lancha, lancha, lancha]
let listaBarcos = []
let claves = Object.keys(barcos)

for (let barco of claves) {
    for (let i = 0; i < barcos[barco][1]; i++) {
        listaBarcos.push(barcos[barco][0])
    }
}

// Funcion que genera tableros
function generadorTablero(filas, columnas) {
    let tablero = {}
        // bucle filas
    for (let i = 0; i < filas; i++) {
        let indiceFila = String.fromCharCode(65 + i) // para mapear los indices de las filas (A-I) (Tabla ASCII)
        tablero[indiceFila] = []
            // bucle columnas
        for (let j = 0; j < columnas; j++) {
            tablero[indiceFila].push('  ') // Añadir un elemento por posición del tablero
        }
    }
    return tablero
}

// Funcion para comporbar si es agua o tocado
function obtenerResultadoDisparo(tablero, posicionDisparo) {
    let fila = posicionDisparo[0]
    let columna = posicionDisparo[1]
    let resultadoDisparo = null

    if (tablero[fila][columna] == '  ') {
        resultadoDisparo = agua[0]
    } else {
        resultadoDisparo = tocado[0]
    }
    return resultadoDisparo
}

function actualizarTablero(tablero, posicionDisparo, resultadoDisparo) {
    let fila = posicionDisparo[0]
    let columna = posicionDisparo[1]
    tablero[fila][columna] = resultadoDisparo
    return tablero
}

export { indiceFilas, indiceColumnas, barcos, agua, tocado, listaBarcos, generadorTablero, obtenerResultadoDisparo, actualizarTablero }