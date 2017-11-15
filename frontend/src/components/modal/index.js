'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'

import icnClose from 'icons/modal-close.svg'

import style from './modal.styl'

const Modal = ({ open, title, children, onClickClose }) => (
  <div className={css({ [style.open]: open }, style.container)}>
    <div className={style.background} />
    <div className={style.wrapper}>
      <div className={style.body}>
        <div className={style.close} onClick={onClickClose}>
          <img src={icnClose} />
        </div>
        <div className={style.header}>
          <span>{title}</span>
        </div>
        <div className={style.content}>
          {children}
        </div>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  onClickClose: PropTypes.func
}

export { Modal }
