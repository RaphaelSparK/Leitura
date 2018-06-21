import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Segment, Item, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { fetchGetPost, fetchGetComments, fetchPostVote } from '../Actions'
import Moment from 'moment'
import Comments from './Comments'
import UpDownVote from './UpDownVote'

class PostDetails extends Component {
  componentDidMount () {
    this.props.fetchGetPost(this.props.match.params.id)
    this.props.fetchGetComments(this.props.match.params.id)
  }

  render () {
    const { post } = this.props.posts
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header >{post.title}
                <Item.Extra>em {Moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</Item.Extra>
              </Item.Header>
              <Item.Description> {post.body} </Item.Description>
              <UpDownVote voteScore={post.voteScore} id={post.id} handleVote={this.props.fetchPostVote} />
              <Item.Meta>Comentários: {post.commentCount}</Item.Meta>
            </Item.Content>
            <Item.Content >
              <Button.Group floated='right'>
                <Button as={Link} to={`/post/${post.id}/edit`}>Edit</Button>
                <Button.Or text='-' />
                <Button negative>Delete</Button>
              </Button.Group>

            </Item.Content>
          </Item>
        </Item.Group>
        <Comments />

      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts,
  comments: store.comments
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPost, fetchGetComments, fetchPostVote }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
