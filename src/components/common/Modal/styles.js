import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  outline: 0;

  @media (min-width: 768px){
    padding-right: 15px;
    padding-left: 15px;
  }
`

const transform = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${transform} 1s ease-in 1;
  transition: all 0.35s ease-in;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 210px;
  right: 15px;
  width: fit-content;
  padding: 0;
  background-color: transparent;
  border: none;
  animation: ${transform} 1s linear 1;

  @media (min-width: 375px) {
    top: 280px;
  }

  @media (min-width: 414px) {
    top: 230px;
  }

  @media (min-width: 768px) {
    top: 280px;
  }

  @media (min-width: 1024px) {
    top: 430px;
    right: 90px;
  }

  @media (min-width: 1600px) {
    top: 150px;
    right: 380px;
  }
`

export const AccessibleText = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

export const HiddenInput = styled.button`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`
