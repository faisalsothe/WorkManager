'use client'

import React, { useState } from 'react'
import SignUpSvg from '../../assets/sign-up.svg'
import Image from 'next/image'
import { Toast, toast } from 'react-toastify';
import { signUp } from '@/services/userService';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    about:"",
  })

  const router=useRouter();

  const doSignUp=async (event)=>{
    event.preventDefault();
    console.log(data);
    //validate data
    

    if(data.name.trim()==='' || data.name===null){
      toast.warning("name is required",{
        position:"top-center"
      });
      return;
    }
    if(data.email.trim()==='' || data.email==null){
      toast.warning("email is required",{
        position:"top-center"
      });
      return;
    }
    if(data.password.trim()==='' || data.password===null){
      toast.warning("password is required",{
        position:"top-center"
      });
      return;
    }
    if(data.about.trim()==='' || data.about===null){
      toast.warning("about is required",{
        position:"top-center"
      });
      return;
    }

    try{
      const result=await signUp(data);
      toast.success("User is registered",{position:'top-left'})
      setTimeout(()=>{router.push("/log-in")},2000);
    }catch(error){
      console.log(error);
      toast.error("Error while sign-up",{position:'top-left'})
    }

    setData({
      name:'',
      email:'',
      password:'',
      about:''
    })


    }

    const resetForm=()=>{
      setData({
        name:'',
        email:'',
        password:'',
        about:''
      })
    }

  return (
    <div className='flex flex-col items-center justify-center py-5'>
          <div className="flex m-5 justify-center">
          <Image src={SignUpSvg} priority alt="sign-in-banner" style={{
            width:"30%"
          }}/>
          </div>
          <h1 className='text-3xl text-center'>Create An Account</h1>
          <form action="#" className='mt-5' onSubmit={doSignUp} >
            {/* Name */}
            <div className="mt-3">
              <label htmlFor="user_name" placeholder='Enter here' className='block text-sm font-medium mb-2'>Username</label>
              <input type="text" name="user_name" id="user_name" className='rounded-3xl w-max md:w-96 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' onChange={(event)=>{
                setData({
                  ...data,
                name:event.target.value
                })
              }}
              value={data.name}
              />
            </div>
             {/* Email */}
             <div className="mt-3">
              <label htmlFor="email" placeholder='Enter here' className='block text-sm font-medium mb-2'>Email</label>
              <input type="email" name="email" id="email" className='rounded-3xl w-max md:w-96 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' onChange={(event)=>{
                setData({
                  ...data,
                email:event.target.value
                })
              }}
              value={data.email} />
            </div>
             {/* Password */}
             <div className="mt-3">
              <label htmlFor="user_password" placeholder='Enter here' className='block text-sm font-medium mb-2'>Password</label>
              <input type="password" name="user_password" id="user_password" className='rounded-3xl w-max md:w-96 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' 
              onChange={(event)=>{
                setData({
                  ...data,
                password:event.target.value
                })
              }}
              value={data.password}/>
            </div>
             {/* About */}
             <div className="mt-3">
              <label htmlFor="user_about" placeholder='Enter here' className='block text-sm font-medium mb-2'>About</label>
              <textarea name="user_about" id="user_about" className='rounded-3xl w-max md:w-96 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' rows="5"
              onChange={(event)=>{
                setData({
                  ...data,
                about:event.target.value
                })
              }}
              value={data.about}></textarea>
              </div>
            <div className="mt-3 text-center">
              <button type="submit" className='px-3 py-2 mr-3 bg-green-600 rounded hover:bg-green-400'>Sign-Up</button>
              <button className='px-3 py-2 bg-orange-600 rounded hover:bg-orange-400' onClick={resetForm}>Reset</button>
            </div>
          </form>
        </div>
  )
}

export default SignUpPage