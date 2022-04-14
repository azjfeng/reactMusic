/*
 * @Author: your name
 * @Date: 2021-07-21 14:22:51
 * @LastEditTime: 2022-01-11 15:59:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \AppletNewd:\reactMusic\src\components\detail\Detail.tsx
 */
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
    fetch('http://127.0.0.1:3332/common/getDetail', {
      method: "post",
      body: JSON.stringify(params) // must match 'Content-Type' header
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        that.setState({
            detail: myJson.result[0]
        })
        $('.detail').append(myJson.content);
        console.log(myJson.result);
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