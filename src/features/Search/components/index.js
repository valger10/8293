import React from 'react'
import _ from 'lodash'
import moment from 'moment'

import RemoveIcon from '../../common/svg/RemoveIcon'
import Spinner from '../../common/Spinner'

class Search extends React.Component {
  //configures component
  constructor(props) {
    super(props)
    this.state = {
      fieldValue: '',
      isListOpen: false,
      HistoryArray: [],
    }
    // makes app to wait 200ms before starts search.
    // Will start await on every typed letter
    this.startDebouncedSearch = _.debounce(() => {
      const { fieldValue } = this.state
      this.startSearch(fieldValue)
    }, 200)
  }
  // Add one item to history
  addToHistory(val) {
    const { HistoryArray } = this.state
    const array = HistoryArray
    array.push({ item: val, time: Date.now() })
    this.setState({
      HistoryArray: array,
    })
  }
  // Removes one from history
  removeOne(i) {
    const { HistoryArray } = this.state
    const array = HistoryArray
    array.splice(i)
    this.setState({
      HistoryArray: array,
    })
  }
  // removes everyting from history
  removeWholeHistory() {
    this.setState({
      HistoryArray: [],
    })
  }
  // checks is results open
  isOpenFunc(val) {
    this.setState({
      isListOpen: val,
    })
  }
  // starts search
  startSearch(searchTerm) {
    const { SearchDataAction } = this.props
    if (searchTerm.length > 0) {
      SearchDataAction(searchTerm)
    }
  }
  // closes result div if clicked outside
  handleClickOutside = () => {
    this.setState({
      isListOpen: false,
    })
  }
  // Handles value change
  handleValueChange(val) {
    this.isOpenFunc(true)
    this.setState({
      fieldValue: val,
    })
    this.startDebouncedSearch()
  }
  // Clears field data
  RemoveFieldData() {
    const { ClearSearchAction } = this.props
    ClearSearchAction()
    this.setState({
      isListOpen: false,
      fieldValue: '',
    })
  }
  // Capitalizes first letter
  capitalize = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  render() {
    // destructive variables
    const { searchData, loadingData } = this.props
    const { fieldValue, isListOpen, HistoryArray } = this.state
    return (
      <div className="autocomplete">
        <div className="inputWrapper">
          <label htmlFor="searchField">Search heroes</label>
          <input
            type="text"
            value={fieldValue}
            id="searchField"
            onChange={e => this.handleValueChange(e.target.value)}
          />
          <button
            className="clearField"
            type="button"
            onClick={() => this.RemoveFieldData(fieldValue)}
          >
            <span>Clear field</span>
            <RemoveIcon />
          </button>
        </div>
        {(isListOpen || loadingData) && (
          <div
            className={
              searchData && searchData.length > 5
                ? 'results longList'
                : 'results'
            }
          >
            {loadingData && (
              <div className="spinnerWpr">
                <Spinner />
              </div>
            )}
            {isListOpen && !loadingData && (
              <ul>
                {searchData &&
                  searchData.map(val => {
                    const content = val.name.replace(
                      this.capitalize(fieldValue),
                      '<strong>' + this.capitalize(fieldValue) + '</strong>'
                    )
                    return (
                      <li key={val.created}>
                        <a
                          href={val.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            this.addToHistory(val)
                          }}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: content,
                            }}
                          />
                        </a>
                      </li>
                    )
                  })}
              </ul>
            )}
          </div>
        )}
        <div className="savedData">
          <div className="titleWpr">
            <h2>Search History</h2>
            <button
              className="removeButton"
              onClick={() => {
                this.removeWholeHistory()
              }}
            >
              Clear search history
            </button>
          </div>
          <ul>
            {HistoryArray &&
              HistoryArray.map((val, i) => (
                <li key={val.time}>
                  <a
                    href={val.item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.item.name}
                  </a>
                  <div className="rightWpr">
                    <span>{moment(val.time).format('DD.MM.YYYY HH:mm')}</span>
                    <button
                      className="removeButton"
                      onClick={() => {
                        this.removeOne(i)
                      }}
                    >
                      <span>Remove one from history</span>
                      <RemoveIcon />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Search
