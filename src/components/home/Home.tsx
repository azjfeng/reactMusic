import React from 'react'
import Header from '../header/Header.tsx'
import Nav from '../nav/Nav.tsx'
class Home extends React.Component<IProps, IState>{
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log(this.props.children)
  }
  render() {
    return (
      <div className="home">
        <Header />
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Home