import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper, Icon } from "./styles"
import icons from "./icons"

function SocialLinks () {
  return (
    <Wrapper>
      {icons.map((social, index) => (
        <Icon aria-label={social.alt} tooltip={social.alt} key={index}>
          <FontAwesomeIcon icon={["fab", social.icon]} size="lg" />
        </Icon>
      ))}
    </Wrapper>
  )
}

export default SocialLinks