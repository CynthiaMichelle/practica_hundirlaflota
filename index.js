import { listaBarcos, generadorTablero, agua, obtenerResultadoDisparo, actualizarTablero } from './utils_tablero.js'
import { colocarTodosBarcosTablero, obtenerPosicionAleatoria } from './utils_colocar_barcos.js'
import usePrinter from './printer.js'
import { finJuego } from './game.js'

// Empiezo el juego
usePrinter().printHeading('El Simulador de Hundir La Flota Empieza')

// Generamos los 4 tableros
let tableroJugadorA = generadorTablero(10, 10)
let tableroJugadorB = generadorTablero(10, 10)
let tableroEnemigoJugadorA = generadorTablero(10, 10)
let tableroEnemigoJugadorB = generadorTablero(10, 10)

// Colocamos todos los barcos en los tableros de jugador A y B
let jugadorA = colocarTodosBarcosTablero(tableroJugadorA, listaBarcos)
tableroJugadorA = jugadorA.tablero
let posicionesBarcosJugadorA = jugadorA.todasPosicionesBarcos

let jugadorB = colocarTodosBarcosTablero(tableroJugadorB, listaBarcos)
tableroJugadorB = jugadorB.tablero
let posicionesBarcosJugadorB = jugadorB.todasPosicionesBarcos

// Generamos listas auxiliares tocado y agua
let tocadosJugadorA = []
let aguaJugadorA = []
let tocadosJugadorB = []
let aguaJugadorB = []

// Variables contadores ronda
let contadorRondaJugadorA = 0
let contadorRondaJugadorB = 0

// Variables contador disparos
var contadorDisparosJugadorA = 0
var contadorDisparosJugadorB = 0

// variable auxiliar status de juego
var statusJuego = 'en curso'

// Mostramos Tablero Jugador A
usePrinter().printLine('Player A')
usePrinter().printLine('Tablero propio:')
console.table(tableroJugadorA)
console.log()

// Mostramos Tablero Jugador B
usePrinter().printLine('Player B')
usePrinter().printLine('Tablero propio:')
console.table(tableroJugadorB)

// Empezamos mostrando por pantalla que empieza el juego  
usePrinter().printHeading('Empieza el juego')
usePrinter().printLine('')

// Variables Auxiliares para control de juagdor en juego y contrario
var jugadorEnJuego = 'Jugador A'
var tableroJugadorEnJuego = tableroJugadorA
var tableroEnemigoJugadorEnJuego = tableroEnemigoJugadorA
var tableroJugadorContrario = tableroJugadorB
var tocadosJugadorEnJuego = tocadosJugadorA
var aguaJugadorEnJuego = aguaJugadorA
var posicionesBarcosJugadorContrario = posicionesBarcosJugadorB
var ganadorJuego = null
var contadorDisparosJugadorEnJuego = contadorDisparosJugadorA
var contadorRondaJugadorEnJuego = contadorRondaJugadorA


while (statusJuego != 'acabado') {
    // Titulo comienzo ronda
    usePrinter().printLine(`Ronda ${contadorRondaJugadorEnJuego} para ${jugadorEnJuego}`)
    usePrinter().printLine('==============')

    do {
        var resultadoDisparo = disparo(
            jugadorEnJuego, tableroJugadorEnJuego, tableroJugadorContrario, tableroEnemigoJugadorEnJuego, aguaJugadorEnJuego,
            tocadosJugadorEnJuego, posicionesBarcosJugadorContrario, statusJuego,
            ganadorJuego
        )
    } while (resultadoDisparo != agua[0])

    cambioTurno(jugadorEnJuego)
}

finJuego(ganadorJuego, tableroJugadorA, tableroJugadorB)

