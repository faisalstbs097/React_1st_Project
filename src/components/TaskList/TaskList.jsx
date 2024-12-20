import AcceptTask from '../TaskList/AcceptTask.jsx'
import Completetask from './Completetask.jsx'
import FailedTask from './FailedTask.jsx'
import NewTask from './NewTask.jsx'
import { useState } from 'react'

const TaskList = ({data}) => {
  const [tasks, setTasks] = useState(data.tasks);
  console.log(data)

  const handleAcceptTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, active: true, newTask: false } : task
      )
    );
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true, active: false } : task
      )
    );
  };

  const handleFailTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, failed: true, active: false } : task
      )
    );
  };

  const handleNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      newTask: true,
      taskTitle: 'New Task Title',
      taskDescription: 'Description of the new task',
      category: 'General',
      taskDate: new Date().toLocaleDateString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  
  return (
    <div id='TaskList'  className='h-[50%] flex items-center justify-start gap-5 flex-nowrap w-[95%] mt-10'>
        
        {/* <NewTask/>        
       <Completetask/>
       <AcceptTask/>
       <FailedTask/> */}

       {data.tasks.map((elem,idx)=>{

        if(elem.active){
          return  <AcceptTask key={idx} data={elem} onComplete={handleCompleteTask} onFail={handleFailTask}/>
        }

       if (elem.newTask){
         return  <NewTask key={idx} data={elem} onAccept={handleAcceptTask}/>
       }

       if (elem.completed){
        return <Completetask key={idx} data={elem} onUndo={handleCompleteTask}/>
       }

       if(elem.failed){
        return <FailedTask key={idx} data={elem} onRetry={handleFailTask}/>
       }
       })}
    </div>
  )
}

export default TaskList
