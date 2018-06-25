import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from './Post'
import { fetchGetPosts, fetchGetPostsByCategory, setCategory, setSort } from '../Actions'
import { Radio, Label, Icon } from 'semantic-ui-react'

import _ from 'lodash'

class ListPosts extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.props.match.params.category
      ? this.props.fetchGetPostsByCategory(this.props.match.params.category) : this.props.fetchGetPosts()
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category || this.props.posts.postList.length !== prevProps.posts.postList.length) {
      if (this.props.match.params.category === undefined) {
        this.props.fetchGetPosts()
      } else {
        this.props.setCategory(this.props.match.params.category)
        this.props.fetchGetPostsByCategory(this.props.match.params.category)
      }
    }
  }

  handleChange (e, { value }) { this.props.setSort(value) }

  renderPosts () {
    if (this.props.posts.postList) {
      const postsOrdenados = _.sortBy(this.props.posts.postList, this.props.posts.sort).reverse()
      return postsOrdenados.map(post => <Post key={post.id} {...post} />)
    }
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        <Label>
          <Icon name='clock outline' />
          <Radio
            label={'Mais recente '}
            name='radioGroup'
            value='timestamp'
            checked={posts.sort === 'timestamp'}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <Icon name='hotjar' />
          <Radio
            label='Mais votados '
            name='radioGroup'
            value='voteScore'
            checked={posts.sort === 'voteScore'}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <Icon name='comments outline' />
          <Radio
            label='Mais comentados '
            name='radioGroup'
            value='commentCount'
            checked={posts.sort === 'commentCount'}
            onChange={this.handleChange}
          />
        </Label>
        {this.renderPosts()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPosts, fetchGetPostsByCategory, setCategory, setSort }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
