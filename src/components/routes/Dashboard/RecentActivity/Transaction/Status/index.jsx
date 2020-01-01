import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonTooltip } from "components/common"
import { Wrapper, AccessibleText } from "./styles"

function Status({ status }) {
  return (
    <Wrapper>
      <ButtonTooltip tooltip={status} aria-label="Transaction status">
        {status === "processing" && (
          <FontAwesomeIcon
            icon="ellipsis-h"
            color="#ffc107"
            size="lg"
            transform="shrink-2"
          />
        )}
        {status === "completed" && (
          <FontAwesomeIcon
            icon="check-circle"
            color="#28a745"
            size="lg"
            transform="shrink-2"
          />
        )}
        {status === "cancelled" && (
          <FontAwesomeIcon
            icon="times-circle"
            color="#dc3545"
            size="lg"
            transform="shrink-2"
          />
        )}
        <AccessibleText>{status}</AccessibleText>
      </ButtonTooltip>
    </Wrapper>
  )
}

export default Status
