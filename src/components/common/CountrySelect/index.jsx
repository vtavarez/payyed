import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { components } from "react-select"
import { Select } from "./styles"

const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#2dbe60"
  }
})

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon="sort" color="#212529" />
    </components.DropdownIndicator>
  )
}

export function CountrySelect(props) {
  return (
    <Select
      {...props}
      classNamePrefix="country-select"
      placeholder="Select Country"
      theme={theme}
      components={{ DropdownIndicator }}
    />
  )
}