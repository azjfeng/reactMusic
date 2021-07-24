import React from 'react'
import '../../style/md.less'
import '../../style/detail/detail.less'
import '../../lib/jquery'
class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        detail:''
    }
  }
  componentDidMount(){
    this.searchDetail({title: this.props.match.params.title})
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
            detail: myJson.data
        })
        $('.detail').html(myJson.content);
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