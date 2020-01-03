import styled from "styled-components"

export const Wrapper = styled.div`
  display: none;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px){
    display: block;
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