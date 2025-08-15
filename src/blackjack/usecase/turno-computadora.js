
import {  pedirCarta , valorCarta , crearCartaHtml} from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar los puntos 
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos , puntosHTML , divCartasComputadora , deck = 0 ) => {

    if ( !puntosMinimos ) throw Error('Puntos minimos son necesarios')
    if ( !puntosHTML ) throw Error('Argumento puntosHTML son necesario')

        let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        //aqui
        const imgCarta = crearCartaHtml ( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}