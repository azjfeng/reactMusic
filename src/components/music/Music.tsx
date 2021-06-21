import React from 'react';
import '../../style/music/music.less'
class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('/list', {
            body: '',
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    list: res.Data
                })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    render() {
        return (
            <div className="music">
                {
                    this.state.list.map((item) => {
                        return <div className="box">
                            <img src={decodeURIComponent(item.ProductImg)} alt=""/>
                            <div className="left">
                                <span className="title">{decodeURI(item.ProductName)}</span>
                            </div>                            
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Music;