import React from 'react'
import '../../style/header/header.less'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Header extends React.Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                { id: 1, value: "博客首页" },
                { id: 2, value: "技术分享" },
                { id: 3, value: "程序人生" },
                { id: 4, value: "博客推荐" },
                { id: 5, value: "关于我" },
                { id: 6, value: "留言" },
                { id: 7, value: "个人博客模板" },
            ]
        }
    }
    render() {
        return (
            <Router>
                <div className="header">
                    <div className="header_nav">
                        <div className="author">
                            <span>jameinfeng</span>
                        </div>
                        <div className="nav_btn">
                            <ul>
                                {
                                    this.state.navList.map((item, key) => {
                                        return <li><Link to="/home/todo" key={item.key}> {item.value}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Header