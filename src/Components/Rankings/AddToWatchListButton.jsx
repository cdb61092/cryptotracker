import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import IconButton from "../../shared/components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleWatchList,
  selectWatchList,
} from "../../features/slices/watchListSlice";

const AddToWatchListButton = ({ id }) => {
  const dispatch = useDispatch();
  const ids = useSelector(selectWatchList);
  return (
    <div style={{ top: "3px" }}>
      <IconButton
        icon={
          ids.find((coinId) => id === coinId) !== undefined ? (
            <AiFillStar color="gold" size="20px" />
          ) : (
            <AiOutlineStar size="20px" />
          )
        }
        hoverColor="gold"
        onClick={() => dispatch(toggleWatchList(id))}
        top="5px"
      ></IconButton>
    </div>
  );
};

export default AddToWatchListButton;
