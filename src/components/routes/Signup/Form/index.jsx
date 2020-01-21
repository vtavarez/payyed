import React, { useEffect } from "react"
import { Link } from "@reach/router"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Wrapper } from "./styles"
import {
  Form,
  FormName,
  Error,
  Label,
  TextInput,
  InputName,
  Account,
  ButtonLink,
  ButtonPrimary
} from "components/common"

function Signup() {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          submitError: false
        }}
        validationSchema={() =>
          Yup.object().shape({
            name: Yup.string()
              .trim()
              .matches(
                /[\w\s]$/,
                "Name can only contain letters, and cannot include any special characters, punctionations or start with a space"
              )
              .required("Full name is required"),
            email: Yup.string()
              .email()
              .required("Email address is required"),
            password: Yup.string()
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Password must be a minimum eight characters, with at least one uppercase letter, one lowercase letter, and one number"
              )
              .required("Password is required")
          })
        }
        onSubmit={async (
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
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormName>Sign Up</FormName>

            <Label label="name">
              <InputName>Full Name</InputName>
              <TextInput
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <ErrorMessage component={Error} name="name" />
            </Label>

            <Label label="email">
              <InputName>Email Address</InputName>
              <TextInput
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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
                value={values.password}
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <ErrorMessage component={Error} name="password" />
            </Label>

            <ButtonPrimary stretch margin="0.5rem 0" type="submit">
              Sign Up
            </ButtonPrimary>
          </Form>
        )}
      </Formik>

      <Account>
        Already have an account?{" "}
        <ButtonLink as={Link} to="/login">
          Log In
        </ButtonLink>
      </Account>
    </Wrapper>
  )
}

export default Signup
