import React, { Fragment } from "react"
import { Link } from "@reach/router"
import {
  Header,
  Footer,
  Wrapper,
  Contents,
  ButtonLink
} from "components/common"
import { Heading, SubHeading } from "./styles"

export function Forbidden() {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Contents>
          <Heading>403</Heading>
          <SubHeading>
            Access Forbidden.
            Please{" "}
            <ButtonLink fontSize="inherit" as={Link} to="/login">
              Login
            </ButtonLink>{" "}
          </SubHeading>
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}
