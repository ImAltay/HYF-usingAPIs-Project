/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomeElement = () => {
  const element = document.createElement("h1");
  element.innerText = `Welcome \n Search Cocktails by Name`;

  return element;
};
