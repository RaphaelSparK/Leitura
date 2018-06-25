import React, { Component } from 'react'
import { Label, Button, Grid, Divider, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDeletePost, fetchPostVote } from '../Actions/index'
import UpDownVote from './UpDownVote'
import Swal from 'sweetalert2'

class Post extends Component {
  deletePost () {
    Swal({
      title: 'Excluir o post?',
      text: 'Você não será capaz de reverter isso!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!'
    }).then((result) => {
      if (result.value) {
        this.props.fetchDeletePost(this.props.id)
        Swal(
          'Excluído!',
          'Seu post foi excluido.',
          'success'
        )
      }
    })
  }
  render () {
    return (
      <Segment color={this.props.categories.colors[this.props.category]}>
        <Grid>
          <Grid.Column width={13}>
            <Label as={Link} to={`/${this.props.category}/`} color={this.props.categories.colors[this.props.category]} ribbon>
              {this.props.category}
            </Label>
            <h2><Link to={`/${this.props.category}/${this.props.id}/`}>{this.props.title}</Link></h2>
            <label>Autor: <b>{this.props.author}</b>, em {Moment.unix(this.props.timestamp / 1000).format('DD/MM/YYYY')}</label> <br /><br /><br />
            <UpDownVote size='big' voteScore={this.props.voteScore} id={this.props.id} handleVote={this.props.fetchPostVote} />
            <Divider horizontal>Comentários: {this.props.commentCount}</Divider>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row>
              <Button floated='right' negative size='mini' onClick={this.deletePost}>Excluir</Button>
              <Button floated='right' size='mini' as={Link} to={`/post/${this.props.id}/edit`}>Editar</Button>
            </Grid.Row>
            <Grid.Row />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchDeletePost, fetchPostVote }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
