import styled from "styled-components"
import check from "assets/icons/check.svg"
import dot from "assets/icons/dot.svg"

export const Form = styled.form`
  width: 100%;
  max-width: 533px;
  padding-right: 15px;
  padding-left: 15px;
`

export const Label = styled.label`
  margin-bottom: ${({ nomargin }) => nomargin ? "0" : "1rem"};
  width: 100%;
`

export const FormName = styled.h3`
  font-family: "rubikregular", sans-serif;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`

export const Error = styled.span`
  display: block;
  color: #e74c3c;
  margin-top: 0.5rem;
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const InputName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`

export const TextInput = styled.input`
  width: 100%;
  padding: 0.810rem 0.96rem;
  border: 1px solid #dae1e3;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #656565;
  background-color: #ffffff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out;
`

export const TextArea  = styled.textarea`
  width: 100%;
  padding: 0.810rem 0.96rem;
  border: 1px solid #dae1e3;
  border-radius: 0.25rem;
  color: #656565;
  background-color: #ffffff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out;
`

export const CheckboxInputName = styled.span``

export const CheckboxInputLabel = styled.label`
  display: block; 
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0;
  line-height: 1.3;
`

export const CheckboxInput = styled.input.attrs({ type: "checkbox"})`
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

export const RadioInputLabel = styled.label`
  display: inline-block; 
  position: relative;
  padding-left: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0;
  line-height: 1.3;
`

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

export const Account = styled.p`
  font-size: 1rem;
  color: #8e9a9d;
  margin: 1.5rem 0;
`

export const StyledRadioInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  border: 1px solid #adb5bd;
  border-color: #adb5bd;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.15s ease-in-out;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: 40%;
    transform: translate(-3px, -3px);
  }

  ${RadioInput}:focus + & {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  ${RadioInput}:checked + & {
    background-color: #2dbe60;
    border-color: #2dbe60;

    &::after {
      background-image: url("${dot}");
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  border-radius: 0.25rem;
  border: 1px solid #dae1e3;
  max-height: 52px;
  margin-bottom: 1rem;
`

export const FormGroupPrepend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #f1f5f6;
  border-right: 1px solid #dae1e3;
  color: #656565;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;

  `
export const FormGroupAppend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: #f1f5f6;
  border-left: 1px solid #dae1e3;
`

export const FormGroupControl = styled(TextInput)`
  border: none;
  margin-bottom: 0;
`