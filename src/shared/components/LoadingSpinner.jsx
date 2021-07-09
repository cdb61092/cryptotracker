import styled from "styled-components";

const LoadingSpinner = ({ Spinner }) => {
  return <Container>{Spinner}</Container>;
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  width: 100%;
  /* color: transparent; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 2;
`;

export default LoadingSpinner;
