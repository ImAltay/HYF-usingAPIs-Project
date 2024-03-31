/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomeElement = () => {
  const element = document.createElement("h1");
  element.innerText = `Welcome to the Mixer App`;

  return element;
};
