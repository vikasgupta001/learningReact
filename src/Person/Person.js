import React from "react";

const person = (props)=>{
    return (
    <div>
        <h1 onClick={props.click}>Hi, this is a react person. His name is {props.name} and My age is {props.age}</h1>
            <input type="text" onChange={props.click}/>
    </div>
    )
}

export default person;