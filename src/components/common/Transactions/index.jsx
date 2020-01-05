import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink } from "../Buttons"
import { Wrapper, ViewAll } from "./styles"
import TransactionTitles from "./TransactionTitles"
import Transaction from "./Transaction"

export function Transactions({ recent, all }) {
  return (
    <Wrapper>
      <TransactionTitles />
      {Array.from({ length: recent && 7 }).map((_, i) => (
        <Transaction key={i} />
      ))}
      {recent && (
        <ViewAll>
          <ButtonLink href="#">
            View all{" "}
            <FontAwesomeIcon icon="chevron-right" transform="shrink-2" />
          </ButtonLink>
        </ViewAll>
      )}
    </Wrapper>
  )
}
