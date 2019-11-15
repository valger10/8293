import {
  SEARCH_DATA_START,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_START_FAILED,
  CLEAR_SEARCH_DATA,
} from './searchAction'

const initialState = {
  showLoading: false,
  searchData: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_START:
      return {
        ...state,
        showLoading: true,
      }
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchData: action.searchData,
        showLoading: false,
      }
    case SEARCH_DATA_START_FAILED:
      return {
        ...state,
        showLoading: false,
      }
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchData: false,
        showLoading: false,
      }
    default:
      return state
  }
}
