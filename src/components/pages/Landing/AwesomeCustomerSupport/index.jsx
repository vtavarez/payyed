import React from "react"
import { Wrapper, Contents, Row, ButtonSecondary } from "components/common"
import { FixedBackground, Heading, SubHeading } from "./styles"

function AwesomeCustomerSupport() {
  return (
    <Wrapper as={FixedBackground}>
      <Contents>
        <Heading>Awesome Customer Support</Heading>
        <SubHeading>
          Have you any query? Don't worry. We have great people ready to help
          you whenever you need it.
        </SubHeading>
        <Row justify="center">
          <ButtonSecondary>Find out more</ButtonSecondary>
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default AwesomeCustomerSupport
