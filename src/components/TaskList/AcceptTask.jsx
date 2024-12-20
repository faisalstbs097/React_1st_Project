import { useState } from 'react';

const AcceptTask = ({data, onComplete, onFail}) => {
  const [clicked, setClicked] = useState(false);
  //console.log(data)

  const handleCompleteClick = () => {
    setClicked(true); // Button will disappear
    onComplete(data.id); // Trigger the parent handler
  };

  const handleFailClick = () => {
    setClicked(true); // Button will disappear
    onFail(data.id); // Trigger the parent handler
  };

  return (
    
        <div className="h-full flex-shrink-0 w-1/4 rounded-md bg-red-400 p-4">
            <div className="flex justify-between items-center p-4">
              <h3 className="bg-red-600 px-1 py-2 text-sm rounded-md">{data.category}</h3>
              <h4 className="font-bold">{data.taskDate}</h4>
            </div>
            <h2 className="font-bold  text-xl">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDescription}</p>
        
        <div className='flex justify-between mt-4'>
            <button 
            className='rounded bg-emerald-500 py-1 px-2 text-sm'
            onClick={handleCompleteClick}
            >Mark as Completed</button>
            <button
             className='rounded bg-red-700 py-1 px-2 text-sm mt-2'
             onClick={handleFailClick}
             >Mark as failed</button>
        </div>
        </div>
    
  )
}

export default AcceptTask