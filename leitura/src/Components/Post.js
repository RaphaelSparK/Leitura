import React, { Component } from 'react'
import { Item, Divider } from 'semantic-ui-react'
import Moment from 'moment'

class Post extends Component {
  render () {
    return (
      <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header as='a'>{this.props.title} <Item.Extra>em {Moment.unix(this.props.timestamp/1000).format('DD/MM/YYYY')}</Item.Extra> </Item.Header>
        <Item.Meta>{this.props.body}</Item.Meta>
        <Item.Extra>Comentários: {this.props.commentCount}</Item.Extra>
      </Item.Content>
    </Item>
    <Divider section />
      </Item.Group>

    )
  }
}

export default Post