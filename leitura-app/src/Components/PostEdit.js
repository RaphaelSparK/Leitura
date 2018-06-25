import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleInputChange } from '../Helpers/util'
import { Segment, Grid, Button, Input, TextArea, Label, Item } from 'semantic-ui-react'
import { fetchGetPost, fetchSetEditPost } from '../Actions'

import Swal from 'sweetalert2'
import _ from 'lodash'

class PostEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      body: '',
      title: ''
    }

    this.handleInputChange = handleInputChange.bind(this)
    this.setEditPost = this.setEditPost.bind(this)
  }

  componentDidMount () {
    const {author, body, title} = this.props.posts.postList.find(p => p.id === this.props.match.params.id)
    this.setState({author, body, title})
  }

  setEditPost () {
    const editPost = {
      id: this.props.match.params.id,
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    }

    if (_.values(editPost).some(e => e === '')) {
      Swal('Preencha todos os campos', '', 'warning')
    } else {
      this.props.fetchSetEditPost(editPost)
      this.setState({
        author: '',
        body: '',
        title: '' })

      Swal(
        'Ótimo!',
        'Post editado',
        'success'
      )
      this.props.history.goBack()
    }
  }

  render () {
    const { category } = this.props.posts.postList.find(p => p.id === this.props.match.params.id)
    return (
      <Segment>
        <Grid>
          <Grid.Column width={13}>
            <Label color={this.props.categories.colors[category]} ribbon>
              {category}
            </Label>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header >Editar Post
                  </Item.Header>
                  <Item.Description>
                    <Input
                      label='Autor'
                      placeholder='Autor'
                      name='author'
                      style={{ width: '500px' }}
                      value={this.state.author}
                      onChange={this.handleInputChange}
                    />
                  </Item.Description>
                  <Item.Description>
                    <Input
                      label='Título'
                      placeholder='Título'
                      name='title'
                      style={{ width: '500px' }}
                      value={this.state.title}
                      onChange={this.handleInputChange} />
                  </Item.Description>
                  <Item.Description>
                    <TextArea
                      name='body'
                      style={{ width: '500px', minHeight: 100 }}
                      value={this.state.body}
                      onChange={this.handleInputChange} />
                  </Item.Description>
                  <Button positive onClick={this.setEditPost}>Editar</Button>
                  <Button negative onClick={this.props.history.goBack}>Cancelar</Button>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPost, fetchSetEditPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
