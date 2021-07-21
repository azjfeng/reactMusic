import React from 'react';
import '../../style/edit/edit.less'
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.saveData = this.saveData.bind(this);
    }
    componentDidMount() {
        const height = document.documentElement.offsetHeight;
        const E = window.wangEditor;
        const editor = new E(".edit1");
        editor.config.height = (height / 2);

        // 或者 const editor = new E(document.getElementById('div1'))
        editor.create();
        window.editorEle = editor;
    }
    saveData() {
        console.log(editorEle.txt.html())
        $('.saveEdit').html(editorEle.txt.html())
    }
    render() {
        return (
            <div className="edit">
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