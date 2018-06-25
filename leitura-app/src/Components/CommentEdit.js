import React, { Component } from 'react'
import { Comment, TextArea, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSetEditComment } from '../Actions/index'
import { handleInputChange } from '../Helpers/util'
import Swal from 'sweetalert2'
import Moment from 'moment'
import _ from 'lodash'
import avatar from '../avatar.png'

class CommentEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: this.props.comments.comment.body
    }

    this.handleInputChange = handleInputChange.bind(this)
    this.setEditComment = this.setEditComment.bind(this)
  }

  setEditComment () {
    const editComment = {
      id: this.props.comments.comment.id,
      timestamp: Date.now(),
      body: this.state.body
    }

    if (_.values(editComment).some(e => e === '')) {
      Swal('Preencha todos os campos!', '', 'warning')
    } else {
      this.props.fetchSetEditComment(editComment)
      this.setState({
        body: ''
      })

      Swal(
        'Ótimo!',
        'Comentário editado',
        'success'
      )
      this.props.closeModal()
    }
  }

  render () {
    const { comment } = this.props.comments
    console.log(this.props)
    return (
      <div>
        <Comment>
          <Comment.Avatar src={avatar} />
          <Comment.Content>
            <Comment.Author >{comment.author}</Comment.Author>
            <Comment.Metadata>
              <span>{Moment.unix(comment.timestamp / 1000).format('DD/MM/YYYY hh:mm:ss')}</span>
            </Comment.Metadata>
            <Comment.Text>
              <TextArea
                name='body'
                value={this.state.body}
                style={{ width: '400px', minHeight: 100 }}
                onChange={this.handleInputChange}
              />
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Button positive onClick={this.setEditComment}>Comentar</Button>
              <Button negative onClick={this.props.closeModal}>Voltar</Button>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  comments: store.comments
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSetEditComment }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)
