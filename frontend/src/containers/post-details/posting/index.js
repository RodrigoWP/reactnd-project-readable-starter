import React from 'react'
import PropTypes from 'prop-types'

import style from './posting.styl'

const Posting = ({ posting }) => (
  <div className={style.container}>
    {<span>{posting}</span>}
  </div>
)

Posting.propTypes = {
  posting: PropTypes.string
}

export default Posting
