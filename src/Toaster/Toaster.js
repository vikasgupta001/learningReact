import React from 'react';
const toaster =(props)=>{
    const style ={
        "width": "300px",
        "backgroundColor": "#333",
        "color": "#fff",
        "textAlign": "center",
        "borderRadius": "3px",
        "padding": "16px",
        "position": "fixed",
        "zIndex": "99999",
        "left": "75%",
        "top": "15px",
        "right":"50px"
    }
    style.backgroundColor = props.backgroundColor;
    return (
        <div id="toaster" style={style}>{props.message}</div>
    )
}

export default toaster