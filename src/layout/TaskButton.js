import React from 'react';
const taskButton =(props)=>{
    return (
        <button type="button" className={props.buttonClass} onClick={props.clickEvent}>{props.name}</button>
    )
}

export default taskButton