import React from 'react';
import Header from '../components/header/Header.tsx'
import Nav from '../components/nav/Nav.tsx'
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