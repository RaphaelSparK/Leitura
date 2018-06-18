import { GET_COMMENTS, GET_COMMENT } from '../Actions/actionTypes'

const initialState = {
  commentsList: [],
  comment: {}
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        commentsList: action.comments
      }
    case GET_COMMENT:
      return {
        ...state,
        comment: action.comment
      }
    default:
      return state
  }
}
