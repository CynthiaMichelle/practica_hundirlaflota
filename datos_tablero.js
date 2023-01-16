// PRIMERA FASE

// Frase comienco del juego (mirar en el pdf practica)


// Jugadores (J1) (J2)
const jugador_uno = ("J1")
const jugador_dos = ("J2")

// Definir figuras
const portaaviones = ["🚢", "🚢", "🚢", "🚢", "🚢"]
const buque = ["⛴️", "⛴️", "⛴️", "⛴️"]
const submarino = ["⛵", "⛵", "⛵"]
const crucero = ["🛳️", "🛳️"]
const lancha = ["🚤"]
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
// Generar tablero
//const filas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//const columnas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]


const tablero = {
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

console.table(tablero)

// Colocar barcos


