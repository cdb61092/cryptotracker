import { useState, useEffect } from "react";
import { holdingsSlice } from "../../features/slices/holdingsSlice";
import { useSelector } from "react-redux";
import { selectHoldings } from "../../features/slices/holdingsSlice";

const useHoldingIds = () => {
  const holdings = useSelector(selectHoldings);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    let currentIds = [];
    holdings.map((holding) => {
      return currentIds.push(holding.id);
    });
    setIds(currentIds);
  }, [holdings]);

  return [ids, holdings];
};

export default useHoldingIds;
