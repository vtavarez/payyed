import styled from "styled-components"

export const Slider = styled.div`
  margin-bottom: 2rem;

  .slick-list {
    min-height: 300px;

    @media (min-width: 1200px){
      min-height: 260px;
    }
  }

  .slick-prev,
  .slick-next {
    top: calc(50% - 22px);
    z-index: 2;
    opacity: 0;
    transition: all 0.35s ease;
    width: 44px;
    height: 44px;

    &::before {
      font-size: 44px;
      color: #2dbe60;
      transition: all 0.35s ease;
    }
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -12px;
  }

  .slick-dots {
    bottom: -15px;

    @media (min-width: 768px){
      bottom: 0;
    }
  }
  
  .slick-dots li button::before {
    color: rgba(0,0,0,0.2) !important;
    font-size: 12px;
  }

  &:hover {
    .slick-prev,
    .slick-next {
      opacity: 1;
    }
  }
`

export const Testimonial = styled.div`
  max-width: 380px;
  margin-right 30px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #f1f5f6;
  border-radius: 0.25rem;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
  padding: 1.5rem;
  text-align: center;

  @media (min-width: 768px){
    max-width: 688px;
  }

  @media (min-width: 1024px){
    max-width: 450px;
  }

  @media (min-width: 1200px){
    max-width: 550px;
  }
`

export const Review = styled.p`
  font-size: 1.125rem;
`

export const User = styled.strong`
  display: block;
`

export const Location = styled.span`
  display: block;
  color: #8e9a9d;
`

export const Heading = styled.h2`
  font-size: 2.25rem;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
`