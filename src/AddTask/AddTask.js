import React from 'react';
const addTask =(props)=>{
    return (
        <div className="container row col">
            <div className="form-group">
                    <label>New Task</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Type Task and Hit Enter" onKeyPress={props.addTask}/>
            </div>
        </div>
    )
}

export default addTask;