import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  max-height: ${({ toggled }) => toggled ? "30px" : "0"};
  visibility: ${({ toggled }) => toggled ? "visible" : "hidden"};
  padding: 0.5rem 15px 0;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s ease;
`