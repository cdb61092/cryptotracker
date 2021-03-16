import CryptoCard from "./Components/CryptoCard";
import Header from "./Components/Header";
import "./App.css";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectCryptos } from "./features/crypto/cryptoSlice";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 30px;
`;

function App() {
  const cryptos = useSelector(selectCryptos);

  return (
    <div>
      <Header />

      <CardContainer>
        {cryptos.map((crypto) => {
          return <CryptoCard cryptoID={crypto} key={crypto} />;
        })}
      </CardContainer>
    </div>
  );
}

export default App;
