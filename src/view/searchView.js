import {
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  SEARCH_FORM_ID,
  CONTAINER_CLASS,
} from "../constants.js";

export const createSearchElement = () => {
  const element = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  element.classList.add(CONTAINER_CLASS);
  form.id = SEARCH_FORM_ID;
  input.id = SEARCH_INPUT_ID;
  button.id = SEARCH_BUTTON_ID;
  button.type = "button";

  button.innerHTML = "&#x1F50E";

  form.appendChild(input);
  form.appendChild(button);
  element.appendChild(form);
  return element;
};
