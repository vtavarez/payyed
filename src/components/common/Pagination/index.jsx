import React, { Fragment, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Arrow, Link, Dots } from "./styles"

export function Pagination({ currentIndex, setCurrentIndex, total }) {
  const firstIndex = 0
  const lastIndex = total - 1
  const pages = Array.from({ length: total }, (_,i) => i + 1)
  const [pagesChunk, setPagesChunk ] = useState(pages.slice(0, 3))

  if(currentIndex + 1 > pagesChunk[pagesChunk.length - 1]){
    setPagesChunk(pages.slice(currentIndex, currentIndex + 3));
  }

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

  const onLinkClick = (e,i) => {
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
      {pagesChunk.map((page, i) => (
        <Link
          role="button"
          key={i}
          activeLink={currentIndex + 1 === page}
          onClick={e => onLinkClick(e, page - 1)}
        >
          {page}
        </Link>
      ))}
      <Dots hide={currentIndex + 1 >= lastIndex}>.....</Dots>
      <Link
        role="button"
        onClick={e => onLinkClick(e,lastIndex)}
        hide={currentIndex + 1 >= lastIndex}
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
