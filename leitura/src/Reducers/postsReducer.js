import { GET_POSTS, GET_POSTS_BY_CATEGORY } from '../Actions/actionTypes'

const initialState = {
  postList: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postList: action.posts
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
