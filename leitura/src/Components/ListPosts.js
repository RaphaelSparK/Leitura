import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from './Post'
import { Segment } from 'semantic-ui-react'
import { fetchGetPosts, fetchGetPostsByCategory, setCategory } from '../Actions'

class ListPosts extends Component {

  componentDidMount () {


  }

  componentDidUpdate(prevProps) {
    if( this.props.match.params.category !== prevProps.match.params.category ) {

      if( this.props.match.params.category === undefined ){
         this.props.fetchGetPosts()  
        } else {
          this.props.setCategory(this.props.match.params.category) 
          this.props.fetchGetPostsByCategory(this.props.match.params.category)
        } 

      

        }
  }
  render () {
    const { posts } = this.props
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Segment>
          { posts.postList.map(post => (<Post key={post.id} {...post} /> ))}
       </Segment>

      </div>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
  posts: store.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPosts, fetchGetPostsByCategory, setCategory }, dispatch);

export default  connect(mapStateToProps, mapDispatchToProps)(ListPosts);