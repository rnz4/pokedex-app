import * as React from "react";
import { IPokemon } from "./../interfaces/poke-interfaces";

const LIMIT = 0;

type IPokeTeamProvider = {
  children?: React.ReactNode;
};

interface IPokeTeamContext {
  addPokemon: Function;
  clearPokeTeam: Function;
  pokeTeam: IPokemon[];
  limitOfPokemons: Number;
  teamSelector: Boolean;
  setTeamSelector: Function;
}
const PokeTeamContext = React.createContext<IPokeTeamContext>({
  addPokemon: (arg0: IPokemon) => {},
  clearPokeTeam: (arg0: number) => {},
  pokeTeam: [],
  limitOfPokemons: 0,
  teamSelector: false,
  setTeamSelector: (arg0: number) => {},
});

const PokeTeamProvider: React.FC<IPokeTeamProvider> = ({ children }) => {
  const [pokeTeam, setPokeTeam] = React.useState<IPokemon[]>([]);
  const [limitOfPokemons, setLimitOfPokemons] = React.useState<number>(LIMIT);
  const [teamSelector, setTeamSelector] = React.useState<boolean>(false);
  const addPokemon = (pokemon: IPokemon) => {
    const _team = [...pokeTeam];
    _team.push(pokemon);
    setPokeTeam(_team);

    setLimitOfPokemons(limitOfPokemons + 1);
  };
  console.log(pokeTeam);
  const clearPokeTeam = () => {
    setPokeTeam([]);

    setLimitOfPokemons(limitOfPokemons + 1);
  };

  return (
    <PokeTeamContext.Provider
      value={{
        addPokemon,
        clearPokeTeam,
        pokeTeam,
        limitOfPokemons,
        teamSelector,
        setTeamSelector,
      }}
    >
      {children}
    </PokeTeamContext.Provider>
  );
};

function usePokeTeam() {
  const {
    addPokemon,
    clearPokeTeam,
    pokeTeam,
    limitOfPokemons,
    teamSelector,
    setTeamSelector,
  } = React.useContext(PokeTeamContext);
  return {
    addPokemon,
    clearPokeTeam,
    pokeTeam,
    limitOfPokemons,
    teamSelector,
    setTeamSelector,
  };
}

export { usePokeTeam, PokeTeamProvider };
