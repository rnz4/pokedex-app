import React from "react";
import styled from "styled-components";
import { Colors } from "./../styles/color-variables";
import { TypeTag } from "./type-tag";

const PokeCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 10px 0px 20px 0px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 25px;
  border: 2px solid ${(props) => props.color};
  box-shadow: 0 0 20px ${(props) => props.color};
  color: white;
  font-size: 18px;
  font-family: sans-serif;
  transition: all 0.3s ease;
  row-gap: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokeImg = styled.img`
  width: 200px;
  height: 200px;
  background-color: #1c1c1c;
  border-radius: 80px;
`;

const CustomP = styled.p`
  font-size: 18px;
  font-family: sans-serif;
  margin: 0px;
`;

interface IPokeCard {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
}

export const PokeCard = ({ id, name, imageUrl, type }: IPokeCard) => {
  return (
    <PokeCardLayout color={Colors[type as keyof typeof Colors]}>
      <CustomP>#{id}</CustomP>
      <CustomP>{name}</CustomP>
      <PokeImg src={imageUrl} />
      <TypeTag type={type} />
    </PokeCardLayout>
  );
};
