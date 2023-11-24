import React from "react";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div>
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon></Pokemon>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
