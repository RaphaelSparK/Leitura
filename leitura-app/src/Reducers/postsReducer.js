import { GET_POSTS, GET_POSTS_BY_CATEGORY, GET_POST, SET_POST } from '../Actions/actionTypes'

const initialState = {
  postList: [],
  post: {}
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postList: action.posts
      }
    case SET_POST:
      return {
        ...state,
        postList: action.post
      }
    case GET_POST:
      return {
        ...state,
        post: action.post
      }
    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        postList: action.posts
      }
    default:
      return state
  }
}
