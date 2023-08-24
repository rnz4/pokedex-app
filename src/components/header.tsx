import React from "react";
import styled from "styled-components";

const MyHeader = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2a2b;
  contain: content;
  padding: 0px 30px 0px 30px;
`;

const Pokeball = styled.img`
  width: 60px;
  cursor: pointer;
  &:hover {
    transition: all 0.7s ease;
    transform: rotate(-45deg);
  }
`;

const PokeLogo = styled.img`
  margin-left: 42%;
`;

export const Header = () => {
  return (
    <MyHeader>
      <PokeLogo src={"http://localhost:8000/pokelogo.png"} />
      <Pokeball src={"http://localhost:8000/pokeball.png"} />
    </MyHeader>
  );
};
