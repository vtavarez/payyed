import React, { useState } from "react"
import {
  Wrapper,
  LoginForm,
  FormGroup,
  InputTextLabel,
  InputTextLabelName,
  InputText,
  CheckInputLabel,
  CheckInput,
  CheckInputLabelName
} from "./styles"

function Form() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const onEmailInputChange = e => {
    setEmail(e.value)
  }
  const onPasswordInputChange = e => {
    setPassword(e.value)
  }
  const onRememberMeInputChange = e => {
    setRememberMe(!rememberMe)
  }

  return (
    <Wrapper>
      <LoginForm>
        <InputTextLabel label="email">
          <InputTextLabelName>Email Address</InputTextLabelName>
          <InputText
            onChange={onEmailInputChange}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </InputTextLabel>
        <InputTextLabel label="password">
          <InputTextLabelName>Password</InputTextLabelName>
          <InputText
            onChange={onPasswordInputChange}
            value={password}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </InputTextLabel>
        <FormGroup>
          <CheckInputLabel label="remember-me">
            <CheckInput 
              onChange={onRememberMeInputChange} 
              value={rememberMe} 
              type="checkbox" 
            />
           <CheckInputLabelName>Remember Me</CheckInputLabelName>
          </CheckInputLabel>
        </FormGroup>
      </LoginForm>
    </Wrapper>
  )
}

export default Form
