import { categoriesReducer } from './categoriesReducer'
import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  comments: commentsReducer
})
