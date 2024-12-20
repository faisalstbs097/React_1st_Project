import {createContext,useState} from 'react'
import {getLocalStorage , setLocalStorage} from '../utils/LocalStorage.jsx';
import { useEffect } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

  const [userData, setuserData] = useState({ employees: [], admin: [] })

//   const data = getLocalStorage()
//   console.log(data)

//   useEffect(() => {
//     const {employees ,admin} =  getLocalStorage()
//   setuserData({employees,admin})
// },[])
   
useEffect(() => {
  setLocalStorage()
  // Correctly destructure the data from getLocalStorage
  const { employees} = getLocalStorage(); 

  // Set the user data in state
  setuserData(employees);
}, [])
  
  
  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )


};
export default AuthProvider 