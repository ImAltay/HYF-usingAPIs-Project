import { createWelcomeElement } from "../view/welcomeView.js";
import { createSearchElement } from "../view/searchView.js";
import { createResultsElement } from "../view/resultsView.js";
import { createResultElement } from "../view/resultView.js";
import { createRecipeElement } from "../view/recipeView.js";
import {
  USER_INTERFACE_ID,
  SEARCH_INPUT_ID,
  SEARCH_FORM_ID,
  SEARCH_BUTTON_ID,
  RESULTS_ID,
  BACK_BUTTON_CLASS,
  READ_MORE_BUTTON_CLASS,
  RECIPE_ID,
} from "../constants.js";
import { getDrinks } from "../feature/getDrinks.js";

export const initPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  userInterface.appendChild(createWelcomeElement());
  userInterface.appendChild(createSearchElement());

  const results = createResultsElement();
  userInterface.appendChild(results);

  randomDrinks(document.getElementById(RESULTS_ID));

  document
    .getElementById(SEARCH_FORM_ID)
    .addEventListener("submit", searchDrinksHandler);

  document
    .getElementById(SEARCH_BUTTON_ID)
    .addEventListener("click", searchDrinksHandler);
};

const searchDrinksHandler = () => {
  searchDrinks(document.getElementById(RESULTS_ID));
};

const searchDrinks = async (results) => {
  clearRecipe();
  showResultsAgain();
  const drinks = await getDrinks.byName(
    document.getElementById(SEARCH_INPUT_ID).value
  );

  results.innerHTML = "";
  drinks.forEach((result) => {
    results.appendChild(createResultElement(result));
  });

  readMoreButtonEventListener();
};

const randomDrinks = async (results) => {
  const drinks = await getDrinks.random(10);
  results.innerHTML = "";
  drinks.forEach((result) => {
    results.appendChild(createResultElement(result));
  });
  readMoreButtonEventListener();
};

const readMoreButtonEventListener = () => {
  document.querySelectorAll("." + READ_MORE_BUTTON_CLASS).forEach((button) => {
    button.addEventListener("click", function (event) {
      showRecipeHandler(event.target.parentNode.id);
    });
  });
};

const showRecipeHandler = async (id) => {
  showRecipe(await getDrinks.byId(id));
};

const showRecipe = (recipe) => {
  const recipeElement = createRecipeElement(recipe);
  document.getElementById(USER_INTERFACE_ID).appendChild(recipeElement);
  // Go back button
  document
    .querySelector("." + BACK_BUTTON_CLASS)
    .addEventListener("click", goBack);
  // Hide results
  const results = document.getElementById(RESULTS_ID);
  results.classList.add("hide");
};

const clearRecipe = () => {
  const recipe = document.getElementById(RECIPE_ID);
  if (recipe) {
    recipe.remove();
  }
};

const showResultsAgain = () => {
  document.getElementById(RESULTS_ID).classList.remove("hide");
};

const goBack = () => {
  clearRecipe();
  showResultsAgain();
};
