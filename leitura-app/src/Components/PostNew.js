import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guid, handleInputChange } from '../Helpers/util'
import { bindActionCreators } from 'redux'
import { fetchSetPost, fetchGetPost } from '../Actions'
import { Segment, Item, Button, Input, TextArea, Dropdown } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import _ from 'lodash'

class PostNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      body: '',
      title: '',
      category: ''
    }

    this.handleInputChange = handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setNewPost = this.setNewPost.bind(this)
  }

  handleChange (e, { value }) { this.setState({ category: value }) }

  setNewPost () {
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: 1
    }

    if (_.values(newPost).some(e => e === '')) {
      Swal('Preencha todos os campos', '', 'warning')
    } else {
      this.props.fetchSetPost(newPost)
      this.setState({
        author: '',
        body: '',
        title: '',
        category: '' })

      Swal(
        'Ótimo!',
        'Postado',
        'success'
      )
      this.props.closeModal()
    }
  }

  render () {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header >Novo Post
              </Item.Header>
              <Item.Description>
                <Dropdown
                  placeholder='Selecione a categoria'
                  style={{ width: '500px' }}
                  selection
                  value={this.state.category}
                  onChange={this.handleChange}
                  options={this.props.categories.categoryList.map(c => { return {'text': c.name, 'value': c.name} })} />
              </Item.Description>
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
              <Button positive onClick={this.setNewPost}>Postar</Button>
              <Button negative onClick={this.props.closeModal}>Voltar</Button>
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
  bindActionCreators({ fetchSetPost, fetchGetPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
