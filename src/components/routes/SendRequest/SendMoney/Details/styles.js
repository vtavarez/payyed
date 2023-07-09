import styled from "styled-components"

export const Heading = styled.h2`
  font-family: "rubik", sans-serif;
  text-align: center;
  letter-spacing: -1px;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 430;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

export const SubHeading = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5;
`

export const FormName = styled.h3`
  font-family: "rubik", sans-serif;
  font-size: 1.3125rem;
  font-weight: 430;
  padding-bottom: 5px;
  margin-bottom: 1rem;
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

export const ExchangeRate = styled.p`
  color: #8e9a9d;
  text-align: center;
`

export const Rate = styled.span`
  font-family: "rubikmedium", sans-serif;
`

export const Divider = styled.hr`
  margin-inline: -15px;
 @media (min-width: 768px) {
   margin-inline: ${({ stretch }) => stretch && "-3rem"};
 }
`

export const TotalFees = styled.p`
  font-family: "rubik", sans-serif;
  position: relative;
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-size: 14px;
`

export const Fee = styled.span`
  position: absolute;
  right: 0;
  font-size: 14px;
`

export const TotalToPay = styled(TotalFees)`
  margin-bottom: 1.125rem;
  font-size: 1.125rem;
  font-weight: 530;
`

export const Amount = styled(Fee)`
  font-size: 1.125rem;
  font-weight: 530;
`