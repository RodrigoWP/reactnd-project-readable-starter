import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

import upArrowIcon from 'icons/up-arrow.svg'
import upDownIcon from 'icons/down-arrow.svg'

import style from './vote-score.styl'

const VoteScore = ({ count = 0, onClickUp, onClickDown }) => (
  <div className={style.container}>
    <Button
      icon={upDownIcon}
      width='30px'
      height='30px'
      iconSize='14px'
      onClick={onClickDown}
    />
    <span>
      {count}
    </span>
    <Button
      icon={upArrowIcon}
      width='30px'
      height='30px'
      iconSize='14px'
      onClick={onClickUp}
    />
  </div>
)

VoteScore.propTypes = {
  count: PropTypes.number,
  onClickUp: PropTypes.func,
  onClickDown: PropTypes.func
}

export { VoteScore }
