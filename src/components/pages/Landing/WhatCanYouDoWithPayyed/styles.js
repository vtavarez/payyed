import styled from "styled-components"

export const Card = styled.div`
  position: relative;
  text-align: center;
  flex-basis: 100%;
  height: 175px;
  background-color: #ffffff;
  border: 1px solid #f0f2f3;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;

  &:nth-child(-n+3){
    margin-bottom: 1.5rem;
  }

  &:nth-child(4){
    margin-bottom: 3rem;
  }

  &::after {
    content: '${({ content }) => content}';
    bottom: 0;
    left: 0;
    padding: 8px 0;
    position: absolute;
    width: 100%;
    background-color: #f1f5f6;
    color: #1e1d1c;
    text-align: center;
    font-family: 'rubikmedium', sans-serif;
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0px 5px 1.5rem rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px){
    flex-basis: calc(50% - 15px);
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1024px){
    flex-basis: calc(25% - 30px);

    &:first-child{
      margin-left: 15px;
    }

    &:last-child{
      margin-right: 15px;
    }

    &:nth-child(-n+3){
      margin-bottom: 3rem;
    }

    &:nth-child(4){
      margin-bottom: 3rem;
    }
  }
`

export const Icon = styled.div`
  margin: 44px 0;
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
