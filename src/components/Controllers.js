import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../contexts/contextTheme";

export function Controllers() {
  const { increaseFont, decreaseFont, alignText } = useContext(ContextTheme);

  return (
    <ContainerControllers>
      <div>
        <Button onClick={increaseFont}>Aumentar Fuente</Button>
        <Button onClick={decreaseFont}>Disminuir Fuente</Button>
      </div>
      <div>
        <Button onClick={() => alignText("left")}>Izquierda</Button>
        <Button onClick={() => alignText("center")}>Centro</Button>
        <Button onClick={() => alignText("right")}>Derecha</Button>
      </div>
    </ContainerControllers>
  );
}

const ContainerControllers = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  background: #165168;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background: #191668;
  }
`;
