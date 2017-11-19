'use strict'

import React from 'react'

import style from './empty-message.styl'

const EmptyMessage = () => (
  <div className={style.container}>
    <span>
      Nenhuma postagem nessa categoria :(
    </span>
  </div>
)

export default EmptyMessage
