import React, { useEffect } from 'react'
import Search from '../../features/Search/containers'

function SearchView() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `H&M - Search heroes`
  }, [])
  return (
    <React.Fragment>
      <h1>Search heroes</h1>
      <Search />
    </React.Fragment>
  )
}
export default SearchView
