import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Segment, Item, Button, Input, TextArea, Dropdown } from 'semantic-ui-react'


class PostNew extends Component {
  state = {
    id: Date.now(),
    timestamp: Date.now(),
    author: '',
    body: '',
    title: '',
    category: ''
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
                options={this.props.categories.categoryList.map(c => {return {'text': c.name,'value': c.name}})} />
              </Item.Description>
              <Item.Description> <Input name="title" style={{ width: '500px' }} value={this.state.title} /> </Item.Description>
              <Item.Description> <TextArea name="body" style={{ width: '500px', minHeight: 100 }} value={this.state.body} />  </Item.Description>
              <Item.Meta></Item.Meta>
              <Item.Extra />
                <Button positive>Save</Button>
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

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ fetchGetPost }, dispatch)

export default connect(mapStateToProps, undefined)(PostNew)
