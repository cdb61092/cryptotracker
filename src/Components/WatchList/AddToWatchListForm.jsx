import { useState, useEffect } from "react";
import Modal from "../../shared/components/Modal";
import SearchGeckoCoins from "../SearchGeckoCoins";
import * as S from "../../shared/Styles";

const AddToWatchListForm = ({ closeForm, addToWatchList }) => {
  const [coinInfo, setCoinInfo] = useState({ id: "", name: "", symbol: "" });

  const handleGeckoSearchSelection = (id, name, symbol) => {
    setCoinInfo({ id: id, name: name, symbol: `(${symbol.toUpperCase()})` });
  };
  return (
    <Modal>
      <S.CloseButton onClick={() => closeForm()}>×</S.CloseButton>
      <SearchGeckoCoins
        onResultSelect={handleGeckoSearchSelection}
      ></SearchGeckoCoins>
      <S.CoinSearchLabel>
        Coin: {coinInfo.name} {coinInfo.symbol}
      </S.CoinSearchLabel>
      <S.GeckoSearchSubmitButton onClick={() => addToWatchList(coinInfo.id)}>
        Add to watch list
      </S.GeckoSearchSubmitButton>
    </Modal>
  );
};

export default AddToWatchListForm;
