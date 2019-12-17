import styled from "styled-components"

export const Button = styled.button`
  background-color: transparent;
  color: #212529;
  transition: all 0.5s ease;
  vertical-align: middle;
  text-align: center;
  user-select: none;
  border-radius: 0.25rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 0.8rem 2rem;
  line-height: 1.5;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`

export const ButtonLink = styled.a`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: #2dbe60;;

  &:hover {
    color: #2dbe60;
  }
`

export const ButtonPrimary = styled(Button)`
  color: #f8f9fa;
  background-color: #2dbe60;
  border-color: #2dbe60;

  &:focus {
    background-color: #22b355;
    border-color: #22b355;
  }

  &:hover {
    background-color: #22b355;
    border-color: #22b355;
  }
`

export const ButtonOutline = styled(Button)`
  padding: 0.81rem 1rem;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    padding: 0.8rem 2rem;
  }
`

export const ButtonOutlinePrimary = styled(ButtonOutline)`
  color: #2dbe60;
  border: 1px solid #2dbe60;

  &:hover {
    color: #ffffff;
    background-color: #2dbe60;
  }
`

export const ButtonOutlineSecondary = styled(ButtonOutline)`
  color: #f8f9fa;
  border: 1px solid #f8f9fa;

  &:hover {
    color: #2dbe60;
    background-color: #f8f9fa;
  }
`
