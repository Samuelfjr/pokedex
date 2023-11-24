export const searchPokemon = async (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url);
  return await response.json();
};
export const getPokemons = async (limit = 300, offset = 0) => {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  return await response.json();
};

export const getPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
