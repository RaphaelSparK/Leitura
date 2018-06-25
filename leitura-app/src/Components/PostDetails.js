import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Segment, Grid, Button, Label, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { fetchGetPost, fetchGetComments, fetchPostVote, fetchDeletePost } from '../Actions'
import Moment from 'moment'
import Comments from './Comments'
import UpDownVote from './UpDownVote'
import Swal from 'sweetalert2'
class PostDetails extends Component {
  componentDidMount () {
    this.props.fetchGetPost(this.props.match.params.id)
    this.props.fetchGetComments(this.props.match.params.id)
  }

  componentDidUpdate (prevProps) {
    Object.keys(this.props.posts.post).length === 0 && this.props.posts.post.constructor === Object && this.props.history.push('/404')
  }

  deletePost (id) {
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
        this.props.fetchDeletePost(id)

        Swal(
          'Excluído!',
          'Seu post foi excluido.',
          'success'
        )
        this.props.history.push('/')
      }
    })
  }

  render () {
    const { post } = this.props.posts
    if (post === undefined) this.props.history.push('/404')
    return (
      post && (
        <Segment>
          <Grid>
            <Grid.Column width={13}>
              <Label as={Link} to={'/' + post.category} color={this.props.categories.colors[post.category]} ribbon>
                {post.category}
              </Label>
              <h2>{post.title}</h2>
              <label>Autor: <b>{post.author}</b>, em {Moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</label> <br />
              <h3>{post.body}</h3>
              <br />
              <UpDownVote size='big' voteScore={post.voteScore} id={post.id} handleVote={this.props.fetchPostVote} />
              <Divider horizontal>Comentários: {this.props.comments.commentsList.length}</Divider>
            </Grid.Column>
            <Grid.Column width={3}>
              <Grid.Row>
                <Button floated='right' negative size='mini' onClick={() => { this.deletePost(post.id) }}>Excluir</Button>
                <Button floated='right' size='mini' as={Link} to={`/post/${post.id}/edit`}>Editar</Button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Comments />
        </Segment>
      )
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts,
  comments: store.comments
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPost, fetchGetComments, fetchPostVote, fetchDeletePost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
