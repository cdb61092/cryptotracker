import React from "react";
import websiteImage from "./images/website.png";

function CryptoHomePageLink(props) {
  return (
    <a href={props.link[0]} alt="block explorer link">
      <img width="50px" src={websiteImage} alt="blockchain" />
    </a>
  );
}

export default CryptoHomePageLink;
