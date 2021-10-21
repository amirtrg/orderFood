import React from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.scss";

const Modal = (props) => {
  const portalElement = document.querySelector("#overlays");
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  return (
    <>
      {createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
