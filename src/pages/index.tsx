import { useEffect } from "react";
import PokemonService from "./../services/pokemon.service";
import { PokeCard } from "../components/poke-card";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 100vh;
  //background: radial-gradient(
  //  circle,
  //  rgba(21, 65, 75, 1) 9%,
  //  rgba(9, 107, 121, 0.938813025210084) 47%,
  //  rgba(74, 80, 75, 1) 100%
  //);
`;

export default function Home() {
  const fetchPokemons = async () => {
    const $pokemons = await PokemonService.getPokemons();
    console.log($pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <Layout>
      <PokeCard></PokeCard>
    </Layout>
  );
}
