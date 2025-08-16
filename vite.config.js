import { defineConfig } from 'vite'

export default defineConfig({
    base : '/Blackjack/',
    plugins : []
});

export const drawCard = (card, container) => {
    const image = document.createElement("img");

    // ✅ Busca en /cartas directamente
    image.src = `cartas/${card}.png`;

    image.classList.add("carta");
    container.appendChild(image);
};