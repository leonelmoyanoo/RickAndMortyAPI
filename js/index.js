var fetchUrl = require("fetch").fetchUrl;
let CHARACTERS = require("./utils/randomArray")();
const API = "https://rickandmortyapi.com/api/character/:id";

CHARACTERS.forEach(character => {
    fetchUrl(API.replace(":id", character), function (error, meta, body) {
        console.log(JSON.parse(body));
    });
});
