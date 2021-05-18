import React from "react";
import twitterImage from "./images/twitter.png";

function TwitterLink(props) {
  const twitterURL = "https://www.twitter.com/" + props.link;
  return (
    <a href={twitterURL} alt="twitter link">
      <img width="50px" src={twitterImage} alt="blockchain" />
    </a>
  );
}

export default TwitterLink;
