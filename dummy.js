function searchShow(query) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      renderShows(data);
    })
    .catch((error) => {
      document.getElementById(
        "errorMessage"
      ).innerHTML = `oh no, an error!, </br>  ${error}`;
      renderShows([]);
    });
}

function renderShows(data) {
  document.getElementById("queryResult").innerHTML = "";
  data.drinks.forEach((element) => {
    const liElement = document.createElement("li");
    const imageElement = document.createElement("img");
    liElement.innerHTML =
      `<h3>${element.strDrink}</h3>` + `<p>${element.strInstructions}</p>`;

    if (element.strDrinkThumb == null) {
      imageElement.alt = "no image has been found";
    } else {
      imageElement.src = element.strDrinkThumb;
      liElement.appendChild(imageElement);
    }

    document.getElementById("queryResult").appendChild(liElement);
  });
}

window.onload = () => {
  let searchTimeoutToken = 0;
  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onkeyup = (event) => {
    if (searchFieldElement.value.trim() === "") {
      return;
    }

    searchTimeoutToken = setTimeout(() => {
      searchShow(searchFieldElement.value);
    }, 350);
  };
};
