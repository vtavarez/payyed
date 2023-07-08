import styled from "styled-components"

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 3rem;

  @media (min-width: 1024px){
    flex-basis: 41.666667%;
    padding-bottom: 0;
  }

  @media (min-width: 1200px){
    flex-basis: 50%;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 1024px){
    flex-basis: 58.333333%;
  }

  @media (min-width: 1200px){
    flex-basis: 50%;
  }
`

export const Card = styled.div`
  position: relative;
  flex-basis: 100%;
  height: 328px;
  border-radius: 0.25rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,0.15);
  background: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &:nth-child(-n+2){
    margin-bottom: 1.5rem;
  }

  &:nth-child(3){
   margin-bottom: 1.5rem;
  }

  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: 1;
    border-radius: 0.25rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), black);
    transition: all 0.5s ease;
  }

  &::after {
    content: '${({ content }) => content}';
    position: absolute;
    width: 100%;
    z-index: 2;
    padding: 15px 20px;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    color: #ffffff;
    font-family: 'rubik' sans-serif;
    font-size: 1.3125rem;
    text-align: center;
    border-radius: 0 0 0.25rem 0.25rem;
    transition: all 0.3s ease;
  }

  &:hover {
   &::before {
     opacity: 1;
   }
   &::after {
    padding-left: 28px;
   }
  }

  @media (min-width: 768px){
    flex-basis: calc(50% - 15px);
    height: 282px;

    &:nth-child(3){
      margin-bottom: 0;
    }
  }

  @media (min-width: 1024px){
    height: 224px;
  }
`

export const Heading = styled.h2`
  font-size: 2.25rem;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`
