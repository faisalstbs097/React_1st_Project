import React from 'react'

const FailedTask = ({data, onRetry}) => {
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
         className='w-full rounded bg-red-600 text-black'
         onClick={() => onRetry(data.id)}
         >Failed</button>
    </div>
</div>
  )
}

export default FailedTask