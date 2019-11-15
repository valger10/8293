import { connect } from 'react-redux'
import Search from '../components'
import { SearchDataAction, ClearSearchAction } from '../searchAction'

// gets data from Store
const mapStateToProps = state => ({
  searchData: state.SearchReducer.searchData,
  loadingData: state.SearchReducer.showLoading,
})
// connects functions
export default connect(mapStateToProps, {
  SearchDataAction,
  ClearSearchAction,
})(Search)
