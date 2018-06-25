import * as API from '../Helpers/api'

import {
  GET_CATEGORIES,
  GET_POSTS,
  GET_POST,
  GET_POSTS_BY_CATEGORY,
  SET_CATEGORY,
  GET_COMMENTS,
  GET_COMMENT,
  SET_POST,
  DELETE_POST,
  SET_COMMENT,
  VOTE_POST,
  VOTE_COMMENT,
  DELETE_COMMENT,
  SET_ORDER,
  EDIT_POST,
  EDIT_COMMENT
} from '../Actions/actionTypes'

// CATEGORIES

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

// POSTS

export function setSort (sort) {
  return {
    type: SET_ORDER,
    sort
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

export function setEditPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function fetchSetEditPost (post) {
  return (dispatch) => {
    API.editPost(post).then(response =>
      dispatch(setEditPost(post, response)))
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

// COMMENTS

export function setComment (id) {
  return {
    type: GET_COMMENT,
    id
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

export function setEditComment (comment, newComment) {
  return {
    type: EDIT_COMMENT,
    comment,
    newComment
  }
}

export function fetchSetEditComment (comment) {
  return (dispatch) => {
    API.editComment(comment).then(response => dispatch(setEditComment(comment, response)))
  }
}

export function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function fetchDeleteComment (id) {
  return (dispatch) => {
    API.deleteComment(id).then(response => dispatch(deleteComment(id, response)))
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

export function SetCommentVote (comment) {
  return {
    type: VOTE_COMMENT,
    comment
  }
}

export function fetchCommentVote (id, option) {
  return (dispatch) => {
    API.voteComment(id, option).then(response => dispatch(SetCommentVote(response)))
  }
}
