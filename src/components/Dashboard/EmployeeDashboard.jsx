import Header from '../other/Header.jsx';
import TaskListNumbers from '../other/TaskListNumbers.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import React from 'react';


const EmployeeDashboard = (props) => {
  //console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
       
        <Header changeUser changeUser={props.changeUser} data ={props.data}/> 
       <TaskListNumbers data ={props.data}/>
       <TaskList data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard