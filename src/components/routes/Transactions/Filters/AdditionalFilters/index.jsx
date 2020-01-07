import React from "react"
import { RadioInputLabel, RadioInput, StyledRadioInput } from "components/common"
import { Wrapper } from "./styles"

function AdditonalFilters({ toggled }) {
  return (
    <Wrapper toggled={toggled}>
      <RadioInputLabel label="all-transactions">
        <RadioInput 
          name="filter"
          id="all-transactions"
          value="all-transactions"
          defaultChecked
        />
        <StyledRadioInput />
        All Transactions
      </RadioInputLabel>
      <RadioInputLabel label="payments-sent">
        <RadioInput 
          name="filter"
          id="payments-sent"
          value="payments-sent"
        />
        <StyledRadioInput />
        Payments Sent
      </RadioInputLabel>
      <RadioInputLabel label="payments-received">
        <RadioInput 
          name="filter"
          id="payments-received"
          value="payments-received"
        />
        <StyledRadioInput />
        Payments Received
      </RadioInputLabel>
      <RadioInputLabel label="refunds">
        <RadioInput 
          name="filter"
          id="refunds"
          value="refunds"
        />
        <StyledRadioInput />
        Refunds
      </RadioInputLabel>
      <RadioInputLabel label="withdrawals">
        <RadioInput 
          name="filter"
          id="withdrawals"
          value="withdrawals"
        />
        <StyledRadioInput />
        Withdrawls
      </RadioInputLabel>
      <RadioInputLabel label="deposits">
        <RadioInput 
          name="filter"
          id="deposits"
          value="deposits"
        />
        <StyledRadioInput />
        Deposits
      </RadioInputLabel>
    </Wrapper>
  )
}

export default AdditonalFilters