import React from 'react';
import '../../style/list/list.less';
function List(props) {
    const numbers = props.nums;
    return (
        <ul>
            {numbers.map((item, index) => {
                return <li key={index} >
                    {item}
                </li>
            })}
        </ul>
    )
}

export default List;