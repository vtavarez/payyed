import styled from "styled-components"

export const Heading = styled.h2`
  font-family: "rubik", sans-serif;
  text-align: center;
  letter-spacing: -1px;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 450;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const CheckIcon = styled.svg`
  display: block;
  margin-inline: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: calc(1.7rem + 5.4vw);
  path {
    fill: rgba(40,167,69, 1);
  }
  @media (min-width: 1024px) {
    font-size: 5.75rem;
  }
`

export const SuccessText = styled.p`
  font-family: "rubik", sans-serif;
  text-align: center;
  font-size: 2rem;
  line-height: 1;
  font-weight: 550;
  letter-spacing: -1px;
  color: rgba(40,167,69, 1);
`

export const LeadText = styled.p`
  font-family: "rubik", sans-serif;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-weight: 350;
  `

export const Text = styled.p`
  font-family: "rubik", sans-serif;
  font-weight: 430;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;  
`

export const Highlight = styled.span`
  font-weight: 550;
`

export const Print = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  gap: 5px;
  font-family: "rubik", sans-serif;
  font-weight: 450;
  font-size: 1rem;
  color: #2dbe60;
  margin-top: 1.5rem;
  transition: all 0.5s ease;
  border: none;
  background: none;

  &:hover {
    color: rgba(40,167,69, 1);

    svg {
      path {
        fill: rgba(40,167,69, 1);
      }
    }
  }
`
export const PrintIcon = styled.svg`
  font-size: 1rem;
  path {
    transition: all 0.5s ease;
    fill: #2dbe60;
  }
`
export const ActiveLink = styled.span`
  color: #2dbe60;
  font-weight: 500;
`