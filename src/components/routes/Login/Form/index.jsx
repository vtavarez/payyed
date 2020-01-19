import React, { useEffect, useContext } from "react"
import { State } from "state"
import { Link, navigate } from "@reach/router"
import { withFormik, ErrorMessage } from "formik"
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

function LoginForm({
  values,
  touched,
  errors,
  setFieldValue,
  setSubmitting,
  handleChange,
  handleBlur
}) {
  const { state, dispatch } = useContext(State)

  useEffect(() => {
    if(state.authenticated){
      navigate("/dashboard")
    }
    return () => setSubmitting(false)
    // eslint-disable-next-line
  },[state.authenticated])

  const fetchUser = async (e) => {
    e.preventDefault()
    try {
      // const { email, password, rememberMe } = values
      // const user = await axios.post("/login", {
      //   email,
      //   password,
      //   rememberMe
      // })
      dispatch({
        type: "LOGGED_IN"
      })
    } catch (err) {
      setSubmitting(false)
      setFieldValue("submitError", true)
    }
  }

  return (
    <Wrapper>
      
      <Form onSubmit={fetchUser}>

        <FormName>Log In</FormName>

        <Label label="email">
          <InputName>Email Address</InputName>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            error={touched.email && errors.email}
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
            error={touched.password && errors.password}
          />
          <ErrorMessage component={Error} name="password" />
        </Label>

        <InputGroup>
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
        </InputGroup>

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
    })
})(LoginForm)
