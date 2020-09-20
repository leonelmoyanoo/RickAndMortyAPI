
/* LIMIT OF CHARACTERS */
const LIMIT = 671;
/* EMPTY ARRAY */
let characters = [0,0,0,0,0,0,0,0,0];

/* SET THE ARRAY WHIT VALUE BETWEEN 0-2 (ROUNDED) */
characters = characters.map(()=>Math.floor(Math.random()*3));

/* MAP THE ARRAY TO SET VALUES BETWEEN 1-999 */
characters = characters.map(character=>{
    /* IF THE CHARACTER IS 0 CHANGE TO 1 */
    character = character==0?1:character;
    /* SET 10 OR 100 TO MULTIPLY THE RANDOM NUMBER TO MAKE IT A NUMBER > 0*/
    let num=character==1?10:100;
    let random;
    random = Math.random()*(num);
    /* ROUND THE NUMBER WITH FLOOR */
    return Math.floor(character*random);
});


module.exports = () => characters;