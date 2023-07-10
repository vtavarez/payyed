import styled from "styled-components"

export const Heading = styled.h2`
  text-align: center;
  letter-spacing: -1px;
  margin-top: 1rem;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const SubHeading = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5;
`

export const FormName = styled.h3`
  font-size: 1.3125rem;
  margin-bottom: 1rem;
  padding-bottom: 5px;
`

export const Form = styled.form`
  width: 100%;
  max-width: 660px;
  margin: 1.5rem auto 0.5rem;
  padding 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: #ffffff;
  @media (min-width: 768px) {
    padding: 1.5rem 3rem 3rem;
  }
`

export const Divider = styled.hr`
  margin-inline: -15px;
  @media (min-width: 768px) {
    margin-inline: ${({ stretch }) => stretch && "-3rem"};
  }
`