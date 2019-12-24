import styled from "styled-components"
import check from "assets/icons/check.svg"

export const Form = styled.form`
  width: 100%;
  max-width: 533px;
  padding-right: 15px;
  padding-left: 15px;
`

export const FormName = styled.h3`
  font-family: "rubikregular", sans-serif;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`

export const Error = styled.span`
  display: block;
  color: #e74c3c
  margin-top: 0.5rem;
`

export const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const TextInputName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`

export const TextInputLabel = styled.label`
  margin-bottom: 1rem;
  width: 100%;
`

export const TextInput = styled.input`
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

export const CheckboxInputName = styled.span``

export const CheckboxInputLabel = styled.label`
  display: block; 
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0;
  line-height: 1.3;
`

export const CheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

export const StyledCheckboxInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  border: 1px solid #adb5bd;
  border-color: ${({ checked }) => checked ? "#2dbe60" : "#adb5bd"};
  border-radius: 0.25rem;
  background-color: ${({ checked }) => checked ? "#2dbe60" : "#ffffff"};
  transition: all 0.15s ease-in-out;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-position: 40% 30%;
    background-size: 55%;
    ${({ checked }) => checked && `background-image: url("${check}")`}
  }

  ${CheckboxInput}:focus + & {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`

export const Account = styled.p`
  font-size: 1rem;
  color: #8e9a9d;
  margin: 1.5rem 0;
`