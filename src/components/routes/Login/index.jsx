import React, { Fragment } from "react"
import Hero from "./Hero"
import Form from "./Form"
import { SEO } from "components/common"
import { Wrapper } from "./styles"

export function Login() {
  return (
    <Fragment>
      <SEO title="Payyed - Login" />
      <Wrapper>
        <Hero />
        <Form />
      </Wrapper>
    </Fragment>
  )
}