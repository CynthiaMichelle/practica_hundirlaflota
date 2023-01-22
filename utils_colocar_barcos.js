// COLOCACIÓN DE LOS BARCOS
import { indiceFilas, indiceColumnas, listaBarcos } from './utils_tablero.js'

// Aux
// Lista con las posibles direcciones de colocacion
const direccionColocacion = ['vertical', 'horizontal']

// Usamos var por que queremos que esta variable sea editable desde el archivo que ejecuta la funcion de colocar barcos en el tabler (con let no lo permite)
var posicionesOcupadas = []
var todasPosicionesBarcos = {}

//Funcion elemento aleatorio
function obtenerElementoAleatorio(lista) {
    const elementoAleatorio = lista[Math.floor(Math.random() * lista.length)]
    return elementoAleatorio
}

//Funcion posicion aleatoria
function obtenerPosicionAleatoria(valoresExcluir = []) {
    let filaAleatoria = obtenerElementoAleatorio(indiceFilas)
    let columnaAleatoria = obtenerElementoAleatorio(indiceColumnas)
    let posicionAleatoria = filaAleatoria + String(columnaAleatoria)
    if (valoresExcluir.length != 0) {
        while (valoresExcluir.includes(posicionAleatoria)) {
            filaAleatoria = obtenerElementoAleatorio(indiceFilas)
            columnaAleatoria = obtenerElementoAleatorio(indiceColumnas)
            posicionAleatoria = filaAleatoria + String(columnaAleatoria)
        }
    }
    return posicionAleatoria
}

// Funcion generadora posicioines del barco
function generadorPosicionesBarco(posicionAleatoria, direccionAleatoria, longitudBarco) {
    // Colocacion del barco
    let posicionesBarco = []

    // Generacion de posiciones que serán ocupadas por el barco en función de su direccion vertical-horizontas
    if (direccionAleatoria == 'vertical') {
        for (let i = 0; i < longitudBarco; i++) {
            // posicion comienzo colocacion
            let posicion = posicionAleatoria

            // pasamos a numero ASCII con .charCodeAt(0)y le sumamos el contador i para obtener el siguiente numero
            let nuevaFilaNumero = posicion[0].charCodeAt(0) + i

            // volvemos a pasar a letra
            let nuevaFilaLetra = String.fromCharCode(nuevaFilaNumero)

            // Añadimos posicion a la lista de posiciones ocupadas por el barco
            posicionesBarco.push(nuevaFilaLetra + posicion[1])
        }
    } else {
        for (let i = 0; i < longitudBarco; i++) {
            // posicion comienzo colocacion
            let posicion = posicionAleatoria

            // pasamos a sumamos el contador i para obtener la siguiente columna
            let nuevaColumna = parseInt(posicion[1]) + i

            // Añadimos posicion a la lista de posiciones ocupadas por el barco
            posicionesBarco.push(posicion[0] + String(nuevaColumna))
        }
    }
    return posicionesBarco
}

// Funcion para colocar barcos
function colocarBarco(tablero, barco) {

    // Variable que contiene la direccion de colocacion, obtenida aleatoriamente de la lista direccionColocacion
    let direccionAleatoria = obtenerElementoAleatorio(direccionColocacion)

    // Posicion aleatoria del tablero
    let posicionAleatoria = obtenerPosicionAleatoria()

    // longitud barco
    let longitudBarco = barco.length

    // Posiciones del barco iniciales
    let posicionesBarco = generadorPosicionesBarco(posicionAleatoria, direccionAleatoria, longitudBarco)

    // Fila y Columna Maxima
    const filaMaxima = "J"
    const columnaMaxima = 10

    // Regla de generacion de posiciones aleatorias
    while (
        (direccionAleatoria == 'horizontal' && parseInt(posicionAleatoria[1]) > columnaMaxima - longitudBarco) ||
        (direccionAleatoria == 'vertical' && posicionAleatoria[0] > String.fromCharCode(filaMaxima.charCodeAt(0) - longitudBarco)) ||
        posicionesBarco.some(item => posicionesOcupadas.includes(item))
    ) {
        posicionAleatoria = obtenerPosicionAleatoria()
        posicionesBarco = generadorPosicionesBarco(posicionAleatoria, direccionAleatoria, longitudBarco)
    }

    // Introducimos el barco y sus posiciones en objeto listaBarcosOcupados
    // comprobamos si un barco con el mismo nombre esta ya presente en listaBarcosOcupados de ese jugador y en ese caso le damos otro nombre
    let listaBarcosOcupados = Object.keys(todasPosicionesBarcos)

    if (listaBarcosOcupados.includes('barco')) {

        let nombreBarco = listaBarcosOcupados[listaBarcosOcupados.length - 1]
        todasPosicionesBarcos[nombreBarco + 'x'] = posicionesBarco
    } else {
        todasPosicionesBarcos['barco'] = posicionesBarco
    }

    // Para todas las posiciones del barco obtenidas, lo coloca en el tablero
    for (let posicion of posicionesBarco) {
        let fila = posicion[0]
        let columna = parseInt(posicion[1])
        tablero[fila][columna] = barco[0]
        posicionesOcupadas.push(posicion)
    }

    // Devuelve resultado de tablero y posiciones ocupadas
    let resultado = {
        tablero: tablero,
        posicionesOcupadas: posicionesOcupadas,
        todasPosicionesBarcos: todasPosicionesBarcos
    }

    return resultado
}

function colocarTodosBarcosTablero(tablero, listaBarcos) {
    todasPosicionesBarcos = {}
    for (let barco of listaBarcos) {
        let resultadoColocacion = colocarBarco(tablero, barco)
        tablero = resultadoColocacion['tablero']
    }

    let result = {
        tablero: tablero,
        todasPosicionesBarcos: todasPosicionesBarcos
    }
    return result
}

export { colocarTodosBarcosTablero, obtenerPosicionAleatoria }