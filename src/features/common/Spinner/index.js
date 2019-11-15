import React from 'react'

const Spinner = () => {
  return (
    <React.Fragment>
      <h2 className="spinnerHeader">Loading data...</h2>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </React.Fragment>
  )
}

export default Spinner
