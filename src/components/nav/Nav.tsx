import React from 'react'
import '../../style/nav/nav.less'
import {
  Link
} from "react-router-dom";
class Nav extends React.Component<IProps, IState>{
  constructor(props) {
    super(props)
    this.state = {
      list: ['首页', '首页', '首页', '首页', '首页', '首页', '首页']
    }
  }
  render() {
    return (
      <div className="nav">
        <div className="nav_top">
          <ul className="header_nav">
            {
              this.state.list.map((item) => {
                return <li><Link to="/todo">{item}</Link></li>
              })
            }
          </ul>
          <div className="search">
            <input type="text" />
          </div>
        </div>
      </div>
    )
  }
}

export default Nav