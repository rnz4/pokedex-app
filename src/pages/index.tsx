import { useEffect } from "react";
import PokemonService from "./../services/pokemon.service";

export default function Home() {
  const fetchPokemons = async () => {
    const $pokemons = await PokemonService.getPokemons();
    console.log($pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <>
      <p>hola mundo</p>
    </>
  );
}
