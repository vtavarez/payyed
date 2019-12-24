import React, { useEffect } from "react"
import { Link } from "@reach/router"
import { withFormik, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Wrapper } from "./styles"
import {
  Form,
  FormName,
  Error,
  InputField,
  TextInputLabel,
  TextInput,
  TextInputName,
  CheckboxInputLabel,
  CheckboxInput,
  CheckboxInputName,
  StyledCheckboxInput,
  Account,
  ButtonLink,
  ButtonPrimary
} from "components/common"

function LoginForm({
  values,
  touched,
  errors,
  setFieldValue,
  handleChange,
  handleBlur,
  handleSubmit
}) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormName>Log In</FormName>
        <TextInputLabel label="email">
          <TextInputName>Email Address</TextInputName>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </TextInputLabel>
        <TextInputLabel label="password">
          <TextInputName>Password</TextInputName>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            error={touched.password && errors.password}
          />
          <ErrorMessage component={Error} name="password" />
        </TextInputLabel>
        <InputField>
          <CheckboxInputLabel label="rememberMe">
            <CheckboxInput
              onChange={() => setFieldValue("rememberMe", !values.rememberMe)}
              checked={values.rememberMe}
              type="checkbox"
              name="rememberMe"
            />
            <StyledCheckboxInput checked={values.rememberMe} />
            <CheckboxInputName>Remember Me</CheckboxInputName>
          </CheckboxInputLabel>
          <ButtonLink href="#" fontSize="14px">
            Forgot Password?
          </ButtonLink>
        </InputField>
        <ButtonPrimary stretch type="submit">
          Login
        </ButtonPrimary>
      </Form>
      <Account>
        Don't have an account?{" "}
        <ButtonLink as={Link} to="/signup">
          Sign Up
        </ButtonLink>
      </Account>
    </Wrapper>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    rememberMe: false,
    submitError: false
  }),
  validationSchema: () =>
    Yup.object().shape({
      email: Yup.string()
        .email()
        .required("email address is required"),
      password: Yup.string().required("password is required")
    }),
  handleSubmit: async (
    { email, password, rememberMe },
    { setSubmitting, setFieldValue }
  ) => {
    try {
      const user = await axios.post("/login", {
        email,
        password,
        rememberMe
      })
      setSubmitting(false)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("submitError", true)
    }
  }
})(LoginForm)