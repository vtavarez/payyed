import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 0;
  width: 100vw;
  height: 46vh;
  background-color: #f5f5f5
  
  @media (min-width: 768px){
    width: 50vw;
    height: 100vh;
    padding: 3rem 0;
  }
`

export const LoginForm = styled.form`
  max-width: 533px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`

export const InputTextLabelName = styled.div`
  margin-bottom: 0.5rem;
`

export const InputTextLabel = styled.label`
  margin-bottom: 1rem;
  width: 100%;
`

export const InputText = styled.input`
  width: 100%;
  padding: 0.810rem 0.96rem;
  border: 1px solid #dae1e3;
  border-radius: 0.25rem;
  color: #656565;
  background-color: #ffffff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out;

  &::placeholder {
    opacity: 0.5;
  }
`

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CheckInputLabelName = styled.span``

export const CheckInputLabel = styled.label`
  display: block; 
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0;
  line-height: 1.3;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    border: 1px solid #adb5bd;
    border-radius: 0.25rem;
    background-color: #ffffff;
    transition: all 0.15s ease-in-out;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    background: no-repeat 50%/50% 50%;
  }
`

export const CheckInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`