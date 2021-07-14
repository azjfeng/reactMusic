import React from 'react'
import '../../style/nav/nav.less'
import Todo from '../../store/todo/container.tsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      <Router>
        <div className="nav">
          <div className="nav_top">
            <ul className="header_nav">
              {
                this.state.list.map((item) => {
                  return <li><Link to="/home/todo">{item}</Link></li>
                })
              }
            </ul>
            <div className="search">
              <input type="text" />
            </div>
          </div>
          <Switch>
          <Route strict path="/" component={Todo}/>
            <Route strict path="/home/todo" component={Todo}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Nav