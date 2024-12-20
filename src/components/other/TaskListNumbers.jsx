const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex screen justify-between gap-5 mt-5'>
      <div className=' w-1/2 bg-red-400 py-5 px-10 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-1/2 bg-blue-400 py-5 px-10 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className=' w-1/2 bg-green-400 py-5 px-10 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>AcceptedTask</h3>
      </div>
      <div className=' w-1/2 bg-yellow-400 py-5 px-10 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers