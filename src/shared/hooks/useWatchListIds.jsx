import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWatchList,
  addToWatchList as add,
  removeFromWatchList as remove,
} from "../../features/slices/watchListSlice";

const useWatchListIds = () => {
  const ids = useSelector(selectWatchList);
  const dispatch = useDispatch();

  const addToWatchList = (coinId) => {
    dispatch(add(coinId));
  };

  const removeFromWatchList = (coinId) => {
    dispatch(remove(coinId));
  };

  return [ids, addToWatchList, removeFromWatchList];
};

export default useWatchListIds;
