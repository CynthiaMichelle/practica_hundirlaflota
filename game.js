import usePrinter from './printer.js'

function finJuego(ganadorJuego, tableroJugadorA, tableroJugadorB) {
    usePrinter().printLine('Y el ganador es...')
    usePrinter().printHeading(ganadorJuego)
    usePrinter().printLine('Los tableros finales son')

    usePrinter().printHeading('Jugador A')
    console.table(tableroJugadorA)

    usePrinter().printHeading('Jugador B')
    console.table(tableroJugadorB)
}

export { finJuego }