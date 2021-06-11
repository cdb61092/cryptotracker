import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import * as S from "../Styles";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  console.log("modal rerender");

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <S.ModalBackground>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalBackground>,
    modalRoot
  );
};

export default Modal;
