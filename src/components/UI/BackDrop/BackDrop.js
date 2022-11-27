import React from 'react'
import ReactDom from "react-dom";
import "./BackDrop.scoped.scss"
import { Transition } from "react-transition-group";

const BackDrop = (props) => {
  const animation=props.backdrop ? "backdrop-open" :"backdrop-closed"
  return (
    <Transition in={props.backdrop} unmountOnExit mountOnEnter timeout={500}>
    {(state) =>
      ReactDom.createPortal(
        <div className={`backdrop ${animation} `} onClick={props.onBackdropClick}>
        </div>,
        document.getElementById("backdrop")
      )
    }
  </Transition>  )
}

export default BackDrop