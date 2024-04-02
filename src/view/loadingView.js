import { constants } from "../constants.js";
export const createLoadingElement = () => {
  const element = document.createElement("h2");
  element.innerText = "Loading...";
  element.id = constants.LOADING_ID;
  return element;
};
