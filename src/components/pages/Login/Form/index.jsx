import React, { useState } from "react"
import { ButtonLink, ButtonPrimary } from "components/common"
import {
  Wrapper,
  LoginForm,
  FormName,
  FormGroup,
  InputTextLabel,
  InputTextLabelName,
  InputText,
  CheckInputLabel,
  CheckInput,
  StyledCheckInput,
  CheckInputLabelName,
  NeedAccount
} from "./styles"

function Form() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)

  const onEmailInputChange = e => {
    setEmail(e.value)
  }
  const onPasswordInputChange = e => {
    setPassword(e.value)
  }
  const onRememberMeInputChange = e => {
    setChecked(!checked)
  }

  return (
    <Wrapper>
      <LoginForm>
        <FormName>Log In</FormName>
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
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </InputTextLabel>
        <FormGroup>
          <CheckInputLabel label="remember-me">
            <CheckInput
              onChange={onRememberMeInputChange}
              checked={checked}
              type="checkbox"
            />
            <StyledCheckInput checked={checked} />
            <CheckInputLabelName>Remember Me</CheckInputLabelName>
          </CheckInputLabel>
          <ButtonLink href="#" fontSize="14px">
            Forgot Password?
          </ButtonLink>
        </FormGroup>
        <ButtonPrimary stretch type="submit">
          Login
        </ButtonPrimary>
      </LoginForm>
      <NeedAccount>
        Don't have an account? <ButtonLink href="#">Sign Up</ButtonLink>
      </NeedAccount>
    </Wrapper>
  )
}

export default Form
