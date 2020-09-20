let CHARACTERS = characters;
const API = "https://rickandmortyapi.com/api/character/:id";
const container = document.getElementById("images");
var change;
let cardInit = `
<div class="images__card">
    <img src=":img" class="images__card--character rotateIn" id=":idImage"
        alt="Image 1" onclick="hide(:idFunction)">
    <div class="images__card--mainDescription rotateIn" id=":idDescription">
        <p class="images__card--mainDescription--name">Name: </p>
        <p class="images__card--mainDescription--universe">Location: </p>
    </div>

    <div class="images__card--allData rotateOut" onclick="show(:idFunction)" id=":idAllData">
        <p class="images_card--allData--name">Name: </p>
        <p class="images_card--allData--status">Status: </p>
        <p class="images_card--allData--specie">Specie: </p>
        <p class="images_card--allData--type">Type: </p>
        <p class="images_card--allData--gender">Gender: </p>
        <p class="images_card--allData--origin">Origin: </p>
        <p class="images_card--allData--location">Location: </p>
        <div class="images_card--allData--origin">
            <h2 class="images_card--allData--origin--title">First chapter</h2>
            <p class="images_card--allData--origin--chapter">Chapter: </p>
            <p class="images_card--allData--origin--name">Chapter Name: </p>
            <p class="images_card--allData--origin--date">Chapter date: </p>
        </div>
    </div>
</div>
`;


CHARACTERS.forEach(async (character, index) => {
    try {
        let response = await fetch(`${API.replace(":id", character)}`)
        let data = await response.json()
        response = await fetch(`${data.episode}`);
        let origin = await response.json()

        card = cardInit
        card = cardInit.replace(":img", `${data.image}`);
        card = card.replaceAll(":idFunction", `${index}`);
        card = card.replace(":idImage", `image__${index}`);
        card = card.replace(":idDescription", `description__${index}`);

        card = card.replaceAll("Name:", `Name: ${data.name}`);
        card = card.replaceAll("Location:", `Location: ${data.location.name}`);


        card = card.replace(":idAllData", `allData__${index}`);
        card = card.replace("Status:", `Status: ${data.status}`);
        card = card.replace("Specie:", `Specie: ${data.species}`);
        card = card.replace("Type:", `Type: ${data.type}`);
        card = card.replace("Gender:", `Gender: ${data.gender}`);
        card = card.replace("Origin:", `Origin: ${data.origin.name}`);
        card = card.replace("Chapter:", `Chapter: ${origin.episode}`);
        card = card.replace("Chapter Name:", `Chapter Name: ${origin.name}`);
        card = card.replace("Chapter date:", `Chapter date: ${origin.air_date}`);
        container.innerHTML += card;
    } catch (error) {
        console.error(error);
    }
});
