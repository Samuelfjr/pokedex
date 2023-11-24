import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    setLoading(true);
    const data = await getPokemons();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemon()
    })
    setPokemons(result);
    setLoading(false);
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;
