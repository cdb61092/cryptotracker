import { useState } from "react";

export const PRICE_PER = "PRICE_PER";
export const TOTAL_COST = "TOTAL_COST";

const useChangePayType = () => {
  const [payType, setPayType] = useState(PRICE_PER);

  const togglePayType = () => {
    payType === PRICE_PER ? setPayType(TOTAL_COST) : setPayType(PRICE_PER);
  };

  return [payType, togglePayType];
};

export default useChangePayType;
