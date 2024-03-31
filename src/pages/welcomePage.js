import { createWelcomeElement } from "../view/welcomeView.js";
import { createSearchElement } from "../view/searchView.js";
import { createResultsElement } from "../view/resultsView.js";
import { createResultElement } from "../view/resultView.js";
import { createRecipeElement } from "../view/recipeView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { dummyData, dummy2 } from "../data.js";

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  userInterface.appendChild(createWelcomeElement());
  userInterface.appendChild(createSearchElement());

  const results = createResultsElement();
  dummyData.forEach((result) => {
    results.appendChild(createResultElement(result));
  });
  userInterface.appendChild(results);

  userInterface.appendChild(createRecipeElement(dummy2));
};
