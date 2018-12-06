import React from 'react';

const task = (props)=>{
    const checkBoxStyle = {
        'textAlign': 'left',
        'padding':'0px 12px'
    }
    return (
        <li className="ui-state-default">
            <div className="checkbox" style={checkBoxStyle}>
                <input type="checkbox" value=""/><label className="m-2">{props.name}</label>
            </div>
        </li>
    )
}

export default task;