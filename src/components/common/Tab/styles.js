import styled from "styled-components"

export const Wrapper = styled.a.attrs({ href: "#" })`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => active ? "#ffffff" : "rgba(250, 250, 250, 0.9)"};
  background-color: ${({ active }) => active ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  font-size: 1rem;
  min-width: 78px;
  padding: 1rem 20px;

  &:focus,
  &:hover {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`
