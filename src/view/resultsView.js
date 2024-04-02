import { constants } from "../constants.js";

export const createResultsElement = () => {
  const element = document.createElement("div");
  element.id = constants.RESULTS_ID;
  element.classList.add(constants.CONTAINER_CLASS);
  return element;
};
