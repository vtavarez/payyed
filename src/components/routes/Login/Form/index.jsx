import React, { useEffect, useContext } from "react"
import { State } from "state"
import { Link, navigate } from "@reach/router"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {
  Form,
  FormName,
  Error,
  InputGroup,
  Label,
  TextInput,
  InputName,
  CheckboxInputLabel,
  CheckboxInput,
  CheckboxInputName,
  StyledCheckboxInput,
  Account,
  ButtonLink,
  ButtonPrimary
} from "components/common"
import { Wrapper } from "./styles"

function LoginForm() {
  const { state, dispatch } = useContext(State)

  useEffect(() => {
    if (state.authenticated) {
      navigate("/dashboard")
    }
  }, [state.authenticated])


  return (
    <Wrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          submitError: false
        }}
        validationSchema={() =>
          Yup.object().shape({
            email: Yup.string()
              .email()
              .required("email address is required"),
            password: Yup.string().required("password is required")
          })
        }
        onSubmit={async(
          { email, password, rememberMe },
          { setSubmitting, setFieldValue }
        ) => {
          try {
            const user = await axios.post("/login", {
              email,
              password,
              rememberMe
            })
            dispatch({
              type: "LOGGED_IN",
              payload: user
            })
          } catch (err) {
            setSubmitting(false)
            setFieldValue("submitError", true)
          }
        }}
      >
        {({
          setFieldValue,
          handleBlur,
          handleChange,
          handleSubmit,
          values
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormName>Log In</FormName>

            <Label label="email">
              <InputName>Email Address</InputName>
              <TextInput
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <ErrorMessage component={Error} name="email" />
            </Label>

            <Label label="password">
              <InputName>Password</InputName>
              <TextInput
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <ErrorMessage component={Error} name="password" />
            </Label>

            <InputGroup>
              <CheckboxInputLabel label="remember-me">
                <CheckboxInput
                  onChange={() =>
                    setFieldValue("rememberMe", !values.rememberMe)
                  }
                  checked={values.rememberMe}
                  type="checkbox"
                  name="remember-me"
                />
                <StyledCheckboxInput checked={values.rememberMe} />
                <CheckboxInputName>Remember Me</CheckboxInputName>
              </CheckboxInputLabel>

              <ButtonLink href="#" fontSize="14px">
                Forgot Password?
              </ButtonLink>
            </InputGroup>

            <ButtonPrimary stretch type="submit">
              Login
            </ButtonPrimary>
          </Form>
        )}
      </Formik>

      <Account>
        Don't have an account?{" "}
        <ButtonLink as={Link} to="/signup">
          Sign Up
        </ButtonLink>
      </Account>
    </Wrapper>
  )
}

export default LoginForm
