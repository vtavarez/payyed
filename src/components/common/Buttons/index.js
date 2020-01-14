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
  color: #2dbe60;

  &:hover {
    color: #2dbe60;
  }
`

export const ButtonLinkSecondary = styled.a`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: #8e9a9d;

  &:hover {
    color: #2dbe60;
  }
`

export const ButtonPrimary = styled(Button)`
  color: #f8f9fa;
  background-color: #2dbe60;
  border-color: #2dbe60;
  margin: ${({ margin }) => margin || "0"};
  ${({ stretch}) => stretch && "width: 100%;"}

  &:focus {
    background-color: #22b355;
    border-color: #22b355;
  }

  &:hover {
    background-color: #22b355;
    border-color: #22b355;
  }
`

export const ButtonSecondary = styled(Button)`
  color: #2dbe60;
  background-color: #f8f9fa;
  border-color: #f8f9fa;

  &:focus {
    background-color: #e2e6ea5;
    border-color: #dae0e5;
  }

  &:hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
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

export const ButtonTooltip = styled.button`
  position: relative;
  width: fit-content;
  height: auto;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #4d555a;

  &::before {
    font-family: "rubikregular", sans-serif;
    content: '${({ tooltip }) => tooltip}';
    position: absolute;
    max-width: 200px;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-align: center;
    background-color: #000000;
    border-radius: 0.25rem;
    transition: all 0.35s ease;
    opacity: 0;
    visibility: hidden;
    text-transform: capitalize;
  }

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000000;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    transition: all 0.35s ease;
    opacity: 0;
    visibility: hidden;
  }

  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
`