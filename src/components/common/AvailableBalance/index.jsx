import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink } from "components/common"
import { Wrapper, Icon, Balance, Title, Links } from "./styles"

export function AvailableBalance() {
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon="wallet" color="#dee3e4" size="5x" />
      </Icon>
      <Balance>
        $2956.00
      </Balance>
      <Title>
        Available Balance
      </Title>
      <Links>
        <ButtonLink href="#" fontSize="14px">
          Withdraw
        </ButtonLink>
        <ButtonLink href="#" fontSize="14px">
          Deposit
        </ButtonLink>
      </Links>
    </Wrapper>
  )
}
