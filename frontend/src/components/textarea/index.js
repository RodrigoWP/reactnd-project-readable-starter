'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './textarea.styl'

const Textarea = ({ label, value, onChange }) => (
  <div className={style.container}>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} />
  </div>
)

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export { Textarea }
