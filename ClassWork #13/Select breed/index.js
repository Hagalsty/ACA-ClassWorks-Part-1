const breedSelector = document.getElementById("breedSelector");
const imgForDogs = document.getElementById("imgForDogs");
async function getData(url) {
  const res = await fetch(url)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}

breedSelector.addEventListener("change", async function (event) {
  const { value: urlPart } = event.target;
  const url = `https://dog.ceo/api/breed/${urlPart}/images/random`;
  const res = await getData(url);
  console.log(res);
  imgForDogs.src = res.message;
  imgForDogs.style.width = "500px";
});
