import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Arrow, Link, Dots } from "./styles"

export function Pagination({ currentIndex, setCurrentIndex, total }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)
  const firstIndex = 0
  const lastIndex = pages.length - 1
  const [chunk, setChunk] = useState(
    pages.slice(currentIndex, currentIndex + 3)
  )

  useEffect(() => {
    if (
      currentIndex + 1 > chunk[chunk.length - 1] &&
      currentIndex + 5 !== pages[lastIndex]
    ) {
      setChunk(pages.slice(currentIndex, currentIndex + 3))
    }

    if (currentIndex + 1 < chunk[firstIndex]) {
      setChunk(pages.slice(currentIndex - 2, currentIndex + 1))
    }

    if (currentIndex + 5 === pages[lastIndex]) {
      setChunk(pages.slice(currentIndex))
    }

    if (currentIndex + 1 === pages[lastIndex]) {
      setChunk(pages.slice(-5))
    }
    //eslint-disable-next-line
  }, [currentIndex])

  const onPreviousArrowClick = e => {
    e.preventDefault()
    if (currentIndex > firstIndex) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const onNextArrowClick = e => {
    e.preventDefault()
    if (currentIndex < lastIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const onLinkClick = (e, i) => {
    e.preventDefault()
    setCurrentIndex(i)
  }

  return (
    <Wrapper>
      <Arrow
        role="button"
        disabled={currentIndex <= firstIndex}
        tabIndex={currentIndex <= firstIndex ? "-1" : "0"}
        onClick={onPreviousArrowClick}
      >
        <FontAwesomeIcon icon="chevron-left" size="sm" />
      </Arrow>
      {chunk.map((page, i) => (
        <Link
          role="button"
          key={i}
          activeLink={currentIndex + 1 === page}
          onClick={e => onLinkClick(e, page - 1)}
        >
          {page}
        </Link>
      ))}
      <Dots hide={currentIndex + 4 >= lastIndex}>.....</Dots>
      <Link
        role="button"
        onClick={e => onLinkClick(e, lastIndex)}
        hide={currentIndex + 4 >= lastIndex}
      >
        {total}
      </Link>
      <Arrow
        role="button"
        disabled={currentIndex >= lastIndex}
        tabIndex={currentIndex >= lastIndex ? "-1" : "0"}
        onClick={onNextArrowClick}
      >
        <FontAwesomeIcon icon="chevron-right" size="sm" />
      </Arrow>
    </Wrapper>
  )
}
