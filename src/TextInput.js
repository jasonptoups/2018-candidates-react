import React from 'react'

const TextInput = (props) => {
  return (
    <input className='input' type='text' name={props.name} value={props.value} onChange={props.handleChange} />
  )
}

export default TextInput
