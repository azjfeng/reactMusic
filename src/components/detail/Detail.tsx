import React from 'react'
import '../../style/md.less'
import '../../style/detail/detail.less'
import '../../lib/jquery'
import {
  Link
} from 'react-router-dom'
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
            detail: myJson.data.result[0]
        })
        $('.detail').append(myJson.content);
        console.log(myJson.data.result);
      });
  }
  render(){
    const data = this.state.detail
    // console.log(data)
    return (
     <div className="detail markdown-body">
       <div className="title">
        <h2>{data.title}</h2>
        <Link to={'/reedit/'+data.title}>编辑</Link>
       </div>
        <div className="time">
          <span>{new Date(data.create_time).toLocaleString()}</span>
          <span className="watch_num"><img src="../../assets/icon/see.png" alt="" />{data.watch_num}</span>
        </div>
     </div>
    )
  }
}

export default Todo