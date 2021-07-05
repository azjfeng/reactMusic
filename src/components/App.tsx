import React from 'react';
import Header from '../components/header/Header.tsx'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;