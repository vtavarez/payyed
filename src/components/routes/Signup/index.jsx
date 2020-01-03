import React, { Fragment } from "react"
import Hero from "./Hero"
import Form from "./Form"
import { SEO } from "components/common"
import { Wrapper } from "./styles"

export function Signup() {
  return (
    <Fragment>
      <SEO title="Payyed - Sign Up" />
      <Wrapper>
        <Hero />
        <Form />
      </Wrapper>
    </Fragment>
  )
}