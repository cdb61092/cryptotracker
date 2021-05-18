import React from "react";
import githubImage from "./images/github.png";

function GithubLink(props) {
  return (
    <a href={props.link} alt="reddit link">
      <img width="50px" src={githubImage} alt="blockchain" />
    </a>
  );
}

export default GithubLink;
