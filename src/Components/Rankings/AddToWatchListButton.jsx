import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import IconButton from "../../shared/components/IconButton";
const AddToWatchListButton = ({ filled, onClick }) => {
  return (
    <IconButton
      icon={filled ? <AiFillStar color="gold" /> : <AiOutlineStar />}
      hoverColor="gold"
      onClick={onClick}
    ></IconButton>
  );
};

const Button = styled.button`
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

export default AddToWatchListButton;
