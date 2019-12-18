import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import FocusTrap from "focus-trap-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Wrapper,
  Content,
  CloseButton,
  AccessibleText,
  HiddenInput
} from "./styles"

function Modal({ closeModal, children }) {
  const onKeyDown = ({ keyCode }) => keyCode === 27 && closeModal()
  const onBackdropClicked = e => closeModal()
  const onCloseButtonClicked = e => closeModal()
  const html = document.querySelector("html")

  useEffect(() => {
    html.style.overflow = "hidden"
    html.style.marginLeft = "-15px"
    return () => {
      html.style.overflow = "auto"
      html.style.marginLeft = "0"
    }
    //eslint-disable-next-line
  }, [])

  return ReactDOM.createPortal(
    <FocusTrap>
      <Wrapper
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
        aria-label="Payyed video"
        onKeyDown={onKeyDown}
        onClick={onBackdropClicked}
      >
        <CloseButton aria-label="Close Modal" onClick={onCloseButtonClicked}>
          <AccessibleText>Close Modal</AccessibleText>
          <FontAwesomeIcon icon="times" color="#2dbe60" size="lg" />
        </CloseButton>
        <Content>{children}</Content>
        <HiddenInput />
      </Wrapper>
    </FocusTrap>,
    document.body
  )
}

export default Modal
