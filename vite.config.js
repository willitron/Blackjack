import { defineConfig } from 'vite'

export default defineConfig({
    base : '/Blackjack/',
    plugins : []
});

export const drawCard = (card, container) => {

    const image = document.createElement("img");
  
    image.src = `/Blackjack/assets/cards/${card}.png`;
  
    image.classList.add("carta");
  
    container.appendChild(image);
  
  };