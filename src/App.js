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
  switchHandler = (name,age)=>{
      this.setState({
        person:[
          {name: 'vikas', age:'25'},
          {name: name, age:age}
        ]
      })
  }
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am a react component'));
    return (
      <div className='App'>
        <h1> By JSX</h1>
           <Person name={this.state.person[0].name} age={this.state.person[0].age} click={()=>this.switchHandler('Vijay',25)} />
           <button onClick={this.switchHandler}>Switch</button>
           <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchHandler.bind(this,'Disha','24')} />
       </div>
    )
  }
}

export default App;
