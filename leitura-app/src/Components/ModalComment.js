import React, { Component } from 'react'
import { Modal, Segment,Comment } from 'semantic-ui-react'
import CommentEdit from './CommentEdit'


export default class ModalComment extends Component {
  state = { modalOpen: false }

  handleOpen = () => {
    console.log('id', this.props.commentId)
    this.props.handleSetComment(this.props.commentId)
    this.setState({ modalOpen: true })
  }

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Comment.Action onClick={this.handleOpen} >Editar</Comment.Action>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
        style={{ width: '570px' }}
      >
        <Modal.Content>
          <Segment>
          <Comment.Group minimal>
          <CommentEdit  closeModal={this.handleClose}></CommentEdit>
          </Comment.Group>
          </Segment>
        </Modal.Content>
      </Modal>
    )
  }
}