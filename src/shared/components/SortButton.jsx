import styled from "styled-components";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import IconButton from "./IconButton";

const SortButton = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <IconButton
      onClick={() => setToggle((prev) => !prev)}
      icon={
        toggle ? <AiFillCaretDown size="20px" /> : <AiFillCaretUp size="20px" />
      }
    ></IconButton>
  );
};

export default SortButton;
