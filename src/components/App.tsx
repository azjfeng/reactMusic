import React from 'react';
import Todos from '../store/todo/container.tsx'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    )
  }
}

export default App;