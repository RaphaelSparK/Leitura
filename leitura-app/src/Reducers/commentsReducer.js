import { GET_COMMENTS, GET_COMMENT, SET_COMMENT, VOTE_COMMENT, DELETE_COMMENT } from '../Actions/actionTypes'

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
    case SET_COMMENT:
      return {
        ...state,
        commentsList: [...state.commentsList, action.comment]
      }
    case VOTE_COMMENT:
      return {
        ...state,
        commentsList: state.commentsList.map(c => c.id === action.comment.id ? action.comment : c),
        comment: action.comment
      }
    case DELETE_COMMENT:
      return {
        ...state,
        commentsList: state.commentsList.filter(c => c.id !== action.id)
      }

    default:
      return state
  }
}
