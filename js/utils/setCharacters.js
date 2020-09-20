let CHARACTERS = characters;
const API = "https://rickandmortyapi.com/api/character/:id";
const container = document.getElementById("images");
var change;
let cardInit = `
<div class="images__card descriptionOut">
    <img src=":img" class="images__card--character rotateIn" id=":idImage"
        alt="Image 1" onclick="hide(:idFunction)">
    <div class="images__card--mainDescription rotateIn" id=":idDescription">
        <p class="images__card--mainDescription--name">Name: </p>
        <p class="images__card--mainDescription--universe">Location: </p>
    </div>

    <div class="images__card--allData rotateOut" onclick="show(:idFunction)" id=":idAllData">
        <p class="images__card--allData--name">Name: </p>
        <p class="images__card--allData--status">Status: </p>
        <p class="images__card--allData--specie">Specie: </p>
        <p class="images__card--allData--type">Type: </p>
        <p class="images__card--allData--gender">Gender: </p>
        <p class="images__card--allData--origin">Origin: </p>
        <p class="images__card--allData--location">Location: </p>
        <div class="images__card--allData--origin">
            <h2 class="images__card--allData--origin--title">First chapter</h2>
            <p class="images__card--allData--origin--chapter">Chapter: </p>
            <p class="images__card--allData--origin--name">Chapter Name: </p>
            <p class="images__card--allData--origin--date">Chapter date: </p>
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

        card = card.replaceAll("Name:", `<b>Name:</b> ${data.name}`);
        card = card.replaceAll("Location:", `<b>Location:</b> ${data.location.name}`);


        card = card.replace(":idAllData", `allData__${index}`);
        card = card.replace("Status:", `<b>Status:</b> ${data.status}`);
        card = card.replace("Specie:", `<b>Specie:</b> ${data.species}`);
        card = card.replace("Type:", `<b>Type:</b> ${data.type}`);
        card = card.replace("Gender:", `<b>Gender:</b> ${data.gender}`);
        card = card.replace("Origin:", `<b>Origin:</b> ${data.origin.name}`);
        card = card.replace("Chapter:", `<b>Chapter:</b> ${origin.episode}`);
        card = card.replace("Chapter Name:", `<b>Chapter Name:</b> ${origin.name}`);
        card = card.replace("Chapter date:", `<b>Chapter date:</b> ${origin.air_date}`);
        container.innerHTML += card;
    } catch (error) {
        console.error(error);
    }
});
