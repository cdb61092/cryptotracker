import React from "react";
import telegramImage from "./images/telegram.png";

function TelegramLink(props) {
  const telegramURL = "https:/t.me/" + props.link;
  return (
    <a href={telegramURL} alt="telegram link">
      <img width="50px" src={telegramImage} alt="telegram" />
    </a>
  );
}

export default TelegramLink;
