import React from 'react'
// function Todo(props){
//   const { value, onInputChange } = props
//   return(
//     <li
//     >
//       <input type="text" onChange={onInputChange}/>
//       {value.count}
//     </li>
//   )
// }


class Todo extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <li
      >
        <input type="text" onChange={this.props.onInputChange}/>
        {this.props.value.count}
      </li>
    )
  }
}

export default Todo