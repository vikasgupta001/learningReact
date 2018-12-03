import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person:[
      {id:1, name: 'vikas', age:'23'},
      {id:2, name: 'vishal', age:'26'}
    ],
    showPerson:false,
    toggleBtnText:"Toggle Down"
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
  deleteHandler=(index)=>{
    // Way 1 Using Old JS Method
    //let val = this.state.person.slice();
    // Way 2 Using Spread Operator
    let val = [...this.state.person];
    val.splice(index,1);
    this.setState({person:val});
  }
  render() {
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am a react component'));
    const style= {
      'font':'Arial',
      'background':'Red',
      'color':'white',
      'border':'1px solid blue'
    }
    
    let personCon = null;
    if(this.state.showPerson){
      personCon = (
                <div>{
                      this.state.person.map((item, index)=>{
                         return (<Person name={item.name} age={item.age} key={item.id} click={()=>this.deleteHandler(index)} />)
                      })
                     }
                </div>
            )
    }
    return (
      <div className='App'>
        <h1> By JSX</h1>
            <button style={style} onClick={this.toggleDiv}>{this.state.toggleBtnText}</button>
            {personCon}
      </div>
    )
  }
}

export default App;
