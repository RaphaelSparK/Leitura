import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Segment, Item, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { fetchGetPost } from '../Actions'
import Moment from 'moment'

class PostDetails extends Component {
  componentDidMount () {
    this.props.fetchGetPost(this.props.match.params.id)
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
              <Item.Meta>Comentários: {post.commentCount}</Item.Meta>
              <Item.Extra />
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
      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
