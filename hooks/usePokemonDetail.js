import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDeatail(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon() {
    try {
      let response;
      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
      });
    } catch (error) {
      console.log("it,s wrong ");
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, []);

  return [pokemon];
}

export default usePokemonDeatail;
