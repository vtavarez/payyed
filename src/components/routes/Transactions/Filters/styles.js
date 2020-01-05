import styled from "styled-components"

export const Title = styled.h2`
  font-family: "rubikregular", sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const DatePickerWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.810rem 0 0.810rem 10px;
  margin-bottom: 1rem;
`

export const DatePickerIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #c4c3c3;
`