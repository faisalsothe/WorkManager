"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'


export const CustomNavbar = () => {
    const context=useContext(UserContext);
    const router=useRouter();

    async function doLogout(){
        try{
            const result=await logout();
            console.log(result);
            context.setUser(undefined);
            toast.success("Logged Out",{position:"top-right"})
            
            router.push("/log-in");
        }catch(error){
            console.log(error);
            toast.error("Log-Out Error!!",{position:"top-left"});
        }
    }
  return (
    <nav className='bg-blue-600 h-12 py-2 px-36 flex justify-between items-center'>
        <div className='brand text-3xl font-semibold'>
            <h1><a href="#">FZ-MNGR</a>
            </h1>
        </div>
        <div>
            <ul className='flex space-x-5'>
                {
                    context.user && (
                        <>
                        <li><Link href={'/'} className='hover:text-blue-200'>Home</Link></li>
                        <li><Link href="/add-task" className='hover:text-blue-200'>Add Task</Link></li>
                        <li><Link href="/show-task">Show Tasks</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
        <div>
            <ul className='flex space-x-3'>
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
