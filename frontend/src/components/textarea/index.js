'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './textarea.styl'

const Textarea = ({ name, label, value, onChange, required }) => (
  <div className={style.container}>
    <label>{label}</label>
    <textarea name={name} value={value} onChange={onChange} required={required} />
  </div>
)

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
}

export { Textarea }
