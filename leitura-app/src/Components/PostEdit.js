import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Segment, Item, Button, Input, TextArea } from 'semantic-ui-react'
import { fetchGetPost } from '../Actions'

class PostEdit extends Component {
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
              <Item.Header ><Input style={{ width: '500px' }} value={post.title} />
                {/* <Item.Extra>em {Moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</Item.Extra> */}
              </Item.Header>
              <Item.Description> <TextArea style={{ width: '500px', minHeight: 100 }} value={post.body} />  </Item.Description>
              <Item.Meta>Comentários: {post.commentCount}</Item.Meta>
              <Item.Extra />
            </Item.Content>
            <Item.Content >
              <Button.Group floated='right'>
                <Button positive>Save</Button>
                <Button.Or text='-' />
                <Button negative>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
