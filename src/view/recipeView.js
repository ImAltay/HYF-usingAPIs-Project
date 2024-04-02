import {
  RESULT_CLASS,
  RESULT_IMAGE_CLASS,
  RESULT_INSTRUCTIONS_CLASS,
  RESULT_TITLE_CLASS,
  RECIPE_ID,
  BACK_BUTTON_CLASS,
} from "../constants.js";

export const createRecipeElement = (result) => {
  const element = document.createElement("div");
  element.classList.add(RESULT_CLASS);
  element.id = RECIPE_ID;

  const button = document.createElement("button");
  button.classList.add(BACK_BUTTON_CLASS);
  button.innerText = "Go Back";
  element.appendChild(button);
  // h2 title
  const title = document.createElement("h2");
  title.innerText = result.strDrink;
  title.classList.add(RESULT_TITLE_CLASS);
  element.appendChild(title);

  // img image
  const image = document.createElement("img");
  image.src = result.strDrinkThumb;
  image.classList.add(RESULT_IMAGE_CLASS);
  element.appendChild(image);
  // ingredients list
  const ingredients = document.createElement("ul");
  const ingredientsList = Object.keys(result)
    .filter((key) => key.includes("strIngredient") && result[key])
    .map((key) => result[key]);
  ingredientsList.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerText = ingredient;
    ingredients.appendChild(li);
  });
  element.appendChild(ingredients);

  // p instructions
  const instructions = document.createElement("p");
  instructions.innerText = result.strInstructions;
  instructions.classList.add(RESULT_INSTRUCTIONS_CLASS);
  element.appendChild(instructions);
  return element;
};
