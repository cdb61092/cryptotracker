import { useEffect, useState } from "react";
import CryptoCard from "./Components/CryptoCard";
import Header from "./Components/Header";
import CryptoContext from "./Components/CryptoContext";
import "./App.css";


function App() {

  
  const [cards, setCards] = useState(["01coin", "bitcoin"]);
  

  return (
    <div>
    <CryptoContext.Provider value={ [cards, setCards] }>
      <Header/>
    </CryptoContext.Provider>
    <div className="cardContainer">
    {
        cards.map(item => {
          return <CryptoCard cryptoID={ item } key={ item }/>
        })
      }

    </div>
      
    </div>
  );
}

export default App;
