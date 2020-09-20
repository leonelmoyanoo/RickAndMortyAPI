function hide(index){
    let image = document.getElementById(`image__${index}`);
    let description = document.getElementById(`description__${index}`);
    let allData = document.getElementById(`allData__${index}`);
    image.classList.remove("rotateIn");
    image.classList.add("rotateOut");

    description.classList.remove("rotateIn");
    description.classList.add("rotateOut");

    allData.classList.remove("rotateOut");
    allData.classList.add("rotateIn");
}
function show(index){
    let image = document.getElementById(`image__${index}`);
    let description = document.getElementById(`description__${index}`);
    let allData = document.getElementById(`allData__${index}`);
    image.classList.remove("rotateOut");
    image.classList.add("rotateIn");

    description.classList.remove("rotateOut");
    description.classList.add("rotateIn");

    allData.classList.remove("rotateIn");
    allData.classList.add("rotateOut");
}