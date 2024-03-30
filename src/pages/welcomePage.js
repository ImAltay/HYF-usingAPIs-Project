import { createWelcomeElement } from "../view/welcomeView.js";
import { createSearchElement } from "../view/searchView.js";
export const initWelcomePage = () => {
  document.body.appendChild(createWelcomeElement());
  document.body.appendChild(createSearchElement());
};
