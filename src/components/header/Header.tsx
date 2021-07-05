import React from 'react'
import '../../style/header/header.less'
class Header extends React.Component<IProps, IState>{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="header">
                <div className="header_nav">
                    <a>home</a>
                    <a>关于我们</a>
                </div>
                <div className="header_bg">
                    <img src="../../assets/img/new_top-min.jpg" alt=""/>
                </div>
            </div>
        )
    }    
}

export default Header