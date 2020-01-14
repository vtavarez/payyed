import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  background-color: #ffffff;

  @media (min-width: 768px){
    max-width: 620px;
    max-height: 445px;
    transform: translateX(-7px);
  }
`

export const Banner = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #2dbe60;

  @media (min-width: 768px){
    flex: 5;
  }
`

export const BannerContents = styled.div`
  text-align: center;
`

export const BannerTransactionName = styled.h3`
  font-family: "rubikregular", sans-serif;
  font-size: 1.125rem;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const BannerTransactionAmount = styled.div`
  font-family: "rubikmedium", sans-serif;
  font-size: 2rem;
  color #ffffff;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`

export const BannerTransactionDate = styled.p`
  color: #ffffff;
`

export const Details = styled.div`
  flex: 1 1 100%;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  @media (min-width: 768px){
    flex: 7;
  }
`

export const Title = styled.h5`
  font-family: "rubikregular", sans-serif;
  font-size: 1.3125rem;
  margin: 1rem;
`

export const Divider = styled.hr`
  border-top: 1px solid rgba(16,85,96,0.1);
  margin-top: ${({ mt }) => mt ? mt : "0"};
  margin-bottom: ${({ mb }) => mb ? mb : "0"};
`

export const CloseButton = styled.button`
  float: right;
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  opacity: 0.75;

  svg {
    transform: translateY(-3px);
  }

  &:hover,
  &:focus {
    opacity: 1
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

export const TransactionContents = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

export const List = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  list-style: none;
`

export const Item = styled.li`
  font-family: ${({ medium }) => medium ? "rubikmedium" : "rubikregular"}, sans-serif;
  margin-bottom: ${({ mb }) => mb ? mb : "0"};
  color ${({ color }) => color ? color : "inherit"};
`

export const TransactionAmount = styled.span`
  float: right;
  font-size: 1rem;
`

export const TransactionTotal = styled.p`
  display: flex;
  align-items: center;
  font-family: "rubikmedium", sans-serif;
  margin-bottom: 1.5rem;
`

export const Total = styled.span`
  margin-left: auto;
  font-size: 1rem;
`