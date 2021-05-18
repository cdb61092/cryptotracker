import React from "react";
import styled from "styled-components";
import homeIcon from "../../images/home.png";
import numberedListIcon from "../../images/numberedlist.png";
import starIcon from "../../images/star.png";

import { Container, Button } from "./Styles";

const Sidebar = () => {
  return (
    <Container>
      <Button>
        <img src={homeIcon} alt="home button"></img>
      </Button>
      <Button>
        <img src={numberedListIcon} alt="top coins button"></img>
      </Button>
      <Button>
        <img src={starIcon} alt="top coins button"></img>
      </Button>
    </Container>
  );
};

export default Sidebar;
