import { USER_INTERFACE_ID, SEARCH_BAR_ID } from "../constants.js";

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomeElement = () => {
  const element = document.createElement("div");
  element.classList.add(USER_INTERFACE_ID);
  element.innerHTML = `<h1>Welcome to the Mixer App</h1>`;
  return element;
};
