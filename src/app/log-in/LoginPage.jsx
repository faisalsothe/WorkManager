'use client'
import UserContext from '@/context/userContext'
import { logIn } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import loginImage from '../../assets/login.svg'

const LoginPage = () => {

    const router=useRouter()
    const context=useContext(UserContext);

    const [loginData, setloginData] = useState({
        email:"",
        password:""
    })

    const loginFormSubmitted=async(event)=>{
        event.preventDefault();
        console.log(loginData);

        if(loginData.email.trim()==='' || loginData.password.trim()===''){
            toast.warning("Invalid Data!!",{position:"top-right"});
            return;
        }

        try{
          const result=await logIn(loginData);
          console.log(result);
          toast.success("Logged In",{position:"top-right"});
          //redirect
          context.setUser(result.user);
          router.push("/profile/user")

        }
        catch(error){
            console.log(error);
            toast.error(error.response.data.message,{position:"top-right"});
        }



    }
  return (
    <div className='grid grid-col-12 justify-center'>
      <div className='col-span-4 col-start-5'>
        <div className='py-5'>
          <div className='flex m-5 justify-center'>
          <Image alt="log-in-banner" src={loginImage} priority style={{width:"30%"}}/>
          </div>
        <h1 className='text-3xl text-center'>Log-In To Your Account</h1>

        <form action="/" onSubmit={loginFormSubmitted}>
             {/* Email */}
             <div className="mt-3">
              <label htmlFor="email" placeholder='Enter here' className='block text-sm font-medium mb-2'>Email</label>
              <input type="email" name="email" id="email" className='rounded-3xl w-full p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' onChange={(event)=>{
                setloginData({
                  ...loginData,
                email:event.target.value
                })
              }}
              value={loginData.email} />
            </div>
             {/* Password */}
             <div className="mt-3">
              <label htmlFor="user_password" placeholder='Enter here' className='block text-sm font-medium mb-2'>Password</label>
              <input type="password" name="user_password" id="user_password" className='rounded-3xl w-full p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' 
              onChange={(event)=>{
                setloginData({
                  ...loginData,
                password:event.target.value
                })
              }}
              value={loginData.password}/>
            </div>
            <div className="mt-3 text-center">
              <button type="submit" className='px-3 py-2 mr-3 bg-green-600 rounded hover:bg-green-400'>Log-In</button>
              <button className='px-3 py-2 bg-orange-600 rounded hover:bg-orange-400'>Reset</button>
            </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default LoginPage