import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`

export const Arrow = styled.a.attrs({ href: "#" })`
  color: ${({ disabled }) => disabled ? "#6c757d" : "#2dbe60"};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  text-align: center;

  &:first-child {
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
`

export const Dots = styled.div`
  color: #8e9a9d;
  font-size: 1.3125rem;
  margin: 0.25rem;
`