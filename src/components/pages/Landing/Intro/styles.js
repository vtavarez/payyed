import styled from 'styled-components';
import { ButtonPrimary, ButtonOutlineSecondary } from "components/common"

export const Slider = styled.div`
  .slick-prev,
  .slick-next {
    z-index: 2;
    opacity: 0;
    transition: all 0.35s ease;
    width: 45px;
    height: 45px;

    &::before {
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 25px;
  }

  .slick-next {
    right: 25px;
  }

  .slick-dots {
    bottom: 5px;
  }
  
  .slick-dots li button::before {
    color: #ffffff !important;
    font-size: 12px;
  }

  &:hover {
    .slick-prev,
    .slick-next {
      opacity: 1;
    }
  }
`

export const Slide = styled.div`
  position: relative;
  height: 560px;
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
  }

  @media (max-width: 768px){
    background-position: right 31% bottom 45%;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => `${align}`}
  padding: 0 15px;
  ${({ align }) => align === 'start' &&`margin-left: 200px`}

  @media (max-width: 768px){
    margin-left: 0;
    align-items: center;
  }
`

export const Content = styled.div`
  width: fit-content;
  text-align: ${({ align }) => align === 'start' ? `left` : `center`};

  @media (max-width: 768px){
    text-align: center;
  }
`

export const Title = styled.h2`
  max-width: ${({ size }) => size === 'lg' ? `700px`:`600px`}
  font-size: ${({ size }) => size === 'lg' ? `4rem`:`3.25rem`}
  color: #ffffff;
  margin: auto;

  @media (max-width: 767px){
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 1.3125rem;
  color: #ffffff;
`

export const DemoButton = styled(ButtonOutlineSecondary)`
  margin: 0.5rem;
`

export const CTAButton = styled(ButtonPrimary)`
  margin: 0.5rem;
`