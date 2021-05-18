import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHoldings } from "../../features/holdings/holdingsSlice";
import { IoMdWallet } from "react-icons/io";
import CryptoSearch from "../CryptoSearch";

import { Container, Title, AddToHoldingsButton, Header } from "./Styles";

import HoldingsRow from "./HoldingsRow";

const Holdings = ({ loading }) => {
  const holdings = useSelector(selectHoldings);
  // const loading = useGeckoAPI();
  const [showAddCryptoModal, setShowAddCryptoModal] = useState(false);

  return (
    <Container>
      {showAddCryptoModal && (
        <CryptoSearch
          setShowAddCryptoModal={setShowAddCryptoModal}
        ></CryptoSearch>
      )}
      <Title>
        <IoMdWallet
          size="20px"
          color="gray"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
        <span style={{ verticalAlign: "middle" }}>Holdings</span>
        <AddToHoldingsButton
          onClick={() => {
            setShowAddCryptoModal(!showAddCryptoModal);
          }}
        >
          Add Crypto
        </AddToHoldingsButton>
      </Title>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <Header></Header>
            <Header style={{ textAlign: "right" }}>Amount</Header>
            <Header style={{ textAlign: "right" }}>Price</Header>
            <Header style={{ textAlign: "right" }}>Value</Header>
            <Header style={{ textAlign: "center" }}>24h</Header>
            <Header style={{ textAlign: "center" }}>ROI</Header>
            <Header style={{ textAlign: "center" }}>Last 7 Days</Header>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {!loading &&
            holdings.map((holding) => {
              return (
                <HoldingsRow key={holding.id} data={holding}></HoldingsRow>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};

export default Holdings;
