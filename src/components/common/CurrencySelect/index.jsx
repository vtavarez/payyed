import React from "react"
import { components } from "react-select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Select, CurrencyFlag, OptionValue, OptionDescription } from "./styles"
import flags from "./flags"

const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#2dbe60"
  }
})

const SingleValue = props => {
  const [data] = props.getValue()
  return (
    <components.ValueContainer {...props}>
      <CurrencyFlag src={flags[data.value]} alt={data.description} />
      <OptionValue>{data.value.toUpperCase()}</OptionValue>
    </components.ValueContainer>
  )
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon="sort" color="#212529" />
    </components.DropdownIndicator>
  )
}

const Option = props => {
  return (
    <components.Option {...props}>
      <CurrencyFlag
        src={flags[props.data.value]}
        alt={props.data.description}
      />
      <OptionValue isSelected={props.isSelected}>
        {props.data.value.toUpperCase()}
      </OptionValue>
      <OptionDescription> {props.data.description}</OptionDescription>
    </components.Option>
  )
}

export function CurrencySelect(props) {
  return (
    <Select
      {...props}
      classNamePrefix="currency-select"
      placeholder={""}
      theme={theme}
      components={{ SingleValue, DropdownIndicator, Option }}
    />
  )
}
