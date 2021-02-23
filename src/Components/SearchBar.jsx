import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../App.css";
import CryptoContext from "./CryptoContext";

const searchStyle = {
    position: 'absolute',
    right: '50px',
    width: '300px',
    height: '30px',
    borderRadius: '20px',
    border: 'none',    
}


function SearchBar() {

    const [input, setInput] = useState("");
    const [isFocused, setFocus] = useState(false);
    const [results, setResults] = useState([]);
    const [cryptoList, setCryptoList] = useState([]);

    const [cards, setCards] = useContext(CryptoContext);


  

  
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then(res => {
        setCryptoList(res.data);
      
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
      setResults(cryptoList.filter((crypto) => {
        return crypto.name.toLowerCase().includes( input.toLowerCase())
    }))
    
  }, [input])
    

    function onInputChange(event) {
        const value = event.target.value;
        setInput(value);
        
    }

    function handleClick(e) {
   
      console.log("clicked");
      console.log(cards);
      setCards(prevCards => {
        return [...prevCards, e.target.value]
      })
      console.log(cards);
      // setCards(prevItems => {
      //   [...prevItems]
      // })
      setFocus(false);
    }

    return (
        <div>
            <input style={ searchStyle } onFocus={() => setFocus(true)} type="text" placeholder="Search" value={ input } onChange={ onInputChange }></input>
            <div className={"searchResults"}style={isFocused ? { display: "block" } : { display: "none" }}>
        
                
                {results.map(item => {
                    return <button onClick={ handleClick } key={ item.id } value={ item.id }>{ item.name }</button>
                })}

            </div>
        </div>
            
    )
}

export default SearchBar;