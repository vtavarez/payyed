import React, { Fragment } from "react"
import { Header, Footer, Wrapper, Contents } from "components/common"
import { Heading, SubHeading } from "./styles"

export function NotFound(){
  return (
    <Fragment>
      <Header />
        <Wrapper>
          <Contents>
            <Heading>404</Heading>
            <SubHeading>Oops! Sorry page not found.</SubHeading>
          </Contents>
        </Wrapper>
      <Footer />
    </Fragment>
  )
}