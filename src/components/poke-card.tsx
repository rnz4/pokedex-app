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

export const PokeCard = ({}) => {
  return <PokeCardLayout />;
};
