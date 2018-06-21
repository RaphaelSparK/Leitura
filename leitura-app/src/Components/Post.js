import React, { Component } from 'react'
import { Item, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDeletePost, fetchPostVote } from '../Actions/index'
import UpDownVote from './UpDownVote'

class Post extends Component {
  render () {
    console.log(this.props)
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
              <Button negative onClick={() => { this.props.fetchDeletePost(this.props.id) }}>Delete</Button>
            </Button.Group>
            <UpDownVote voteScore={this.props.voteScore} id={this.props.id} handleVote={this.props.fetchPostVote} />
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchDeletePost, fetchPostVote }, dispatch)

export default connect(undefined, mapDispatchToProps)(Post)
