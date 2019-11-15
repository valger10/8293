import React, { useEffect } from 'react'
import CssTricks from '../../features/CssTricks'

function CssTricksView() {
  // react hooks. Same as component did mount
  useEffect(() => {
    document.title = `H&M - CSS tricks`
  }, [])
  return (
    <React.Fragment>
      <h1>CSS tricks</h1>
      <div className="cssTricksWpr">
        <CssTricks />
      </div>
    </React.Fragment>
  )
}
export default CssTricksView
