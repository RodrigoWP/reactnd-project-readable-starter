'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './input.styl'

const Input = ({ label, value, onChange }) => (
  <div className={style.container}>
    <label>{label}</label>
    <input value={value} onChange={onChange} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export { Input }
