import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import TaskCard from './TaskCard/TaskCard'
import AddTask  from './AddTask/AddTask';
import Toaster from './Toaster/Toaster';
class App extends Component {
 state ={
    taskID:0,
    toDoTask :[],
    runningTask :[],
    completedTask :[],
    toaster:{}
  }
  addTask=(event)=>{
         if(event.key==='Enter'){
             delete this.toaster;
             this.toaster={};
             const taskName= event.target.value.trim();
             const toaster = {...this.state.toaster};
             if(taskName ===''){
                toaster.backgroundColor='Blue';
                toaster.message='Task can not be empty';
                this.setState({toaster:toaster});
             }else{
                  const toDoTasks =[...this.state.toDoTask];
                  const FindDuplicate = toDoTasks.findIndex((t)=> t.name.toUpperCase()===taskName.toUpperCase());
                  if(FindDuplicate > -1){
                    toaster.backgroundColor='Red';
                    toaster.message='Duplicate Task cannot be added';
                    this.setState({toaster:toaster});
                  }
                  else{
                      const {taskID} = this.state;
                      const toDoTask = {
                        id: taskID+1,
                        name: taskName
                      };
                      toDoTasks.push(toDoTask);
                      this.setState({toDoTask:toDoTasks,taskID:taskID+1,toaster:toaster});
                      toaster.backgroundColor='Green';
                      toaster.message='Task added successfully';
                  }
             }
             
             $(event.target).val('');
             $('#toaster').show();
             setTimeout(()=>$('#toaster').hide(), 3000);
     }
  }
  render() {
    return (
      <div className="App">
       <Toaster backgroundColor={this.state.toaster.backgroundColor} message={this.state.toaster.message} />
        <div className="container">
          <AddTask addTask={(event)=>this.addTask(event)}/>
          <div className="row">
                  <TaskCard tasks={this.state.toDoTask} taskType="To Be Completed"/>
                  <TaskCard tasks={this.state.runningTask} taskType="Pending Tasks"/>
                  <TaskCard tasks={this.state.completedTask} taskType="Completed Task"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
