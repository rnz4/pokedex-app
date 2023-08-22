import React from "react";
import styled from "styled-components";
import { Colors } from "./../styles/color-variables";

const TypeTagBox = styled.div`
  width: 80px;
  height: 30px;
  border: 2px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  contain: content;
  border-radius: 16px;
  background-color: #2a2a2b;
`;

interface ITypeTag {
  type: string;
}

export const TypeTag = ({ type }: ITypeTag) => {
  return (
    <TypeTagBox color={Colors[type as keyof typeof Colors]}>{type}</TypeTagBox>
  );
};
