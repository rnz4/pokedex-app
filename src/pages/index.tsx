import { useEffect, useState } from "react";
import PokemonService from "./../services/pokemon.service";
import { PokeCard } from "../components/poke-card";
import styled from "styled-components";
import { Header } from "../components/header";
import { IPokemon } from "./../interfaces/poke-interfaces";
import { usePokeTeam } from "./../context/poketeam-context";

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

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const { addPokemon } = usePokeTeam();

  const fetchPokemons = async () => {
    const $pokemons = await PokemonService.getPokemons();
    setPokemons($pokemons);
  };

  const setMyTeam = (pokemon: IPokemon) => {
    addPokemon(pokemon);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Layout>
      <Header />
      {pokemons.map((pokemon: IPokemon) => (
        <PokeCard
          key={pokemon.id}
          {...pokemon}
          setMyTeam={() => setMyTeam(pokemon)}
        />
      ))}
    </Layout>
  );
}

// funcion con parametro en on click
//<button onClick={test}>test</button>
//<button onClick={()=>test("test")}>test</button>
