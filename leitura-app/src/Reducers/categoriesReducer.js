import { GET_CATEGORIES, SET_CATEGORY } from '../Actions/actionTypes'

const initialState = {
  categoryList: [],
  category: 'all'
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categoryList: action.categories
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    default:
      return state
  }
}
