import styled from "styled-components";
import CryptoIcon from "./CryptoIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const NameContainer = styled.div`
  display: inline-block;
  width: 300px;
`;

const Symbol = styled.span`
  font-size: 1.2rem;
`;

const CryptoName = ({ icon, name, symbol }) => {
  return (
    <Container>
      <NameContainer>
        <CryptoIcon url={icon} size="20px" top="2px" marginRight="5px" />
        {name}
      </NameContainer>
      <Symbol>{symbol.toUpperCase()}</Symbol>
    </Container>
  );
};

export default CryptoName;
