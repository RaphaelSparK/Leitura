import React, { Component } from 'react'
import { Item, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'moment'

class Post extends Component {
  render () {
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as={Link} to={this.props.category + '/' + this.props.id}>{this.props.title}
              <Item.Extra>em {Moment.unix(this.props.timestamp / 1000).format('DD/MM/YYYY')}</Item.Extra>
            </Item.Header>
            <Item.Meta>Comentários: {this.props.commentCount}</Item.Meta>
            <Item.Extra />
          </Item.Content>
          <Item.Content >
            <Button.Group floated='right'>
              <Button as={Link} to={`/post/${this.props.id}/edit`}>Edit</Button>
              <Button.Or text='-' />
              <Button negative>Delete</Button>
            </Button.Group>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default Post
