import './index.css';
import Login from './components/Auth/login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import {useEffect,useState,useContext} from 'react';
import { setLocalStorage } from './utils/LocalStorage.jsx';
import { getLocalStorage } from './utils/LocalStorage.jsx';
import {AuthContext} from './context/AuthProvider';
const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext) //useContext(AuthContext) is used to retrieve the data from AuthProvider.jsx file (AuthContext.Provider wraps the children components. This makes the userData (employees and admin info) available to all components that consume this context using useContext(AuthContext).)
  //console.log(authdata.employees)

//  useEffect(() => {
  
  
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       console.log("Faisal")
//       console.log("user logged In",loggedInUser)
//       const userData = JSON.parse(loggedInUser)
//       console.log(userData)
//       setUser(userData.role)
//       setloggedInUserData(userData.data)
//     }

//    } 
//  }, [] );
useEffect(() => {
  // Get the logged-in user data from localStorage
  setLocalStorage()
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    
    console.log("User logged In");

    // Parse the stored JSON data to get the user info
    const userData = JSON.parse(loggedInUser);
    //console.log(userData);

    // Set the user role and user data into the state
    setUser(userData.role);
    setloggedInUserData(userData.data);
  }
  else {
    console.log("No logged-in user in localStorage");
  }
}, []);
 

// localStorage.setItem:
// This method is used to store data in the browser's local storage. The data persists even if the user closes and reopens the browser.

  const handleLogin = (email, password) => {

    console.log("Authdata in handleLogin:", userData);
    console.log("Employees:", userData.employees);
    console.log("Email:", email, "Password:", password);


    if (email === "admin@example.com" && password === "123") {
      console.log("Admin login successful");

      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    } else if (userData ){
     const employee = userData.find ((e)=> email === e.email && password === e.password);

     if(employee){
      console.log("Employee found:", employee);
      setUser( 'employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' ,data :employee}))
      setloggedInUserData(employee)
     }
      
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className='bg-zinc-900 min-h-full'>
    {!user ? <Login handleLogin ={handleLogin} /> : ''}
    {user == 'admin' ?<AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> :null) }
   
    </div>
  );
}

export default App
       