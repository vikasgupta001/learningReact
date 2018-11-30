import React from "react";
import "./Person.css"
const person = (props)=>{
    return (
    <div className="Person">
        <h1 onClick={props.click}>Hi, this is a react person. His name is {props.name} and My age is {props.age}</h1>
            <input type="text" onChange={props.click}/>
    </div>
    )
}

export default person;