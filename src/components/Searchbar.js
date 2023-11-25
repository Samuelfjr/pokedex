import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="input-group">
        <div className="searchbar">
          <input placeholder="Pesquisar" onChange={onChangeHandler} />
        </div>
        <div className="searchbar-btn">
          <button onClick={onButtonClickHandler}>Enviar</button>
        </div>
      </div>
      {pokemon ? (
        <>
          <h3>N° {pokemon.id}</h3>
          <h3>Espécie: {pokemon.species.name}</h3>
          <h3>Nome: {pokemon.name}</h3>
          <h3>Egg Group: {pokemon.name}</h3>
        </>
      ) : null}
    </div>
  );
};

export default Searchbar;
