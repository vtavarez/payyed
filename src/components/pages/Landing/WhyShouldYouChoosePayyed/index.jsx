import React from "react"
import features from "./features"
import { Wrapper, Contents, Row, ButtonLink, FontAwesome, ChevronRight } from "components/common";
import {
  Heading,
  SubHeading,
  Feature,
  Title,
  Description
} from "./styles"

const WhyChoose = () => (
  <Wrapper>
    <Contents>
      <Heading>Why should you choose Payyed?</Heading>
      <SubHeading>
        Top 4 reasons why you should be using a Payyed to manage your
        money.
      </SubHeading>
      <Row>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FontAwesome
              icon={feature.icon}
              size="3x"
              transform="shrink-1"
              flip={feature.flipIcon}
              color="#2dbe60"
            />
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
            <ButtonLink href="#">
              Learn more <ChevronRight transform="down-1 shrink-3 right-4"  />
            </ButtonLink>
          </Feature>
        ))}
      </Row>
    </Contents>
  </Wrapper>
)

export default WhyChoose
