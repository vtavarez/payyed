import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffffff;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    min-width: 263px;
  }
`