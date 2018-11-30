import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person:[
      {name: 'vikas', age:'23'},
      {name:'vishal', age:'26'}
    ]
  }
  switchHandler = ()=>{
      this.setState({
        person:[
          {name: 'vikas', age:'25'}
        ]
      })
  }
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am a react component'));
    return (
      <div className='App'>
        <h1> By JSX</h1>
           <Person name={this.state.person[0].name} age={this.state.person[0].age} />
           <button onClick={this.switchHandler}>Switch</button>
       </div>
    )
  }
}

export default App;
