import { RESULTS_ID, CONTAINER_CLASS } from "../constants.js";

export const createResultsElement = () => {
  const element = document.createElement("div");
  element.id = RESULTS_ID;
  element.classList.add(CONTAINER_CLASS);
  return element;
};
