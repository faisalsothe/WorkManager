"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'


export const CustomNavbar = () => {
    const context=useContext(UserContext);
    const router=useRouter();
    //Error Handling Function
    const autoLoginErrorHandle= async (booleanVar)=>{
        if(booleanVar){
            try{
                await logout();
                Cookies.remove("authToken");
                context.setUser("");
                booleanVar=false
                router.push("/");
            }catch(error){
                console.log(error);
            }
        }
    }
    const isVar=true;
    autoLoginErrorHandle(isVar);

    async function doLogout(){
        try{
            await logout();
            Cookies.remove("authToken");
            context.setUser("");
            toast.success("Logged Out",{position:"top-right"})
            router.push("/");
        }catch(error){
            console.log(error);
            toast.error("Log-Out Error!!",{position:"top-left"});
        }
    }
  return (
    <nav className='bg-blue-600 h-12 py-2 px-36 flex justify-between items-center'>
        <div className='text-md md:text-3xl brand font-semibold'>
            <h1><a href="#">FZ-MNGR</a>
            </h1>
        </div>
        <div>
            <ul className='hidden md:flex space-x-5'>
            <li><Link href={'/'} className='hover:text-blue-200'>Home</Link></li>
            <li><Link href={'/about'} className='hover:text-blue-200'>About</Link></li>
            <li><Link href={'/contact'} className='hover:text-blue-200'>Contact</Link></li>
                {
                    context.user && (
                        <>
                        <li><Link href="/add-task" className='hover:text-blue-200'>Add Task</Link></li>
                        <li><Link href="/show-task">Show Tasks</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
        <div>
            <ul className='hidden md:flex space-x-3'>
                {
                    context.user && (
                        <>
                        <li><Link href="/#">{context.user.name}</Link></li>
                        <li><button onClick={doLogout}>Log Out</button></li>
                        </>
                    )
                }
                {
                    !context.user && (
                        <>
                        <li><Link href="/log-in">Login</Link></li>
                        <li><Link href="/sign-up">Sign-Up</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
    </nav>
  )
}
