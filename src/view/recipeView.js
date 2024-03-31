import {
  RESULT_CLASS,
  RESULT_IMAGE_CLASS,
  RESULT_INSTRUCTIONS_CLASS,
  RESULT_TITLE_CLASS,
  RECIPE_ID,
} from "../constants.js";

export const createRecipeElement = (result) => {
  const element = document.createElement("div");
  element.classList.add(RESULT_CLASS);
  element.id = RECIPE_ID;

  // h2 title
  const title = document.createElement("h2");
  title.innerText = result.strDrink;
  title.classList.add(RESULT_TITLE_CLASS);
  element.appendChild(title);
  // p instructions
  const instructions = document.createElement("p");
  instructions.innerText = result.strInstructions;
  instructions.classList.add(RESULT_INSTRUCTIONS_CLASS);
  element.appendChild(instructions);
  // img image
  const image = document.createElement("img");
  image.src = result.strDrinkThumb;
  image.classList.add(RESULT_IMAGE_CLASS);
  element.appendChild(image);

  return element;
};
