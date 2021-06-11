import IconButton from "../../shared/components/IconButton";
import { FaHome, FaStar, FaListOl } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";

const StyledNavLink = styled(NavLink)`
  color: gray;
`;

const Sidebar = () => {
  return (
    <Container>
      <StyledNavLink exact to="/" activeStyle={{ color: "white" }}>
        <IconButton icon={<FaHome size="40px" />} />
      </StyledNavLink>
      <StyledNavLink to="/watchlist" activeStyle={{ color: "white" }}>
        <IconButton icon={<FaStar size="40px" />} />
      </StyledNavLink>
      <StyledNavLink to="/rankings" activeStyle={{ color: "white" }}>
        <IconButton icon={<FaListOl size="40px" />} />
      </StyledNavLink>
    </Container>
  );
};

export const Container = styled.div`
  width: 70px;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #11151e;
  box-sizing: border-box;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  & * {
    margin-bottom: 20px;
  }

  & *:hover {
    color: white;
  }
`;

export const Button = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  color: inherit;
  background: none;
  outline: none;
  width: 35px;
  margin: 0 auto 50px;
`;

export default Sidebar;
