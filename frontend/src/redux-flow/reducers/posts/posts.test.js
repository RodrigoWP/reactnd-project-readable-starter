'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import posts, { initialState } from '.'
import {
  SEARCH_POSTS,
  SEARCH_CATEGORIES,
  SEARCH_POSTS_CATEGORY,
  VOTE_UP_POST,
  VOTE_DOWN_POST,
  DELETE_POST
} from './actions'

it('should posts be a function', () => {
  expect(posts).to.be.a('function')
})

it('should search posts', () => {
  const state = {
    postsData: deepFreeze([])
  }
  const action = deepFreeze({
    type: SEARCH_POSTS,
    payload: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }]
  })

  const newState = {
    postsData: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should search posts category', () => {
  const state = {
    postsData: deepFreeze([])
  }
  const action = deepFreeze({
    type: SEARCH_POSTS_CATEGORY,
    payload: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }]
  })

  const newState = {
    postsData: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should search categories', () => {
  const state = {
    categories: deepFreeze([])
  }
  const action = deepFreeze({
    type: SEARCH_CATEGORIES,
    payload: [{
      name: 'category1',
      path: 'category1'
    }]
  })

  const newState = {
    categories: [{
      name: 'category1',
      path: 'category1'
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should vote up post', () => {
  const state = {
    postsData: deepFreeze([{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }])
  }
  const action = deepFreeze({
    type: VOTE_UP_POST,
    payload: {
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    }
  })

  const newState = {
    postsData: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should vote up post', () => {
  const state = {
    postsData: deepFreeze([{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    }])
  }
  const action = deepFreeze({
    type: VOTE_DOWN_POST,
    payload: {
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }
  })

  const newState = {
    postsData: [{
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should delete post', () => {
  const state = {
    postsData: deepFreeze([
      {
        author: 'rodrigo',
        body: 'posting',
        category: 'react',
        deleted: false,
        id: '0',
        timestamp: '2017-11-23T15:34:18.981Z',
        title: 'sobre react',
        voteScore: 2
      },
      {
        author: 'rodrigo',
        body: 'posting 2',
        category: 'redux',
        deleted: false,
        id: '1',
        timestamp: '2017-11-23T15:34:18.981Z',
        title: 'sobre react',
        voteScore: 2
      }
    ])
  }
  const action = deepFreeze({
    type: DELETE_POST,
    payload: '0'
  })

  const newState = {
    postsData: [{
      author: 'rodrigo',
      body: 'posting 2',
      category: 'redux',
      deleted: false,
      id: '1',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    }]
  }

  expect(posts(state, action)).to.be.deep.equal(newState)
})

it('should return initialState when state is undefined', () => {
  const state = undefined
  const action = deepFreeze({})
  const newState = initialState
  expect(posts(state, action)).to.be.deep.equal(newState)
})
