import { createWelcomeElement } from "../view/welcomeView.js";

export const initWelcomePage = () => {
  document.body.appendChild(createWelcomeElement());
};
