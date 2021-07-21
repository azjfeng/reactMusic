import React from 'react'
import '../../style/md.less'
import '../../style/detail/detail.less'
class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        detail:''
    }
  }
  componentDidMount(){
    this.searchDetail({id: this.props.match.params.id})
  }
  searchDetail(params){
    const that = this;
    fetch('/getDetail', {
      method: "post",
      body: JSON.stringify(params) // must match 'Content-Type' header
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        that.setState({
            detail: myJson
        })
        $('.detail').html(myJson[0].content);
        console.log(that.state.detail);
      });
  }
  render(){
    return (
     <div className="detail markdown-body">

     </div>
    )
  }
}

export default Todo