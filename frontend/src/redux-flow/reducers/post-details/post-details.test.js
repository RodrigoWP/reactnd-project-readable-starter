'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import postDetails, { initialState } from '.'
import {
  SEARCH_POST,
  PUBLISH_NEW_COMMENT,
  SEARCH_COMMENTS,
  PUBLISH_EDIT_COMMENT,
  VOTE_UP_COMMENT,
  VOTE_DOWN_COMMENT,
  DELETE_COMMENT,
  VOTE_UP_POST_DETAIL,
  VOTE_DOWN_POST_DETAIL
} from './actions'

it('should postDetails be a function', () => {
  expect(postDetails).to.be.a('function')
})

it('should search post', () => {
  const state = {
    post: deepFreeze({})
  }
  const action = deepFreeze({
    type: SEARCH_POST,
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
    post: {
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should vote up post', () => {
  const state = {
    post: deepFreeze({
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    })
  }
  const action = deepFreeze({
    type: VOTE_UP_POST_DETAIL,
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
    post: {
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    }
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should vote down post', () => {
  const state = {
    post: deepFreeze({
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 2
    })
  }
  const action = deepFreeze({
    type: VOTE_DOWN_POST_DETAIL,
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
    post: {
      author: 'rodrigo',
      body: 'posting',
      category: 'react',
      deleted: false,
      id: '0',
      timestamp: '2017-11-23T15:34:18.981Z',
      title: 'sobre react',
      voteScore: 1
    }
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should search comments', () => {
  const state = {
    comments: deepFreeze([])
  }

  const action = deepFreeze({
    type: SEARCH_COMMENTS,
    payload: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    },
    {
      id: '1',
      timestamp: '2017-11-21T15:34:25.595Z',
      body: 'Hello comment 2',
      author: 'wippel',
      parentId: '1',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }]
  })

  const newState = {
    comments: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    },
    {
      id: '1',
      timestamp: '2017-11-21T15:34:25.595Z',
      body: 'Hello comment 2',
      author: 'wippel',
      parentId: '1',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should publish a new comment', () => {
  const state = {
    comments: deepFreeze([])
  }

  const action = deepFreeze({
    type: PUBLISH_NEW_COMMENT,
    payload: {
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }
  })

  const newState = {
    comments: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should publish a edit comment', () => {
  const state = {
    comments: deepFreeze([
      {
        id: '0',
        timestamp: '2017-11-23T15:34:25.595Z',
        body: 'Hello comment',
        author: 'rodrigo',
        parentId: '0',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ])
  }

  const action = deepFreeze({
    type: PUBLISH_EDIT_COMMENT,
    payload: {
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment edited',
      author: 'rodrigo novo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }
  })

  const newState = {
    comments: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment edited',
      author: 'rodrigo novo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should vote up comment', () => {
  const state = {
    comments: deepFreeze([
      {
        id: '0',
        timestamp: '2017-11-23T15:34:25.595Z',
        body: 'Hello comment',
        author: 'rodrigo',
        parentId: '0',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ])
  }

  const action = deepFreeze({
    type: VOTE_UP_COMMENT,
    payload: {
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 2,
      deleted: false,
      parentDeleted: false
    }
  })

  const newState = {
    comments: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 2,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should vote down comment', () => {
  const state = {
    comments: deepFreeze([
      {
        id: '0',
        timestamp: '2017-11-23T15:34:25.595Z',
        body: 'Hello comment',
        author: 'rodrigo',
        parentId: '0',
        voteScore: 2,
        deleted: false,
        parentDeleted: false
      }
    ])
  }

  const action = deepFreeze({
    type: VOTE_DOWN_COMMENT,
    payload: {
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }
  })

  const newState = {
    comments: [{
      id: '0',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should delete comment', () => {
  const state = {
    comments: deepFreeze([
      {
        id: '1',
        timestamp: '2017-11-23T15:34:25.595Z',
        body: 'Hello comment 1',
        author: 'rodrigo',
        parentId: '0',
        voteScore: 2,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '2',
        timestamp: '2017-11-23T15:34:25.595Z',
        body: 'Hello comment 2',
        author: 'rodrigo',
        parentId: '0',
        voteScore: 2,
        deleted: false,
        parentDeleted: false
      }
    ])
  }

  const action = deepFreeze({
    type: DELETE_COMMENT,
    payload: '2'
  })

  const newState = {
    comments: [{
      id: '1',
      timestamp: '2017-11-23T15:34:25.595Z',
      body: 'Hello comment 1',
      author: 'rodrigo',
      parentId: '0',
      voteScore: 2,
      deleted: false,
      parentDeleted: false
    }]
  }

  expect(postDetails(state, action)).to.be.deep.equal(newState)
})

it('should return initialState when state is undefined', () => {
  const state = undefined
  const action = deepFreeze({})
  const newState = initialState
  expect(postDetails(state, action)).to.be.deep.equal(newState)
})
