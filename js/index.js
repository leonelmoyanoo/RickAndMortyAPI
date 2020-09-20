let CHARACTERS = characters;
const API = "https://rickandmortyapi.com/api/character/:id";



CHARACTERS.forEach(async(character) => {

            const response = await fetch(`https://rickandmortyapi.com/api/character/`)
            console.log(response);
});
