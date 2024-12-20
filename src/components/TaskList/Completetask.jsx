import React from 'react'

const Completetask = ({data, onUndo}) => {
  return (
<div className="h-full flex-shrink-0 w-1/4 rounded-md bg-green-400 p-4">
       <div className="flex justify-between items-center p-4">
              <h3 className="bg-red-600 px-1 py-2 text-sm rounded-md">{data.category}</h3>
              <h4 className="font-bold">{data.taskDate}</h4>
            </div>
            <h2 className="font-bold  text-xl">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDescription}</p>
       <div className='mt-2'>
        <button 
        className='w-full rounded bg-zinc-950 text-white'
        onClick={() => onUndo(data.id)}
        >Complete</button>
    </div>
</div>

  )
}

export default Completetask