import React, { Fragment } from "react";
import classes from "./Spinner.module.css";
import ReactDom from "react-dom";



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.lds_ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Spinner = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay />,
        portalElement
      )}
    </Fragment>
  );
};

export default Spinner;

