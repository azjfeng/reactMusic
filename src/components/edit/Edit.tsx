/*
 * @Author: your name
 * @Date: 2021-07-17 16:35:53
 * @LastEditTime: 2022-01-11 15:59:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \AppletNewd:\reactMusic\src\components\edit\Edit.tsx
 */
import React from 'react';
import '../../style/edit/edit.less'
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.saveData = this.saveData.bind(this);
        this.autherChange = this.autherChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.state = {
            title:'',
            auther:'',
            desc:''
        }
    }
    componentDidMount() {
        console.log(this.props.match)
        const height = document.documentElement.offsetHeight;
        const E = window.wangEditor;
        const editor = new E(".edit1");
        editor.config.height = (height / 2);

        // 或者 const editor = new E(document.getElementById('div1'))
        editor.create();
        window.editorEle = editor;
    }
    saveData() {
        console.log(this.state);
        $('.saveEdit').html(editorEle.txt.html());

        this.addTechnologyShare({
            title:this.state.title,
            auther:this.state.auther,
            desc:this.state.desc,
            content:editorEle.txt.html()
        });
    }
    autherChange(e){
        this.setState({
            auther:e.target.value
        })
    }
    titleChange(e){
        this.setState({
            title:e.target.value
        })
    }
    descChange(e){
        this.setState({
            desc:e.target.value
        })
    }
    /**
     * 添加分享数据
     */
    addTechnologyShare(params) {
        fetch('http://127.0.0.1:3332/common/addTechnologyShare', {
            method: "post",
            body: JSON.stringify(params) // must match 'Content-Type' header
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {

                console.log(myJson);
            });
    }
    render() {
        return (
            <div className="edit">
                <div className="form">
                    <label className="edit_label" htmlFor="">作者:<input onChange={this.autherChange} className="edit_input" type="text" placeholder="auther(作者)" /></label>
                    <label className="edit_label" htmlFor="">标题:<input onChange={this.titleChange} className="edit_input" type="text" placeholder="auther(标题)" /></label>
                    <label className="edit_label" htmlFor="">简介:<input onChange={this.descChange} className="edit_input" type="text" placeholder="auther(简介)" /></label>
                </div>
                <div className="content">
                    <div className="edit1" >

                    </div>
                    <div className="saveEdit markdown-body">

                    </div>
                </div>
                <div className="btn_list">
                    <button className="cancel">取消</button>
                    <button className="submit" onClick={this.saveData}>保存</button>
                </div>
            </div>
        )
    }
}

export default Edit;