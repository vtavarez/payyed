import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  @media (min-width: 768px){
    margin-right: -10px;
    margin-bottom: 0;
  }
`
export const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #c4c3c3;
`