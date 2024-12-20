import React from 'react'

const NewTask = ({data, onAccept}) => {
  return (
    <div className="h-full w-1/4 flex-shrink-0  rounded-md bg-blue-400 p-4">
            <div className="flex justify-between items-center p-4">
              <h3 className="bg-red-600 px-1 py-2 text-sm rounded-md">{data.category}</h3>
              <h4 className="font-bold">{data.taskDate}</h4>
            </div>
            <h2 className="font-bold  text-xl">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div className='mt-4'>
                <button 
                className='rounded bg-blue-500 py-1 px-2'
                onClick={() => onAccept(data.id)}
                >Accept Task </button>
            </div>
            </div>
          
  )
}

export default NewTask