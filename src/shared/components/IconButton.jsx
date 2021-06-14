import styled from "styled-components";

const IconButton = ({ icon, onClick, hoverColor }) => {
  return (
    <Button onClick={onClick} hoverColor={hoverColor}>
      {icon}
    </Button>
  );
};

const Button = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  display: inline-block;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export default IconButton;
