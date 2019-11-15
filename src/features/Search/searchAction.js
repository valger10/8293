// imports api calls
import { getSearchData } from '../../Api'

export const SEARCH_DATA_START = 'SEARCH_DATA_START'
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS'
export const SEARCH_DATA_START_FAILED = 'SEARCH_DATA_START_FAILED'

export const CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA'

export const SearchDataAction = val => async dispatch => {
  dispatch({
    type: SEARCH_DATA_START,
  })
  try {
    // gets data from server
    let searchData = await getSearchData(val)
    // filters out which font start with wanted string
    searchData = searchData.results.filter(function(item) {
      if (item.name.toLowerCase().startsWith(val.toLowerCase())) {
        return item
      }
      return false
    })
    dispatch({ type: SEARCH_DATA_SUCCESS, searchData })
  } catch (error) {
    // Catches error
    return dispatch({ type: SEARCH_DATA_START_FAILED, payload: error })
  }
}
export const ClearSearchAction = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_DATA,
  })
}
