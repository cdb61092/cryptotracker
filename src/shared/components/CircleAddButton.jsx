import { AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";
import React from "react";

const CircleAddButton = React.memo(
  ({ size, color, onClick, top, left, right, bottom }) => {
    return (
      <Button
        onClick={onClick}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
      >
        <AiFillPlusCircle size={size} color={color} />
      </Button>
    );
  }
);

const Button = styled.button`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background: none;
  border: none;
  cursor: pointer;
  &:hover * {
    color: white;
  }
`;

export default CircleAddButton;
