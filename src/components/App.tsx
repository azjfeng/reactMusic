import React from 'react';
import Home from '../components/home/Home.tsx';
import Todo from '../store/todo/container.tsx';
import Header from './header/Header.tsx';
import Nav from './nav/Nav.tsx';
import Edit from './edit/Edit.tsx'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute 
} from "react-router-dom";
// 首先我们需要导入一些组件...
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Header} >
          </Route>
          <Route exact path="/edit" component={Edit} >
          </Route>
          <Route exact path="/nav" component={Nav} >
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;