export const getDrinks = {
  byName: (search) => fetchDrinksByNames(search),
  random: (amount) => fetchRandomDrinks(amount),
  byId: (id) => fetchDrinkById(id),
};

const fetchDrinksByNames = async (search) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => {
      error;
    });
};

const fetchRandomDrinks = async (amount) => {
  const drinks = [];
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  for (let i = 0; i < amount; i++) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => drinks.push(data.drinks[0]))
      .catch((error) => {
        error;
      });
  }

  return drinks;
};

const fetchDrinkById = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.drinks[0])
    .catch((error) => {
      error;
    });
};
