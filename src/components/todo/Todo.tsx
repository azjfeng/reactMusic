import React from 'react'
function Todo(props){
  const { value, onInputChange } = props
  console.log(value,onInputChange)
  return(
    <li
    >
      <input type="text" onChange={onInputChange}/>
      {value.count}
    </li>
  )
}


export default Todo