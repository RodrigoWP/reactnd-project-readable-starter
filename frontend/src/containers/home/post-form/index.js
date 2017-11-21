'use strict'

import React, { PureComponent } from 'react'
import { Modal, Input, Button, Textarea, SelectBox } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts, searchPostsByCategory } from 'redux-flow/reducers/posts/action-creators'
import { Row, Col } from 'react-flexbox-grid'
import { apiGet, apiPost, apiPut } from 'utils/api'
import { v1 as uuid } from 'uuid'

import style from './post-form.styl'

class PostForm extends PureComponent {
  state = {
    title: '',
    author: '',
    category: this.props.categorySelected || 'react',
    body: ''
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

  save = async (e) => {
    e.preventDefault()

    const { editMode, onClickClose } = this.props

    await apiPost('/posts', {
      id: uuid(),
      timestamp: new Date(),
      ...this.state
    })

    onClickClose()
    this.refreshSearch()
  }

  refreshSearch = () => {
    const { searchPosts, searchPostsByCategory, categorySelected } = this.props

    if (categorySelected) {
      searchPostsByCategory(categorySelected)
    } else {
      searchPosts()
    }
  }

  render () {
    const { editMode, formIsOpen, onClickClose } = this.props
    const { title, author, category, body } = this.state

    return (
      <Modal
        title={editMode ? 'Editar post' : 'Novo post'}
        open={formIsOpen}
        onClickClose={onClickClose}>
        <form onSubmit={this.save}>
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
              label='Salvar'
              primary
              htmlType='submit'
            />
          </div>
        </form>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts, searchPostsByCategory }, dispatch)

export default connect(null, mapDispatchToProps)(PostForm)
