import  { useState } from 'react'

const Login = ({handleLogin}) => {


const [email,setEmail] = useState('')
const [password, setpassword] = useState('')
const SubmitHandler = (e) =>{
  e.preventDefault()
  //console.log("Hello guys form submitted")
  //console.log("email is ",email)
  //console.log("password is",password)
  handleLogin(email,password)
  setEmail("")
  setpassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center first-line:'>
        <div className='border-2 rounded-xl w-96 h-96 bg-zinc-950 p-20 m-20 border-emerald-600 '>
              
            <form
            
                  onSubmit={(e)=>{
                      SubmitHandler(e)
                  }} className='flex flex-col items-center justify-center'>

                          <input 
                          value={email}
                          onChange = {(e)=>{
                            setEmail(e.target.value)
                          }}
                            required className =' border-2 border-red-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-500 bg-black' type="email" placeholder='Enter your email'  />
                            <input
                            value={password}
                            onChange = {(e)=>{
                              setpassword(e.target.value)
                            }}
                            required className =' border-2 border-red-600 rounded-full py-4 px-5 text-xl mt-3 placeholder:text-gray-500  bg-black' type="password" placeholder='Enter your password' />
                            <button className="border-2 bg-emerald-500 rounded-full py-4 px-5 text-xl mt-10 w-64">Log In</button>
             </form>
                        
       </div>
    </div>
  )
}

export default Login