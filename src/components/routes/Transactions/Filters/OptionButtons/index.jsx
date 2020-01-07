import React, { useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink, ButtonLinkSecondary } from "components/common"
import { Wrapper, Popover, PopoverOption } from "./styles"

function OptionButtons({ toggleFilters }) {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const onClickAway = () => setPopoverOpen(false)

  const toggleRadioButtonFilters = e => {
    e.stopPropagation()
    e.preventDefault()
    toggleFilters();
  }

  const toggleStatementFormatPopover = e => {
    e.stopPropagation()
    e.preventDefault()
    setPopoverOpen(!popoverOpen)
  }

  const onPopoverOverSelection = (e) => {
    e.preventDefault()
    setPopoverOpen(false)

  }

  return (
    <Wrapper>
      <ButtonLink href="#" fontSize="0.9rem" role="button" onClick={toggleRadioButtonFilters}>
        All Filters
        <FontAwesomeIcon
          icon="sliders-h"
          size="1x"
          transform="right-4 grow-2"
        />
      </ButtonLink>
      <ClickAwayListener onClickAway={onClickAway}>
        <ButtonLinkSecondary
          href="#"
          fontSize="0.9rem"
          role="button"
          id="statements"
          aria-label="Select statement format"
          aria-haspopup="true"
          aria-expanded={popoverOpen}
          onClick={toggleStatementFormatPopover}
        >
          <FontAwesomeIcon
            icon="file-download"
            size="1x"
            transform="left-4 grow-2"
          />
          Statements
        </ButtonLinkSecondary>
        {popoverOpen && (
          <Popover
            aria-labelledby={"statements"}
            onClick={onPopoverOverSelection}
          >
            <PopoverOption
              href="#"
              data-format="csv"
              role="listitem"
              aria-label="csv statement format"
            >
              CSV
            </PopoverOption>
            <PopoverOption
              href="#"
              data-format="pdf"
              role="listitem"
              aria-label="pdf statement format"
            >
              PDF
            </PopoverOption>
          </Popover>
        )}
      </ClickAwayListener>
    </Wrapper>
  )
}

export default OptionButtons
