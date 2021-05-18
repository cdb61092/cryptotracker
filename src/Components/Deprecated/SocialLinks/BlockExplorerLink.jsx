import React from "react";
import blockchainImage from "./images/blockchain.png";

function BlockExplorerLink(props) {
  return (
    <a href={props.link} alt="block explorer link">
      <img width="50px" src={blockchainImage} alt="blockchain" />
    </a>
  );
}

export default BlockExplorerLink;
