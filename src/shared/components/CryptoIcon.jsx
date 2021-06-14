import styled from "styled-components";

const Img = styled.img`
  top: ${(props) => props.top};
  margin-right: ${(props) => props.marginRight};
`;

const CryptoIcon = ({ url, size, top, marginRight }) => {
  return (
    <Img
      src={url}
      alt="icon"
      width={size}
      top={top}
      marginRight={marginRight}
    ></Img>
  );
};

export default CryptoIcon;
