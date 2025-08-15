


/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno 
 */
export const crearCartaHtml = ( carta ) =>{
    if ( !carta ) throw Error ("La Carta es un argumento obligatorio")

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        // divCartasComputadora.append( imgCarta );

    return imgCarta;
} 