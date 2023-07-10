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
  font-size: 1.125rem;
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

export const FormName = styled.h3`
  font-size: 1.3125rem;
  margin-bottom: 1rem;
  padding-bottom: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Field = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: start;
  margin-bottom: 1rem;
`

export const FieldName = styled.p`
  color: #8e9a9d;
  margin-bottom: 0;
  width: 33.33%;
  text-align: right;
  font-weight: ${({ bold }) => bold ? "600" : "450"};
`

export const FieldValue = styled(FieldName)`
  font-size: ${({ bold }) => bold ? "1.125rem" : "1rem"};
  color: unset;
  width: 66.66%;
  text-align: unset;
  line-height: ${({ bold }) => bold && "1.5"};
`

export const Email  = styled.span`
  font-family: "rubikmedium", sans-serif;
`

export const Divider = styled.hr`
  margin-inline: -15px;
  @media (min-width: 768px) {
   margin-inline: ${({ stretch }) => stretch && "-3rem"};
 }
`

export const Total = styled(Email)`
  margin-bottom: 1rem;
`

export const TotalAmount = styled.p``