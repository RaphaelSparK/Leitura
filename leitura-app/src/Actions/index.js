import * as API from '../Helpers/api'

import {
  GET_CATEGORIES,
  GET_POSTS,
  GET_POST,
  GET_POSTS_BY_CATEGORY,
  SET_CATEGORY
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
