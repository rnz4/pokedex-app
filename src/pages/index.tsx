import { useEffect, useState } from "react";
import PokemonService from "./../services/pokemon.service";
import { PokeCard } from "../components/poke-card";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  //background: radial-gradient(
  //  circle,
  //  rgba(21, 65, 75, 1) 9%,
  //  rgba(9, 107, 121, 0.938813025210084) 47%,
  //  rgba(74, 80, 75, 1) 100%
  //);
`;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const fetchPokemons = async () => {
    const $pokemons = await PokemonService.getPokemons();
    console.log($pokemons);
    setPokemons($pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <Layout>
      {pokemons.map((pokemon: IPokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.image}
          type={pokemon.type}
        />
      ))}
    </Layout>
  );
}
