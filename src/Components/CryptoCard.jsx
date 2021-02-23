import React, {useEffect, useState} from "react";
import axios from "axios";

function CryptoCard(props) {

    const [crypto, setCrypto] = useState(null);
    const [loading, setLoading] = useState(true);
    const cryptoID = props.cryptoID;




 useEffect(() => {

   window.setTimeout(function () {

    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoID}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    console.log(`pinging ${URL}`);
    axios
    .get(URL)
    .then(res => {
      setCrypto(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    });
 }, 8000)
   }, [crypto])
    




    return (
    <div className="cryptoCard">
    {loading ? <p>loading...</p> : 
    
    <div>
      <h1><img style={{width: "100px"}}src={crypto[0].image}></img>{crypto[0].name}</h1>
      <h1 className="">{crypto[0].current_price}</h1></div>}
    
      
    </div>
    )
}

export default CryptoCard;