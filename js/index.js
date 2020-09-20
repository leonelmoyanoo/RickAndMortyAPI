const randomeImage = document.getElementById("randomImage");
document.addEventListener("DOMContentLoaded", function(event) {
    getRandomImage();
});
const getRandomImage = async ()=>{
    let random = Math.floor(Math.random()*LIMIT);
    try{
        let response = await fetch(`${API.replace(":id", random)}`)
        let data = await response.json();
        let image = data.image;
        randomeImage.src = image;
    }catch (error){
        console.error(error);
    }
}