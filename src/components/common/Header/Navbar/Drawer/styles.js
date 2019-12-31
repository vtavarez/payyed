import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  width: 100vw;
  z-index: 3;
  height: fit-content;
  padding: 18px 15px;
  transition: all 0.25s ease;
  transform-origin: top center;
  background-color: #ffffff;
  transform: ${({ toggle }) => toggle ? `translateY(0);`: `translateY(-100%);`}

  a {
    padding: 8px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (min-width: 992px){
    display: none;
  }

  @media (min-width: 720px){
    padding: 18px 40px;
  }
`