import { selectTransactions } from "../../features/slices/transactionsSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const useTransactions = () => {
  const transactionsSlice = useSelector(selectTransactions);
  let fullTransactionList = [];
  const trans = transactionsSlice.map((coin) => {
    return coin;
  });

  console.log(trans);
};
export default useTransactions;
