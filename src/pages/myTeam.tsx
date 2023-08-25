import styled from "styled-components";
import { Header } from "../components/header";
import { usePokeTeam } from "./../context/poketeam-context";
import { IPokemon } from "./../interfaces/poke-interfaces";
import { PokeCard } from "./../components/poke-card";

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
  const { pokeTeam } = usePokeTeam();

  return (
    <>
      <Header />
      <Layout>
        {pokeTeam.map((pokemon: IPokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </Layout>
    </>
  );
}
