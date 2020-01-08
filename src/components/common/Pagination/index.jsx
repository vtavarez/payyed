import React from "react"
import Link from "./Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Arrow, Dots } from "./styles"

export function Pagination({ currentIndex, total }) {

  return (
    <Wrapper>
      <Arrow
        role="button"
        disabled={currentIndex === 0}
        tabIndex={currentIndex === 0 ? "-1" : "0"}
      >
        <FontAwesomeIcon icon="chevron-left" size="sm" />
      </Arrow>
        <Link currentIndex={currentIndex}>1</Link>
        <Link currentIndex={currentIndex}>2</Link>
        <Link currentIndex={currentIndex}>3</Link>
        <Dots>......</Dots>
        <Link currentIndex={currentIndex}>{total}</Link>
      <Arrow role="button">
        <FontAwesomeIcon icon="chevron-right" size="sm" />
      </Arrow>
    </Wrapper>
  )
}
