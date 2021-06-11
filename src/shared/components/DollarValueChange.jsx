import styled from "styled-components";

const Container = styled.p`
  font-size: inherit;
  font-weight: 600;
  display: inline-block;
  margin-left: 10px;
`;

const DollarValueChange = ({ value }) => {
  return (
    <Container
      style={{
        color: value < 0 ? "#d94e4e" : "var(--light-green)",
      }}
    >
      (${value})
    </Container>
  );
};

export default DollarValueChange;
