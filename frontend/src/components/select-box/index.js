'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import SelectBoxStyled from './select-box.styled'

const SelectBox = ({ label, onChange, options, value, placeholder }) => (
  <SelectBoxStyled>
    <label>{label}</label>
    <Select
      searchable={false}
      clearable={false}
      backspaceRemoves={false}
      autosize={false}
      autoload
      onChange={onChange}
      options={options}
      value={value}
      placeholder={placeholder}
      simpleValue
    />
  </SelectBoxStyled>
)

SelectBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string
}

export { SelectBox }
