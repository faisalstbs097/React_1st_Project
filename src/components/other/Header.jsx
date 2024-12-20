import { useState } from "react"
import { setLocalStorage } from "../../utils/LocalStorage"

const Header = (props) => {
//   console.log(data )

// const [username, setusername] = useState('')
// if(!data){
//   setusername('Admin')
// }else{
//   setusername(data.firstName)
// }

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')

  //console.log(props.changeUser)
  //window.location.reload()
  
  props.changeUser('')  // jb change user khali hojayega tb direct login wala page khul jayef=ga
}

  return (
    <div className="flex items-end justify-between p-2">
        <h1 className="text-2xl">Hello <br /> <span className="text-3xl font-semibold">Username</span> </h1>
        <button onClick={logOutUser} className="bg-red-500 rounded px-5 py-2 text-lg font-medium">Log out</button>
    </div>
  )
}

export default Header