import React from 'react';

class Music extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('/list', {
            body: '',
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
        }).then(res => res.json()).then(res => console.log(res))
            .catch((err) => {
                console.log('err', err)
            })
    }
    render() {
        return (
            <div className="music">
                <p>music</p>
            </div>
        )
    }
}

export default Music;