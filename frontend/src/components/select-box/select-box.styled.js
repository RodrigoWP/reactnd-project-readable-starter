'use strict'

import styled from 'styled-components'

export default styled.div`
  label {
    line-height: 1.8rem;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #3b495e;
  }

  .Select-control {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: inset -1px 0 0 0 #c5d0e1, inset 0 -1px 0 0 #c5d0e1, inset 1px 0 0 0 #c5d0e1, inset 0 2px 0 0 #afcef3;
    color: #333;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: 40px;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    cursor: pointer;
    border: 1px;

    &:hover {
      box-shadow: inset -1px 0 0 0 #c5d0e1, inset 0 -1px 0 0 #c5d0e1, inset 1px 0 0 0 #c5d0e1, inset 0 2px 0 0 #2870b2;
    }
  }

  .Select-control .Select-input:focus {
    outline: none;
  }

  .is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9;
  }

  .is-focused > .Select-control {
    box-shadow: inset -1px 0 0 0 #c5d0e1, inset 0 -1px 0 0 #c5d0e1, inset 1px 0 0 0 #c5d0e1, inset 0 2px 0 0 #2870b2;
  }
`
