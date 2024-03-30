import { RESULTS_ID, RESULT_ID } from "../constants.js";

const dummyData = [
  {
    title: "Title 1",
    description: "Description 1",
    url: "https://www.example.com",
  },
  {
    title: "Title 2",
    description: "Description 2",
    url: "https://www.example.com",
  },
  {
    title: "Title 3",
    description: "Description 3",
    url: "https://www.example.com",
  },
];

export const createResultsElement = (results) => {
  const element = document.createElement("div");
  element.id = RESULTS_ID;

  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.id = RESULT_ID;
    resultElement.innerHTML = `
        <h2>${result.title}</h2>
        <p>${result.description}</p>
        <a href="${result.url}" target="_blank">Read more</a>
        `;
    element.appendChild(resultElement);
  });

  return element;
};
