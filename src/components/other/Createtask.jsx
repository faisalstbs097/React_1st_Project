import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Createtask = () => {

     const [userData, setuserData] = useContext(AuthContext);

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault()
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            assignTo,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
          };

        setNewTask({taskTitle,taskDescription,taskDate,assignTo,category,active:false,newTask:true,failed:false,completed:false})

        //console.log(Task)
        //console.log(taskTitle,taskDescription,taskDate,assignTo,category)
       

        const data =userData;
        //console.log(userData.employees)
       
       data.forEach(function(elem){
        //console.log(elem.firstName)
        if(assignTo == elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCount.newTask = elem.taskCount.newTask + 1 
            //console.log(elem)
        }
        return elem;
       })
       setuserData(data)
       console.log(data)
       //localStorage.setItem('employees',JSON.stringify(data))

       settaskTitle('')
       settaskDescription('')
       settaskDate('')
       setassignTo('')
       setcategory('')
       
    }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded overflow-hidden">
            <form onSubmit = {(e)=>{
                submitHandler(e)
            }} 
            
            className='flex w-full p-3 items-start justify-between overflow-hidden '>
                <div className ='w-[50%] '>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                    value={taskTitle}
                    onChange={(e)=>{
                        settaskTitle(e.target.value)
                    }} className='bg-black text-sm py-1 px-2 w-4/5 rounded outline-none' type="text" placeholder='Make a UI ' />
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input 
                    value={taskDate}
                    onChange={(e)=>{
                        settaskDate(e.target.value)
                    }}className='bg-black text-sm py-1 px-2 w-4/5 rounded outline-none' type="date" /> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                    value={assignTo}
                    onChange={(e)=>{
                        setassignTo(e.target.value)
                    }}className='bg-black text-sm py-1 px-2 w-4/5 rounded outline-none'type="text" placeholder='Employee Name' />
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={category}
                    onChange={(e)=>{
                       setcategory(e.target.value)
                    }} className='bg-black text-sm py-1 px-2 w-4/5 rounded outline-none' type="text" placeholder='Design,dev etc' />
                </div>
                <div className=' flex flex-col w-1/2 '>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        settaskDescription(e.target.value)
                    }} className='bg-black text-sm py-1 px-2 w-4/5 rounded outline-none' name="" id="" cols={30} rows={7}></textarea>
                    <button className='text-sm py-1 px-2 w-4/5 rounded bg-emerald-400 mt-2'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default Createtask