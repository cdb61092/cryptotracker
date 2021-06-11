// import { useState, useEffect, useReducer } from "react";
// import axios from "axios";
// import {
//   SearchContainer,
//   SearchBox,
//   CloseButton,
//   SearchPromptText,
//   SearchResult,
//   ResultsContainer,
//   ChangePayTypeButton,
//   SubmitTransactionButton,
//   TransactionSection,
//   Input,
//   CryptoTag,
// } from "./Styles";
// import { HiSwitchHorizontal } from "react-icons/hi";
// import { useDispatch } from "react-redux";

// const PRICE_PER = "PRICE_PER";
// const TOTAL_COST = "TOTAL_COST";

// const initialState = {
//   id: undefined,
//   name: undefined,
//   symbol: undefined,
//   amount: 0,
//   totalCost: 0,
//   pricePerCoin: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "selectCrypto":
//       return {
//         id: action.payload.id,
//         name: action.payload.name,
//         symbol: action.payload.symbol,
//       };
//     case "onInputChanged":
//       return {
//         ...state,
//         pricePerCoin: action.payload.pricePerCoin,
//         quantity: action.payload.quantity,
//         totalCost: action.payload.totalCost,
//       };
//     default:
//       return initialState;
//   }
// }

// const CryptoSearch = ({ setShowAddCryptoModal }) => {
//   const [priceMode, setPriceMode] = useState(PRICE_PER);
//   const [input, setInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [cryptoList, setCryptoList] = useState([]);
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [showResults, setShowResults] = useState(false);
//   const holdingsDispatch = useDispatch();

//   // useEffect(() => {
//   //   let ignore = false;
//   //   axios
//   //     .get("https://api.coingecko.com/api/v3/coins/list")
//   //     .then((res) => {
//   //       if (!ignore) {
//   //         setCryptoList(res.data);
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   //   return function cleanUp() {
//   //     ignore = true;
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   setResults(
//   //     cryptoList.filter((crypto) => {
//   //       return crypto.name.toLowerCase().includes(input.toLowerCase());
//   //     })
//   //   );
//   // }, [cryptoList, input]);

//   // const onInputChange = (e) => {
//   //   if (e.target.value.length === 0) {
//   //     setShowResults(false);
//   //   } else {
//   //     setShowResults(true);
//   //   }

//   //   setInput(e.target.value);
//   //   setResults(
//   //     cryptoList.filter((crypto) => {
//   //       return crypto.name.toLowerCase().includes(input.toLowerCase());
//   //     })
//   //   );
//   // };

//   // const onCryptoSelection = (id, name, symbol) => {
//   //   setShowResults(false);
//   //   dispatch({
//   //     type: "selectCrypto",
//   //     payload: {
//   //       id: id,
//   //       name: name,
//   //       symbol: symbol.toUpperCase(),
//   //     },
//   //   });
//   // };

//   // const handleChangePayType = () => {
//   //   console.log("clicked");
//   //   priceMode === PRICE_PER
//   //     ? setPriceMode(TOTAL_COST)
//   //     : setPriceMode(PRICE_PER);
//   // };

//   return (
//     <SearchContainer>
//       <CloseButton onClick={() => setShowAddCryptoModal(false)}>
//         &#215;
//       </CloseButton>
//       <SearchPromptText>Search for your favorite coin</SearchPromptText>
//       <SearchBox
//         type="text"
//         placeholder="&#128269; Search"
//         value={input}
//         onChange={onInputChange}
//         onFocus={(e) => (e.target.placeholder = "")}
//       ></SearchBox>
//       {showResults && (
//         <ResultsContainer>
//           {results.map((result) => {
//             return (
//               <SearchResult
//                 key={result.id}
//                 onClick={() =>
//                   onCryptoSelection(result.id, result.name, result.symbol)
//                 }
//               >
//                 {result.name}
//               </SearchResult>
//             );
//           })}
//         </ResultsContainer>
//       )}
//       <TransactionSection>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <label htmlFor="pricePer">Price Per Coin</label>
//           <ChangePayTypeButton onClick={() => handleChangePayType()}>
//             <HiSwitchHorizontal
//               style={{
//                 color: "lightgreen",
//                 position: "relative",
//                 top: "2px",
//               }}
//             />
//             {priceMode === PRICE_PER ? "Total Cost" : "Price Per Coin"}
//           </ChangePayTypeButton>
//         </div>
//         <Input
//           id="pricePer"
//           type="number"
//           value={state.pricePerCoin}
//           disabled={priceMode === TOTAL_COST && "disabled"}
//           autoComplete="off"
//           onChange={(e) => {
//             dispatch({
//               type: "onInputChanged",
//               payload: {
//                 pricePerCoin: e.target.value,
//                 quantity: state.quantity,
//                 totalCost: e.target.value * state.quantity,
//               },
//             });
//           }}
//         ></Input>
//         <label htmlFor="quantity">Quantity</label>
//         <div>
//           <Input
//             id="quantity"
//             type="number"
//             autoComplete="off"
//             value={state.quantity}
//             onChange={(e) => {
//               dispatch({
//                 type: "onInputChanged",
//                 payload: {
//                   quantity: e.target.value,
//                   pricePerCoin: state.pricePerCoin,
//                   totalCost: e.target.value * state.pricePerCoin,
//                 },
//               });
//             }}
//           ></Input>
//           <CryptoTag>{state.symbol}</CryptoTag>
//         </div>

//         <label htmlFor="totalCost">Total Cost</label>
//         <Input
//           id="totalCost"
//           type="number"
//           value={state.totalCost}
//           disabled={priceMode === PRICE_PER && "disabled"}
//           autoComplete="off"
//           onChange={(e) => {
//             dispatch({
//               type: "onInputChanged",
//               payload: {
//                 totalCost: e.target.value,
//                 quantity: state.quantity,
//                 pricePerCoin: e.target.value / state.quantity,
//               },
//             });
//           }}
//         ></Input>
//         <SubmitTransactionButton
//           type="button"
//           onClick={() => onSubmitTransaction()}
//         >
//           Submit
//         </SubmitTransactionButton>
//       </TransactionSection>
//     </SearchContainer>
//   );
// };

// export default CryptoSearch;
