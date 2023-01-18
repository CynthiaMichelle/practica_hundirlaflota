// PRIMERA FASE

// Frase comienzo del juego (mirar en el pdf practica)

//  Defino Jugadores (J1) (J2)
const jugador_uno = ("J1")
const jugador_dos = ("J2")

// Definir figuras
const portaaviones = ["🚢", "🚢", "🚢", "🚢", "🚢"] // 1
const buque = ["⛴️", "⛴️", "⛴️", "⛴️"] // 1
const submarino = ["⛵", "⛵", "⛵"] // 2
const crucero = ["🛳️", "🛳️"] // 3
const lancha = ["🚤"] // 3
const agua = ["💧"]
const tocado = ["💥"]

// recopilacion info figuras. primer elemento la figura y el segundo el numero de figuras
const figuras = {
    portaaviones: [portaaviones, 1],
    buque: [buque, 1],
    submarino: [submarino, 2],
    crucero: [crucero, 3],
    lancha: [lancha, 3],
    agua: [agua, null],
    tocado: [tocado, null]
} 

// Listas auxiliares
const indiceColumnas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const indiceFilas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

// Función generadora de tablero
function generadorTablero (filas, columnas){
    let tablero = {}
    // bucle filas
    for (let i = 0; i < filas; i++) {
        let indiceFila = String.fromCharCode(65 + i) // para mapear los indices de las filas (A-I)
        tablero[indiceFila] = []
        // bucle columnas
        for (let j = 0; j < columnas; j++){
            tablero[indiceFila].push(' ')  // Añadir un elemento por posición del tablero
        } 
    }
    return tablero
}

console.table(generadorTablero(10, 10))

// Colocar barcos
