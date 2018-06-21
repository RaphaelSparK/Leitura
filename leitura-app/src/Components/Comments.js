import React, {Component} from 'react'
import { Comment, TextArea, Input, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSetComment } from '../Actions/index'
import { guid, handleInputChange } from '../Helpers/util'
import Swal from 'sweetalert2'
import Moment from 'moment'
import _ from 'lodash'
import avatar from '../avatar.png'

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
      parentId: this.props.post.id
    }

    if (_.values(newComment).some(e => e === '')) {
      Swal('Complete all fields', '', 'warning')
    } else {
      this.props.fetchSetComment(newComment)
      this.setState({
        author: '',
        body: ''
      })

      Swal(
        'Good!',
        'Comment saved',
        'success'
      )
    }
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
                <Comment.Action>{comment.voteScore}</Comment.Action>
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
                label='Author'
                value={this.state.author}
                placeholder='Author'
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
            <Button positive onClick={this.setNewComment}>Save</Button>
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
  bindActionCreators({ fetchSetComment }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
