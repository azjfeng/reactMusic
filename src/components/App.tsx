import React from 'react';
import Home from '../components/home/Home.tsx';
import Todo from '../store/todo/container.tsx';
import Header from './header/Header.tsx';
import Nav from './nav/Nav.tsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// 首先我们需要导入一些组件...
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    )
  }
}

export default App;