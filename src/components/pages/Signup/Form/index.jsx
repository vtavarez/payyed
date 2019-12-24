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
  TextInputLabel,
  TextInput,
  TextInputName,
  Account,
  ButtonLink,
  ButtonPrimary
} from "components/common"

function Signup({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormName>Sign Up</FormName>
        <TextInputLabel label="name">
          <TextInputName>Full Name</TextInputName>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </TextInputLabel>
        <TextInputLabel label="email">
          <TextInputName>Email Address</TextInputName>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
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
            value={values.password}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            error={touched.password && errors.password}
          />
          <ErrorMessage component={Error} name="password" />
        </TextInputLabel>
        <ButtonPrimary stretch margin="0.5rem 0" type="submit">
          Sign Up
        </ButtonPrimary>
      </Form>
      <Account>
        Already have an account?{" "}
        <ButtonLink as={Link} to="/login">
          Log In
        </ButtonLink>
      </Account>
    </Wrapper>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    password: "",
    submitError: false
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required("full name is required"),
      email: Yup.string()
        .email()
        .required("email address is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        )
        .required("password is required")
    }),
  handleSubmit: async (
    { name, email, password },
    { setSubmitting, setFieldValue }
  ) => {
    try {
      const user = await axios.post("/signup", {
        name,
        email,
        password
      })
      setSubmitting(false)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("submitError", true)
    }
  }
})(Signup)
