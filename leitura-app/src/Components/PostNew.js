import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guid } from '../Helpers/util'
import { bindActionCreators } from 'redux'
import { fetchSetPost } from '../Actions'
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

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleChange = (e, { value }) => this.setState({ category: value })

  setNewPost = () => {
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
    }

    if(_.values(newPost).some(e => e === '')){
      Swal('Complete all fields','','warning')
    }else{
      this.props.fetchSetPost(newPost)
      Swal(
        'Good!',
        'Post saved',
        'success'
      )
    }

  }


  render () {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header >New Post
              </Item.Header>
              <Item.Description>
                <Dropdown
                  placeholder='Select Category'
                  style={{ width: '500px' }}
                  selection
                  onChange={this.handleChange}
                  options={this.props.categories.categoryList.map(c => { return {'text': c.name, 'value': c.name} })} />
              </Item.Description>
              <Item.Description> <Input label='Author' placeholder='Zé das couves' name='author' style={{ width: '500px' }} value={this.state.author} onChange={this.handleInputChange} /> </Item.Description>
              <Item.Description> <Input label='Title' placeholder='Title' name='title' style={{ width: '500px' }} value={this.state.title} onChange={this.handleInputChange} /> </Item.Description>
              <Item.Description> <TextArea name='body' style={{ width: '500px', minHeight: 100 }} value={this.state.body} onChange={this.handleInputChange} />  </Item.Description>
              <Item.Meta />
              <Item.Extra />
              <Button positive onClick={this.setNewPost}>Save</Button>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
 })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSetPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
