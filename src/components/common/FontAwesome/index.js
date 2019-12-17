import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft, faTimes, faPlay, faCheck  } from "@fortawesome/free-solid-svg-icons"

export const FontAwesome = props => <FontAwesomeIcon {...props} />
export const ChevronRight = props => <FontAwesomeIcon icon={faChevronRight} {...props} />
export const ChevronLeft = props => <FontAwesomeIcon icon={faChevronLeft} {...props} />
export const X = props => <FontAwesomeIcon icon={faTimes} {...props} />
export const Play = props => <FontAwesome icon={faPlay} {...props} />
export const Check = props => <FontAwesome icon={faCheck} {...props} />