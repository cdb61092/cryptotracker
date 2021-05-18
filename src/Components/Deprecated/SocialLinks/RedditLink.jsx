import React from "react";
import redditImage from "./images/reddit.png";

function RedditLink(props) {
  return (
    <a href={props.link} alt="reddit link">
      <img width="50px" src={redditImage} alt="blockchain" />
    </a>
  );
}

export default RedditLink;
