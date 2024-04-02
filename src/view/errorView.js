export const createErrorElement = (error) => {
  const element = document.createElement("h2");
  element.innerText = error;
  return element;
};
