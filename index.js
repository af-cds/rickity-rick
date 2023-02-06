import createCharacterCard from "./components/card/card.js"

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
let maxPage;
let page = 1;
let searchQuery = "";


// fetching-data with async function - import from https://rickandmortyapi.com/api/character

const url = "https://rickandmortyapi.com/api/character"

fetchCharacters()


async function fetchCharacters() {

    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()

    // data needed - the src of the image, the name of the character, the status, type and occurrences values
    
    // console.log(data.results)

    const listOfCharacters = data.results
    const specifiedCharacters = listOfCharacters.map(result =>
     ({ src: result.image, 
    name: result.name, 
    status: result.status,
    type: result.type,
    occurance: result.episode.length }))
      
    console.log(specifiedCharacters)

    specifiedCharacters.forEach(character => {
      const newCharacter = createCharacterCard(character)
       cardContainer.append(newCharacter)
      })  
    }


   