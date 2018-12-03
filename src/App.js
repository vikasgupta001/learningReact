import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person:[
      {name: 'vikas', age:'23'},
      {name:'vishal', age:'26'}
    ],
    showPerson:false,
    toggleBtnText:"Toggle Down"
  }
  switchHandler = (name,age)=>{
      this.setState({
        person:[
          {name: 'vikas', age:'25'},
          {name: name, age:age}
        ]
      })
  }
  changeText = (event)=>{
    this.setState({
      person:[
        {name: 'vikas', age:'25'},
        {name: event.target.value, age:'26'}
      ]
    })
  }
  toggleDiv=()=>{
    const doesShow = this.state.showPerson;
    if(doesShow)
      this.setState({showPerson:!doesShow,toggleBtnText:'Toggle Down'});
    else
      this.setState({showPerson:!doesShow,toggleBtnText: 'Toogle Up'});
  }
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am a react component'));
    const style= {
      'font':'Arial',
      'background':'Red',
      'color':'white',
      'border':'1px solid blue'
    }
    return (
      <div className='App'>
        <h1> By JSX</h1>
            <button style={style} onClick={this.toggleDiv}>{this.state.toggleBtnText}</button>
            {
                this.state.showPerson ?
                <div>
                  <Person name={this.state.person[0].name} age={this.state.person[0].age} click={()=>this.switchHandler('Vijay',25)} />
                  <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.changeText} />
                </div> : null
            }
      </div>
    )
  }
}

export default App;
