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
  padding: 100px 0px 50px 0px;
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
    <>
      <Header />
      <Layout>
        {pokemons.map((pokemon: IPokemon) => (
          <PokeCard
            key={pokemon.id}
            {...pokemon}
            setMyTeam={() => setMyTeam(pokemon)}
          />
        ))}
      </Layout>
    </>
  );
}

// funcion con parametro en on click
//<button onClick={test}>test</button>
//<button onClick={()=>test("test")}>test</button>
