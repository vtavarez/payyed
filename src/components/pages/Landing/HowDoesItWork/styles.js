import styled from "styled-components"

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Video = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  height: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;

  @media(min-width: 1024px){
    flex-basis: 50%;
  }
`

export const Placeholder = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
  filter: contrast(90%) brightness(87%);
`

export const PlayButton = styled.button`
  position: absolute;
  z-index: 1;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
`

export const Info = styled.div`
  flex-basis: 100%;
  padding-left: 2.5rem;
  padding-right: 15px;
  margin-top: 3rem;

  @media(min-width: 1024px){
    flex-basis: 50%;
    margin-top: 0;
  }
`

export const AccessibleText = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

export const Heading = styled.h2`
  font-size: 2.25rem;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`

export const Icon = styled.span`
  margin-right: 0.5rem;
`

export const List = styled.ul`
  line-height: 1.8;
  font-size: 1rem;
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 1.5rem;
`