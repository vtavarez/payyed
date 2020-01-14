import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col, ButtonLink } from "components/common"
import { Wrapper, Title, Percentage, Category } from "./styles"
import categories from "./categories"

function ProfileCompleteness() {
  return (
    <Wrapper>
      <Title>
        Profile Completeness <Percentage>{50}%</Percentage>
      </Title>
      <Row justify="space-between">
        {categories.map(({ icon, link }, index) => (
          <Col key={index} flexMD="3" flex="3">
            <Category>
              <FontAwesomeIcon
                icon={icon}
                size="3x"
                transform="shrink-1"
                color="#dee3e4"
              />
              <FontAwesomeIcon
                icon={["far", "circle"]}
                size="2x"
                transform="shrink-3"
                color="#dee3e4"
              />
              <ButtonLink href="#" fontSize="14px">
                {link}
              </ButtonLink>
            </Category>
          </Col>
        ))}
      </Row>
    </Wrapper>
  )
}

export default ProfileCompleteness
