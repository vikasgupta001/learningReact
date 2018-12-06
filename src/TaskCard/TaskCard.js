import React from 'react';
import Task from '../Task/Task';
import Footer from '../Footer/Footer';
const taskcard = (props)=>
{
    const tasks = [...props.tasks];
    const style ={
        "width" : "18rem"
    }
    const listStyle ={
        "listStyleType": "none"
    }
    const numberOfTask= tasks.length;
    let footerMessage = "";
    if(numberOfTask){
        footerMessage = numberOfTask+" exists in list";
    }else{
        footerMessage = "No exists in list";
    }
    return (
        <div className="col-md-4">
            <div className="card" style={style}>
                <div className="card-header">
                    {props.taskType}
                </div>
                    <ul className="list-group" style={listStyle}>
                        {
                            tasks.map(t =><Task name={t.name} id={t.id} key={t.id}/>)
                        }
                    </ul>
                    <Footer message={footerMessage}/>
                </div>
                
        </div>
    
    )
}

export default taskcard;