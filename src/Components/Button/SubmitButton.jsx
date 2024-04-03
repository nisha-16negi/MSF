import React from 'react'

const SubmitButton = (props) => {
  return (
    <button className="submit-btn" onClick={props.onSubmit}>
      Submit
    </button>
  )
}

export default SubmitButton