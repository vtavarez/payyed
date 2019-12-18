import React from "react";
import FooterLinks from "./FooterLinks"
import SocialLinks from "./SocialLinks"
import { Wrapper, Contents, Row } from "../Grid";

export function Footer () {
  return (
    <Wrapper padding="4.125rem 0">
      <Contents>
        <Row>
          <FooterLinks />
          <SocialLinks />
        </Row>
      </Contents>
    </Wrapper>
  )
}