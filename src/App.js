import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person:[
      {id:1, name: 'vikas', age:'23'},
      {id:2, name: 'vishal', age:'26'},
      {id:3, name: 'vikram', age:'25'}
    ],
    showPerson:false,
    toggleBtnText:"Toggle Down"
  }
  changeText = (event,id)=>{
    let personIndex = this.state.person.findIndex(p => p.id===id);
    if(personIndex){
      let personObject = {
        ...this.state.person[personIndex]
      };
      personObject.name = event.target.value;
      let personCollection = [...this.state.person];
      personCollection[personIndex] = personObject;
      this.setState({person:personCollection});
    }
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
      'background':'Green',
      'color':'white',
      'border':'1px solid blue'
    }
    
    let personCon = null;
    if(this.state.showPerson){
      personCon = (
                <div>{
                      this.state.person.map((item, index)=>{
                         return (<Person name={item.name} age={item.age} key={item.id} click={()=>this.deleteHandler(index)} change={(event)=> this.changeText(event,item.id)} />)
                      })
                     }
                </div>
            )
            style.background="Red";
    }
    const textIndicator = [];
    if(this.state.person.length <=2)
      textIndicator.push('red');
    if(this.state.person.length <=1)
      textIndicator.push('italic');

    return (
      <div className='App'>
        <h3 className={textIndicator.join(' ')}> By JSX</h3>
            <button style={style} onClick={this.toggleDiv}>{this.state.toggleBtnText}</button>
            {personCon}
      </div>
    )
  }
}

export default App;
