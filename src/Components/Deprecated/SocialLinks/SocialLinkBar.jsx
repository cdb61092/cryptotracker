import React from "react";
import BlockExplorerLink from "./BlockExplorerLink";
import CryptoHomePageLink from "./CryptoHomePageLink";
import RedditLink from "./RedditLink";
import TwitterLink from "./TwitterLink";
import GithubLink from "./GithubLink";
import TelegramLink from "./TelegramLink";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  & *:not(:last-child) {
    margin-right: 10px;
  }
`;
function SocialLinkBar(props) {
  return (
    <Wrapper>
      <BlockExplorerLink
        link={props.data.blockchain_site[0]}
      ></BlockExplorerLink>
      <CryptoHomePageLink link={props.data.homepage}></CryptoHomePageLink>
      {props.data.subreddit_url && (
        <RedditLink link={props.data.subreddit_url}></RedditLink>
      )}
      {props.data.twitter_screen_name.length > 0 && (
        <TwitterLink link={props.data.twitter_screen_name}></TwitterLink>
      )}

      {props.data.repos_url.github.length > 0 && (
        <GithubLink link={props.data.repos_url.github[0]}></GithubLink>
      )}
      {props.data.telegram_channel_identifier.length > 0 && (
        <TelegramLink
          link={props.data.telegram_channel_identifier}
        ></TelegramLink>
      )}
    </Wrapper>
  );
}

export default SocialLinkBar;
