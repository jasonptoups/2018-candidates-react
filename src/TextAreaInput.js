import React from 'react'

const TextInput = (props) => {
  return (
    <textarea className='textarea' type='text' name={props.name} value={props.value} onChange={props.handleChange} />
  )
}

export default TextInput
