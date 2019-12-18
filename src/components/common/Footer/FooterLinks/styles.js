import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: auto;
  max-width: 410px;
  width: 100%;
`

export const NavLink = styled.a`
  font-size: 1rem;
  color: #4c4d4d;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #2dbe60;
  }
`