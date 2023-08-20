import React from "react";
import styled from "styled-components";

const PokeCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 25px;
  border: 2px solid #0acf11;
  box-shadow: 0 0 10px #0acf11;
`;

const PokeImg = styled.img`
  width: 300px;
  height: 300px;
`;

interface IPokeCard {
  id: number;
  name: string;
  imageUrl: string;
}

export const PokeCard = ({ id, name, imageUrl }: IPokeCard) => {
  return (
    <PokeCardLayout>
      <p>{id}</p>
      <p>{name}</p>
      <PokeImg src={imageUrl} />
    </PokeCardLayout>
  );
};
