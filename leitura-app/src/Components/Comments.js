import React, {Component} from 'react'
import { Comment, TextArea, Input, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSetComment, fetchCommentVote, setComment, fetchDeleteComment } from '../Actions/index'
import { guid, handleInputChange } from '../Helpers/util'
import Swal from 'sweetalert2'
import Moment from 'moment'
import _ from 'lodash'
import avatar from '../avatar.png'
import UpDownVote from './UpDownVote'
import ModalComment from './ModalComment'

class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      body: ''
    }

    this.handleInputChange = handleInputChange.bind(this)
    this.setNewComment = this.setNewComment.bind(this)
  }

  setNewComment () {
    const newComment = {
      id: guid(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.post.id,
      voteScore: 1
    }

    if (_.values(newComment).some(e => e === '')) {
      Swal('Preencha todos os campos!', '', 'warning')
    } else {
      this.props.fetchSetComment(newComment)
      this.setState({
        author: '',
        body: ''
      })

      Swal(
        'Ótimo!',
        'Comentário enviado',
        'success'
      )
    }
  }

  deleteComment (id) {
    Swal({
      title: 'Excluir o comentário?',
      text: 'Você não será capaz de reverter isso!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!'
    }).then((result) => {
      if (result.value) {
        this.props.fetchDeleteComment(id)
        Swal(
          'Excluído!',
          'Seu comentário foi excluido.',
          'success'
        )
      }
    })
  }

  render () {
    const { commentsList } = this.props.comments
    return (<div>
      <Comment.Group>
        { commentsList.map(comment => (
          <Comment key={comment.id}>
            <Comment.Avatar src={avatar} />
            <Comment.Content>
              <Comment.Author>{comment.author}</Comment.Author>
              <Comment.Metadata>
                {Moment.unix(comment.timestamp / 1000).format('DD/MM/YYYY hh:mm:ss')}
              </Comment.Metadata>
              <Comment.Text>{comment.body}</Comment.Text>
              <Comment.Actions>
                <ModalComment handleSetComment={this.props.setComment} commentId={comment.id} />
                <Comment.Action onClick={() => this.deleteComment(comment.id)}>Excluir</Comment.Action>
                <Comment.Action>
                  <UpDownVote size='large' scoreSize='mini' voteScore={comment.voteScore} id={comment.id} handleVote={this.props.fetchCommentVote} />
                </Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Description>
              <Input
                name='author'
                label='Autor'
                value={this.state.author}
                onChange={this.handleInputChange}
              />
            </Item.Description>
            <Item.Description>
              <TextArea
                name='body'
                value={this.state.body}
                style={{ width: '500px', minHeight: 100 }}
                onChange={this.handleInputChange}
              />
            </Item.Description>
            <Button positive onClick={this.setNewComment}>Comentar</Button>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
    )
  }
}
const mapStateToProps = store => ({
  comments: store.comments,
  post: store.posts.post
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSetComment, fetchCommentVote, setComment, fetchDeleteComment }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
