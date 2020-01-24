import styled from "styled-components"

export const Heading = styled.h2`
  font-family: "rubikregular", sans-serif;
  text-align: center;
`

export const SubHeading = styled.p`
  text-align: center;
  font-size: 1.125rem;
`

export const Email  = styled.span`
  font-family: "rubikmedium", sans-serif;
`

export const Form = styled.form`
  width: 100%;
  max-width: 458px;
  margin: 1.5rem auto 0.5rem;
  padding 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: #ffffff;
`

export const FormName = styled.h3`
  font-family: "rubikregular", sans-serif;
  font-size: 1.3125rem;
  margin-bottom: 1rem;
`

export const Divider = styled.hr``

export const SendAmount = styled.p`
  position: relative;
  margin-top: 0;
  margin-bottom: 0.25rem;
`

export const Amount = styled.span`
  position: absolute;
  font-size: 1rem;
  right: 0;
`

export const TotalFees = styled(SendAmount)``

export const Fees = styled(Amount)``

export const Total = styled(SendAmount)`
  font-family: "rubikmedium", sans-serif;
  margin-bottom: 1rem;
`

export const TotalAmount = styled(Amount)``

