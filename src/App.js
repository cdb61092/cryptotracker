import { useState } from "react";
import CryptoCard from "./Components/CryptoCard";
import Header from "./Components/Header";
import CryptoContext from "./Components/CryptoContext";
import "./App.css";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 30px;
`;

function App() {
  const [cards, setCards] = useState(["lgcy-network", "bitcoin"]);

  return (
    <div>
      <CryptoContext.Provider value={[cards, setCards]}>
        <Header />
      </CryptoContext.Provider>
      <CardContainer>
        {cards.map((item) => {
          return <CryptoCard cryptoID={item} key={item} />;
        })}
      </CardContainer>
    </div>
  );
}

export default App;
