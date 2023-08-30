import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { components } from "react-select"
import { Select } from "./styles"
import options from "./options"

const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#2dbe60"
  }
})

export function CountrySelect(props) {

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon="sort" color="#212529" />
      </components.DropdownIndicator>
    )
  }
  
  return (
    <Select
      {...props}
      defaultValue={options[0]}
      options={options}
      classNamePrefix="country-select"
      placeholder="Select Country"
      theme={theme}
      components={{ DropdownIndicator }}
    />
  )
}