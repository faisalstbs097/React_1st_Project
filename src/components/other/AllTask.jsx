import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext);
  //console.log(authdata.employees);

  return (
    <div className="bg-black p-5 h-84">
      <div className="bg-red-400 mb-2 p-5 flex justify-between border-lime-300">
        <h2 className="text-lg font-medium py-1 px-2 rounded 1/5 bg-red-600">Employee Name</h2>
        <h3 className="text-lg font-medium py-1 px-2 rounded 1/5 bg-red-600">New Task</h3>
        <h5 className="text-lg font-medium py-1 px-2 rounded 1/5 bg-red-600">Active Task</h5>
        <h5 className="text-lg font-medium py-1 px-2 rounded 1/5 bg-red-600">Completed</h5>
        <h5 className="text-lg font-medium py-1 px-2 rounded 1/5 bg-red-600">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map((elem,idx) => (
          <div key={idx} className="bg-black border-2 mb-2 p-5 flex justify-between " >
            <h2 className="text-lg font-medium py-1 px-2 rounded w-1/5 b">{elem.firstName}</h2>
            <h3 className="text-lg font-medium py-1 px-2 rounded w-1/5 text-blue-600">{elem.taskCount.new}</h3>
            <h5 className="text-lg font-medium py-1 px-2 rounded w-1/5 text-yellow-400">{elem.taskCount.active}</h5>
            <h5 className="text-lg font-medium py-1 px-2 rounded w-1/5 ">{elem.taskCount.completed}</h5>
            <h5 className="text-lg font-medium py-1 px-2 rounded w-1/5 text-red-600">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
