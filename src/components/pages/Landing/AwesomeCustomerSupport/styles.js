import styled from "styled-components"
import team from "assets/images/team.webp"

export const FixedBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 465px;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(45, 190, 96, 0.9), rgba(45, 190, 96, 0.9)), url("${team}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

`

export const Heading = styled.h2`
  font-size: 2.25rem;
  text-align: center;
  color #ffffff;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
`