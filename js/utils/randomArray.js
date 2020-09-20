
/* LIMIT OF CHARACTERS */
const LIMIT = 671;
/* EMPTY ARRAY */
let characters = [0,0,0,0,0,0,0,0,0];

characters = characters.map(()=>Math.floor(Math.random()*LIMIT));
characters = characters.map(character=>{
    return character==0?1:character;
});


module.exports = () => characters;