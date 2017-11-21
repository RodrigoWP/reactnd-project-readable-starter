'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './input.styl'

const Input = ({ name, label, value, onChange, required }) => (
  <div className={style.container}>
    <label>{label}</label>
    <input name={name} value={value} onChange={onChange} required={required} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
}

export { Input }
