import React, { Component } from 'react'
import { Modal, Menu } from 'semantic-ui-react'
import PostNew from './PostNew'

export default class ModalPost extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Menu.Item onClick={this.handleOpen}>Novo post</Menu.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <PostNew closeModal={this.handleClose}></PostNew>
        </Modal.Content>
      </Modal>
    )
  }
}