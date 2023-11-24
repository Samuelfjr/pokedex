import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statPromises = pokemon.stats.map(async (stat) => {
          const response = await fetch(stat.stat.url);
          const data = await response.json();
          return {
            name: stat.stat.name,
            base_stat: stat.base_stat,
          };
        });

        const resolvedStats = await Promise.all(statPromises);
        setStats(resolvedStats);
      } catch (error) {
        console.error("Erro ao obter estatísticas:", error);
      }
    };

    fetchStats();
  }, [pokemon.stats]);

  return (
    <div className="container-pokemon-card">
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>

          <div className="pokemon-details">
            <h3>N° {pokemon.id}</h3>
            <h3>Espécie: {pokemon.species.name}</h3>
            <h3>Nome: {pokemon.name}</h3>
            <h3>Egg Group: {pokemon.name}</h3>
          </div>
        </div>
      </div>

      <div className="container-subcard">
        <div className="pokemon-stats">
          <h1>Status:</h1>
          {stats.map((stat, index) => (
            <div key={index} className="pokemon-stats-text">
              <h3>{stat.name}: </h3> <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>

        <div className="container-ability">
          <h1>Habilidades:</h1>
          {pokemon.abilities.map((ability, index) => (
            <div key={index} className="pokemon-ability-text">
              <h3>Habilidade: </h3> <p>{ability.ability.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