// FUNCIONES
// funcion cambio turno
function cambioTurno() {
    if (jugadorEnJuego == 'Jugador B') {
        jugadorEnJuego = 'Jugador A'
        tableroJugadorEnJuego = tableroJugadorA
        tableroEnemigoJugadorEnJuego = tableroEnemigoJugadorA
        tableroJugadorContrario = tableroJugadorB
        tocadosJugadorEnJuego = tocadosJugadorA
        aguaJugadorEnJuego = aguaJugadorA
        posicionesBarcosJugadorContrario = posicionesBarcosJugadorB
        contadorDisparosJugadorEnJuego = contadorDisparosJugadorA
        contadorRondaJugadorEnJuego = contadorRondaJugadorA + 1
        contadorRondaJugadorB = contadorRondaJugadorEnJuego
    } else {
        jugadorEnJuego = 'Jugador B'
        tableroJugadorEnJuego = tableroJugadorB
        tableroEnemigoJugadorEnJuego = tableroEnemigoJugadorB
        tableroJugadorContrario = tableroJugadorA
        tocadosJugadorEnJuego = tocadosJugadorB
        aguaJugadorEnJuego = aguaJugadorB
        posicionesBarcosJugadorContrario = posicionesBarcosJugadorA
        contadorDisparosJugadorEnJuego = contadorDisparosJugadorB
        contadorRondaJugadorEnJuego = contadorRondaJugadorB + 1
        contadorRondaJugadorA = contadorRondaJugadorEnJuego
    }
}

// funcion disparo
function disparo(
    jugadorEnJuego, tableroJugadorEnJuego, tableroJugadorContrario, tableroEnemigoJugadorEnJuego, aguaJugadorEnJuego,
    tocadosJugadorEnJuego, posicionesBarcosJugadorContrario
) {
    // El jugador A elige una posición para disparar
    // valores a excluir de las posiciones de disparo
    let posicionesYaDisparadas = tocadosJugadorEnJuego.concat(aguaJugadorEnJuego)
    let posicionDisparo = obtenerPosicionAleatoria(posicionesYaDisparadas)

    // comporbar si es agua o tocado
    let resultadoDisparo = obtenerResultadoDisparo(tableroJugadorContrario, posicionDisparo)
    contadorDisparosJugadorEnJuego = tocadosJugadorEnJuego.concat(aguaJugadorEnJuego).length
    usePrinter().printLine(`Tiro #${contadorDisparosJugadorEnJuego} apuntando a ${posicionDisparo}: ${resultadoDisparo}`)

    // Actualizamos tableros
    tableroEnemigoJugadorEnJuego = actualizarTablero(tableroEnemigoJugadorEnJuego, posicionDisparo, resultadoDisparo)
    tableroJugadorContrario = actualizarTablero(tableroJugadorContrario, posicionDisparo, resultadoDisparo)

    // Visualizamos tableros
    usePrinter().printLine('Tablero propio')
    console.table(tableroJugadorEnJuego)
    usePrinter().printLine('Tablero enemigo')
    console.table(tableroEnemigoJugadorEnJuego)

    // Flujo en funcion de si el disparo da en agia o barco
    if (resultadoDisparo == agua[0]) {
        aguaJugadorEnJuego.push(posicionDisparo)
    } else {
        tocadosJugadorEnJuego.push(posicionDisparo)

        let clavesBarcos = Object.keys(posicionesBarcosJugadorContrario)
        let checker = (arr, target) => target.every(v => arr.includes(v));

        for (let clave of clavesBarcos) {
            let result = checker(tocadosJugadorEnJuego, posicionesBarcosJugadorContrario[clave])
            if (result == true) {
                delete posicionesBarcosJugadorContrario[clave]
                usePrinter().printLine('Hundido')

                // comprobar si siguen quedando barco en posicionesBarcosJugadorContrario, y si no quedan, se acaba el juego y gana A
                clavesBarcos = Object.keys(posicionesBarcosJugadorContrario)
                if (clavesBarcos.length == 0) {
                    statusJuego = 'acabado'
                    ganadorJuego = jugadorEnJuego
                    break
                }
            }
        }

    }
    return resultadoDisparo
}