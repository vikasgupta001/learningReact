import React from "react";
import "./Person.css"
import Radium from 'radium';
const personStyle ={
    '@media (max-width:1140px)':{
        'font-size':'smaller'
    },
    '@media (max-width:972px)':{
        'font-size':'x-small'
    }
}
const person = (props)=>{
    return (
    <div className="Person" style={personStyle}>
        <h1  onClick={props.click}>Hi, this is a react person. His name is {props.name} and My age is {props.age}</h1>
            <input type="text" onChange={props.change} value={props.name}/>
    </div>
    )
}


export default Radium(person);