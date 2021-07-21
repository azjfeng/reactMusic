import React from 'react'

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