import styled from "styled-components"

export const Wrapper = styled.a`
  color: ${({ activeLink }) => activeLink ? "#ffffff" : "#2dbe60" };
  font-size: 1rem;
  text-align: center;
  padding: 0.40rem 0.65rem;
  border-radius: 0.25rem;
  background-color: ${({ activeLink }) => activeLink ? "#2dbe60" : "#ffffff" };
  border-width: 1px;
  border-style: solid;
  border-color: ${({ activeLink }) => activeLink ? "#2dbe60" : "#ffffff" };
  margin: 0 0.22rem;
  outline: 0;

  &:hover {
    text-decoration: none;
    color: ${({ activeLink }) => activeLink ? "#ffffff" : "#2dbe60" };
    border-color: ${({ activeLink }) => activeLink ? "#2dbe60" : "#e9eff0" };
    background-color: ${({ activeLink }) => activeLink ? "#2dbe60" : "#e9eff0" };
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`