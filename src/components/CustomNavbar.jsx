"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import React, { useContext} from 'react'
import { toast } from 'react-toastify'
import MobileMenu from './MobileMenu'
import { useRouter } from 'next/navigation'

export const CustomNavbar = () => {
let context=useContext(UserContext);
if(context?.user){
    var name=context.user.name;
}
const router=useRouter();

        async function doLogout(){
            try{
                await logout();
                localStorage.clear();
                context.setUser(null);
                toast.success("Logged Out",{position:"top-right"})
                router.push("/log-in");
            }catch(error){
                toast.error("Log-Out Error!!",{position:"top-left"});
            }
        }


  return (
    <nav className='bg-blue-600 h-12 py-2 px-10 flex justify-between items-center'>
        <div className='text-2xl md:text-3xl brand font-semibold'>
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
                        <li><Link href="/show-task" className='hover:text-blue-200'>Show Tasks</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
        {/* MOBILE MENU */}
        <div className='ml-auto md:hidden '>
            <MobileMenu logOut={doLogout}/>
        </div>
        <div>
            <ul className='hidden md:flex space-x-3'>
                {
                    context.user && (
                        <>
                        <li><Link href="/#">{name.charAt(0).toUpperCase()+name.slice(1)}</Link></li>
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
