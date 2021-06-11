import styled from "styled-components";
import React from "react";

const HomeSectionTitle = React.memo(({ icon, title, children }) => {
  return (
    <Container>
      {icon}
      {title}
      {children}
    </Container>
  );
});

const Container = styled.div`
  color: gray;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default HomeSectionTitle;
