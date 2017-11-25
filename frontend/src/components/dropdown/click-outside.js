'use strict'

import React, { Component } from 'react'

class ClickOutside extends Component {
  componentDidMount () {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    const { onClickOutside } = this.props

    if (!this.container.contains(e.target)) {
      onClickOutside()
    }
  }

  render () {
    const { children, ...props } = this.props

    return (
      <div {...props} ref={node => { this.container = node }}>
        {children}
      </div>
    )
  }
}

export default ClickOutside
