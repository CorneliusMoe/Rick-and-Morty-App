import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
fetchCharacters();
async function fetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    if (response.ok) {
      const data = await response.json();
      const characterData = data.results;
      cardContainer.innerHTML = "";
      characterData.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
      });
    } else {
      console.log("something went wrong");
    }
  } catch (error) {
    console.error("an error occured");
  }
}
