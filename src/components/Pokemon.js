// import React from "react";

// const Pokemon = (props) => {
//   const { pokemon } = props;
//   console.log("pokemons", pokemon);
//   return (
//     <div className="pokemon-card">
//       <div className="pokemon-image-container">
//         <img
//           alt={pokemon.name}
//           src={pokemon.sprites.front_default}
//           className="pokemon-image"
//         />
//       </div>
//       <div className="card-body">
//         <div className="card-top">
//           <div className="pokemon-type">
//             {pokemon.types.map((type, index) => {
//               return (
//                 <div key={index} className="pokemon-type-text">
//                   {type.type.name}
//                 </div>
//               );
//             })}
//           </div>
//           <h3>N° {pokemon.id}</h3>
//           <h3>Espécie: {pokemon.species.name}</h3>
//           <h3>Nome: {pokemon.name}</h3>
//           <h3>Egg Group: {pokemon.name}</h3>

//           <div className="container-statys">
//             <h2>Status:</h2>

//             <div>
//               <h3>
//                 HP:
//                 {pokemon.abilities.map((ability, index) => {
//                   return (
//                     <div key={index} className="pokemon-type-text">
//                       {ability.ability.name}
//                     </div>
//                   );
//                 })}
//               </h3>
//             </div>
//           </div>

//           <div className="container-ability">
//             <h3>Habilidades:</h3>
//             {pokemon.abilities.map((ability, index) => {
//               return (
//                 <div key={index} className="pokemon-type-text">
//                   Habilidade:
//                   {ability.ability.name}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pokemon;

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
          <h3>N° {pokemon.id}</h3>
          <h3>Espécie: {pokemon.species.name}</h3>
          <h3>Nome: {pokemon.name}</h3>
          <h3>Egg Group: {pokemon.name}</h3>

          <div className="container-status">
            <h2>Status:</h2>
            {stats.map((stat, index) => (
              <div key={index}>
                <h3>
                  {stat.name} : {stat.base_stat}
                </h3>
              </div>
            ))}
          </div>

          <div className="container-ability">
            <h3>Habilidades:</h3>
            {pokemon.abilities.map((ability, index) => (
              <div key={index} className="pokemon-type-text">
                Habilidade: {ability.ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
