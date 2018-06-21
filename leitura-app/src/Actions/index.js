import * as API from '../Helpers/api'

import {
  GET_CATEGORIES,
  GET_POSTS,
  GET_POST,
  GET_POSTS_BY_CATEGORY,
  SET_CATEGORY,
  GET_COMMENTS,
  SET_POST,
  DELETE_POST,
  SET_COMMENT,
  VOTE_POST
} from '../Actions/actionTypes'

export function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function fetchGetCategories () {
  return (dispatch) => {
    API.getCategories().then(
      (response) => dispatch(getCategories(response))
    )
  }
}

export function setCategory (category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export function getPosts (posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function fetchGetPosts () {
  return (dispatch) => {
    API.getPosts().then(
      (response) => dispatch(getPosts(response))
    )
  }
}

export function getPostsByCategory (category, posts) {
  return {
    type: GET_POSTS_BY_CATEGORY,
    category,
    posts
  }
}

export function fetchGetPostsByCategory (category) {
  return (dispatch) => {
    API.getPostsByCategory(category).then(
      (response) => dispatch(getPostsByCategory(category, response))
    )
  }
}

export function getPost (id, post) {
  return {
    type: GET_POST,
    post
  }
}

export function fetchGetPost (id) {
  return (dispatch) => {
    API.getPost(id).then(
      (response) => dispatch(getPost(id, response))
    )
  }
}

export function getComments (id, comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function fetchGetComments (id) {
  return (dispatch) => {
    API.getComments(id).then(response => dispatch(getComments(id, response)))
  }
}

export function setPost (post) {
  return {
    type: SET_POST,
    post
  }
}

export function fetchSetPost (post) {
  return (dispatch) => {
    API.createPost(post).then(response => dispatch(setPost(post, response)))
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function fetchDeletePost (id) {
  return (dispatch) => {
    API.deletePost(id).then(response => dispatch(deletePost(id, response)))
  }
}

export function SetComment (comment) {
  return {
    type: SET_COMMENT,
    comment
  }
}

export function fetchSetComment (comment) {
  return (dispatch) => {
    API.createComment(comment).then(response => dispatch(SetComment(comment, response)))
  }
}

export function SetPostVote (post) {
  return {
    type: VOTE_POST,
    post
  }
}

export function fetchPostVote (id, option) {
  return (dispatch) => {
    API.votePost(id, option).then(response => dispatch(SetPostVote(response)))
  }
}
