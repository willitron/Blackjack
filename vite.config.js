import { defineConfig } from 'vite'

export default defineConfig({
    base : '/Blackjack/',
    plugins : []
});

export const drawCard = (card, container) => {

    const image = document.createElement("img");
  
    image.src = `assets/cartas/${card}.png`;
  
    image.classList.add("carta");
  
    container.appendChild(image);
  
  };