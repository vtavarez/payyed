import React from "react"
import FooterLinks from "./FooterLinks"
import SocialLinks from "./SocialLinks"
import Copyright from "./Copyright"
import PrivacyLinks from "./PrivacyLinks"
import { Wrapper, Contents, Row, Col } from "../Grid"
import { Divider } from "./styles"

export function Footer() {
  return (
    <Wrapper padding="4.125rem 0">
      <Contents>
        <Row>
          <Col>
            <FooterLinks />
          </Col>
          <Col>
            <SocialLinks />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col>
            <Copyright />
          </Col>
          <Col>
            <PrivacyLinks />
          </Col>
        </Row>
      </Contents>
    </Wrapper>
  )
}
