import React from 'react';

const footer =(props)=>{
    return (
        <div className="card-body">
            <strong><span className="count-todos"></span></strong>{props.message}
        </div>
        )
}

export default footer;