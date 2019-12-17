import React from "react"
import cards from "./cards"
import { Wrapper, Contents, Row, ButtonLink, FontAwesome, ChevronRight } from "components/common"
import { Card, Icon, Heading, SubHeading } from "./styles"

const WhatCanYouDoWithPayyed = () => (
  <Wrapper>
    <Contents>
      <Heading>What can you do with Payyed?</Heading>
      <SubHeading>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SubHeading>
      <Row justify="space-between">
        {cards.map((card, index) => (
          <Card key={index} content={card.alt} aria-label={card.alt}>
            <Icon>
              <FontAwesome
                icon={card.icon}
                size="4x"
                transform="shrink-2"
                color="#2dbe60"
              />
            </Icon>
          </Card>
        ))}
      </Row>
      <Row justify="center">
        <ButtonLink href="#" fontSize="1.125rem">
          See more you can do <ChevronRight transform="down-1 shrink-3 right-4" />
        </ButtonLink>
      </Row>
    </Contents>
  </Wrapper>
)

export default WhatCanYouDoWithPayyed
