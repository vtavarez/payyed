import React from "react"
import cards from "./cards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Contents, Row, ButtonLink } from "components/common"
import { Info, Cards, Card, Heading, SubHeading } from "./styles"

function PaymentSolutions() {
  return (
    <Wrapper bgColor="#f5f5f5">
      <Contents>
        <Row>
          <Info>
            <Heading>Payment Solutions for anyone.</Heading>
            <SubHeading>
              Quidam lisque persius interesset his et, in quot quidam
              persequeris vim, ad mea essent possim iriure. Lisque persius
              interesset his et, in quot quidam persequeris vim, ad mea essent
              possim iriure. lisque persius interesset his et, in quot quidam
              mea essent possim iriure.
            </SubHeading>
            <ButtonLink fontSize="1.125rem" href="#">
              Find more solutions{" "}
              <FontAwesomeIcon
                icon="chevron-right"
                transform="down-1 shrink-3 right-4"
              />
            </ButtonLink>
          </Info>
          <Cards>
            {cards.map((card, index) => (
              <Card
                key={index}
                content={card.alt}
                image={card.image}
                aria-label={card.alt}
              />
            ))}
          </Cards>
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default PaymentSolutions
