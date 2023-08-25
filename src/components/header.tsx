import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const MyHeader = styled.div`
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2a2b;
  contain: content;
  padding: 0px 30px 0px 30px;
  margin-top: 0px;
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
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/myTeam");
  };
  return (
    <MyHeader>
      <PokeLogo src={"http://localhost:8000/pokelogo.png"} />
      <Pokeball
        src={"http://localhost:8000/pokeball.png"}
        onClick={handleButtonClick}
      />
    </MyHeader>
  );
};
