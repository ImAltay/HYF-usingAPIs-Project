import {
  RESULT_CLASS,
  RESULT_IMAGE_CLASS,
  RESULT_INSTRUCTIONS_CLASS,
  RESULT_TITLE_CLASS,
  BUTTON_CLASS,
  READ_MORE_BUTTON_CLASS,
} from "../constants.js";

export const createResultElement = (result) => {
  const element = document.createElement("div");
  element.classList.add(RESULT_CLASS);
  // h2 title
  const title = document.createElement("h2");
  title.innerText = result.strDrink;
  title.classList.add(RESULT_TITLE_CLASS);
  element.appendChild(title);
  // p instructions
  const instructions = document.createElement("p");
  instructions.innerText = result.strInstructions.slice(0, 90) + "..";
  instructions.classList.add(RESULT_INSTRUCTIONS_CLASS);
  element.appendChild(instructions);
  // img image
  const image = document.createElement("img");
  image.src = result.strDrinkThumb;
  image.classList.add(RESULT_IMAGE_CLASS);
  element.appendChild(image);

  // Read More
  const readMore = document.createElement("button");
  readMore.classList.add(BUTTON_CLASS);
  readMore.classList.add(READ_MORE_BUTTON_CLASS);
  readMore.innerText = "Read More";
  element.appendChild(readMore);

  // id
  element.id = result.idDrink;

  return element;
};
