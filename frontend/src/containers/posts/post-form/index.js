'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Input, Button, Textarea, SelectBox, Notify } from 'components'
import { Row, Col } from 'react-flexbox-grid'
import { apiGet, apiPost, apiPut } from 'utils/api'
import { v1 as uuid } from 'uuid'

import style from './post-form.styl'

class PostForm extends PureComponent {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: ''
  }

  componentDidMount () {
    this.loadPost()
  }

  loadPost = async () => {
    const { postId } = this.props

    if (postId) {
      const post = await apiGet(`posts/${postId}`)
      this.setState({ ...post.data })
    }
  }

  onChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onChangeCategory = (category) => {
    this.setState({ category })
  }

  savePost = async (e) => {
    e.preventDefault()

    const { onClickClose, postId, handleRefresh } = this.props
    const payload = {
      ...this.state,
      timestamp: new Date()
    }

    if (postId) {
      await apiPut(`/posts/${postId}`, payload)
    } else {
      await apiPost('/posts', { id: uuid(), ...payload })
    }

    Notify.success(`Post ${postId ? 'edited' : 'saved'} with success`)
    onClickClose()
    handleRefresh(this.state.category)
  }

  render () {
    const { onClickClose, postId } = this.props
    const { title, author, category, body } = this.state
    const editMode = !!postId

    return (
      <Modal
        title={editMode ? 'Edit post' : 'New post'}
        open
        onClickClose={onClickClose}>
        <form onSubmit={this.savePost}>
          <Row>
            <Col xs>
              <Input
                name='title'
                label='title'
                onChange={this.onChange}
                value={title}
                required
              />
            </Col>
            <Col xs>
              <Input
                name='author'
                label='author'
                onChange={this.onChange}
                value={author}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <SelectBox
                label='Category'
                required
                placeholder='Select a category'
                options={[
                  { value: 'react', label: 'react' },
                  { value: 'redux', label: 'redux' },
                  { value: 'udacity', label: 'udacity' }
                ]}
                onChange={this.onChangeCategory}
                value={category}
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Textarea
                name='body'
                required
                label='posting'
                value={body}
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <div className={style.footer}>
            <Button
              label={editMode ? 'Update post' : 'Save'}
              primary
              htmlType='submit'
            />
          </div>
        </form>
      </Modal>
    )
  }
}

PostForm.propTypes = {
  postId: PropTypes.string,
  onClickClose: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired
}

export default PostForm
