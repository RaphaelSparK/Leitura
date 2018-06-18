import React, {Component} from 'react'
import { Comment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Moment from 'moment'
import avatar from '../avatar.png'

class Comments extends Component {
  render () {
    const { commentsList } = this.props.comments
    return (<Comment.Group>
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
    )
  }
}
const mapStateToProps = store => ({
  comments: store.comments
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ fetchGetPost, fetchGetComments }, dispatch)

export default connect(mapStateToProps, undefined)(Comments)
