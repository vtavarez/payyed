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

export const Link = styled.a.attrs({ href: "#" })`
  display: ${({ hide }) => hide ? "none" : "block"};
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

export const Dots = styled.div`
  display: ${({ hide }) => hide ? "none" : "block"};
  color: #8e9a9d;
  font-size: 1.3125rem;
  margin: 0.25rem;
`