import { createWelcomeElement } from "../view/welcomeView.js";
import { createSearchElement } from "../view/searchView.js";
import { createResultsElement } from "../view/resultsView.js";
import { createResultElement } from "../view/resultView.js";
import { createRecipeElement } from "../view/recipeView.js";
import { createErrorElement } from "../view/errorView.js";
import { createLoadingElement } from "../view/loadingView.js";
import { constants } from "../constants.js";
import { getDrinks } from "../feature/getDrinks.js";

export const initPage = () => {
  const userInterface = document.getElementById(constants.USER_INTERFACE_ID);
  // clear user interface
  userInterface.innerHTML = "";
  if (document.getElementById(constants.ERROR_ELEMENT_ID)) {
    document.getElementById(constants.ERROR_ELEMENT_ID).remove();
  }

  userInterface.appendChild(createWelcomeElement());
  userInterface.appendChild(createSearchElement());

  const results = createResultsElement();
  userInterface.appendChild(results);

  randomDrinks(document.getElementById(constants.RESULTS_ID));

  document
    .getElementById(constants.SEARCH_FORM_ID)
    .addEventListener("submit", searchDrinksHandler);

  document
    .getElementById(constants.SEARCH_BUTTON_ID)
    .addEventListener("click", searchDrinksHandler);
};

const searchDrinksHandler = () => {
  searchDrinks(document.getElementById(constants.RESULTS_ID));
};

const searchDrinks = async (results) => {
  // clear everything
  clearRecipe();
  showResultsAgain();
  if (document.getElementById(constants.ERROR_ELEMENT_ID)) {
    document.getElementById(constants.ERROR_ELEMENT_ID).remove();
  }
  results.innerHTML = "";
  //
  loading();
  if (document.getElementById(constants.SEARCH_INPUT_ID).value.trim() === "") {
    results.parentNode.appendChild(
      createErrorElement(
        "Please enter a drink name and try again. or go home.",
        true
      )
    );
    document
      .getElementById(constants.HOME_BUTTON_ID)
      .addEventListener("click", initPage);
    doneLoading();
    return;
  }
  const drinks = await getDrinks.byName(
    document.getElementById(constants.SEARCH_INPUT_ID).value
  );
  doneLoading();
  if (drinks === null) {
    results.parentNode.appendChild(
      createErrorElement("No drinks found. Try again. or go home.", true)
    );
    document
      .getElementById(constants.HOME_BUTTON_ID)
      .addEventListener("click", initPage);
    return;
  }

  drinks.forEach((result) => {
    results.appendChild(createResultElement(result));
  });

  readMoreButtonEventListener();
};

const randomDrinks = async (results) => {
  try {
    results.innerHTML = "";
    loading();
    const drinks = await getDrinks.random(10);
    drinks.forEach((result) => {
      results.appendChild(createResultElement(result));
    });
    doneLoading();
    readMoreButtonEventListener();
  } catch (error) {
    if (document.getElementById(constants.ERROR_ELEMENT_ID)) {
      document.getElementById(constants.ERROR_ELEMENT_ID).remove();
    }
    results.parentNode.appendChild(
      createErrorElement("Failed to load random drinks. Try again.")
    );
    doneLoading();
  }
};

const readMoreButtonEventListener = () => {
  document
    .querySelectorAll("." + constants.READ_MORE_BUTTON_CLASS)
    .forEach((button) => {
      button.addEventListener("click", function (event) {
        showRecipeHandler(event.target.parentNode.id);
      });
    });
};

const showRecipeHandler = async (id) => {
  loading();
  showRecipe(await getDrinks.byId(id));
  doneLoading();
};

const showRecipe = (recipe) => {
  const recipeElement = createRecipeElement(recipe);
  document
    .getElementById(constants.USER_INTERFACE_ID)
    .appendChild(recipeElement);
  // Go back button
  document
    .querySelector("." + constants.BACK_BUTTON_CLASS)
    .addEventListener("click", goBack);
  // Hide results
  const results = document.getElementById(constants.RESULTS_ID);
  results.classList.add("hide");
};

const clearRecipe = () => {
  const recipe = document.getElementById(constants.RECIPE_ID);
  if (recipe) {
    recipe.remove();
  }
};

const showResultsAgain = () => {
  document.getElementById(constants.RESULTS_ID).classList.remove("hide");
};

const goBack = () => {
  clearRecipe();
  showResultsAgain();
};

const loading = () => {
  const loadingElement = createLoadingElement();
  document
    .getElementById(constants.USER_INTERFACE_ID)
    .appendChild(loadingElement);
};

const doneLoading = () => {
  document.getElementById(constants.LOADING_ID).remove();
};
