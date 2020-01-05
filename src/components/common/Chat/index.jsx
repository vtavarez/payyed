import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonPrimary } from "components/common"
import { Wrapper, Icon, Heading, SubHeading } from "./styles"

export function Chat() {
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon="comments" size="5x" />
      </Icon>
      <Heading>Need Help?</Heading>
      <SubHeading>
        Have questions or concerns regrading your account? Our experts are here
        to help!
      </SubHeading>
      <ButtonPrimary stretch>Chat with Us</ButtonPrimary>
    </Wrapper>
  )
}
